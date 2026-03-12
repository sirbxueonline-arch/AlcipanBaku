import { NextResponse } from "next/server";
import path from "path";
import { existsSync, readFileSync } from "fs";
import { getDesignImagePath } from "@/data/roomPreviewDesigns";
import sharp from "sharp";
import OpenAI from "openai";

const SIZE = 1024;

type DesignType =
  | "sade_tavan"
  | "fiqurlu_tavan"
  | "gizli_isiqli_tavan"
  | "tv_stend"
  | "yataq_otagi"
  | "divar_dekoru";

const DESIGN_TYPES: DesignType[] = [
  "sade_tavan",
  "fiqurlu_tavan",
  "gizli_isiqli_tavan",
  "tv_stend",
  "yataq_otagi",
  "divar_dekoru",
];

const FALLBACK_PROMPTS: Record<DesignType, string> = {
  sade_tavan: "Replace only the ceiling with a simple flat white gypsum ceiling. Keep the rest of the room identical. Clean, finished look. No rough texture.",
  fiqurlu_tavan: "Replace only the ceiling with a decorative white gypsum ceiling with curved layered shapes. Rest of room unchanged. Finished, photorealistic.",
  gizli_isiqli_tavan: "Replace only the ceiling with a modern white gypsum ceiling with hidden LED strip lighting and soft glow. Rest of room unchanged. Clean finish.",
  tv_stend: "Add a modern white gypsum TV wall unit with shelves and LED lighting to the main wall. Rest of room unchanged. Finished interior.",
  yataq_otagi: "Replace only the ceiling with a decorative bedroom gypsum ceiling with elegant shapes and soft lighting. Rest of room unchanged. Clean, finished.",
  divar_dekoru: "Add modern decorative white gypsum wall panels with vertical lines. Rest of room unchanged. Finished look.",
};

const VISION_PROMPT = `Describe this interior design image in detail for an AI that will recreate it on a customer's room photo. Include: the curved gypsum/drywall shapes, wave-shaped wall frame, curved ceiling panel, and any matching wall and ceiling features. Note materials (smooth plaster, gypsum), edges, and lighting. Output only the description, no preamble.`;

function isValidDesignType(value: string): value is DesignType {
  return DESIGN_TYPES.includes(value as DesignType);
}

async function getDesignDescription(apiKey: string, designType: DesignType): Promise<string | null> {
  const imagePath = getDesignImagePath(designType as import("@/lib/designPrompts").DesignType);
  if (!imagePath) return null;
  const fullPath = path.join(process.cwd(), "public", imagePath.replace(/^\//, ""));
  if (!existsSync(fullPath)) return null;

  const buffer = readFileSync(fullPath);
  const base64 = buffer.toString("base64");
  const ext = path.extname(fullPath).toLowerCase();
  const mime = ext === ".png" ? "image/png" : ext === ".webp" ? "image/webp" : "image/jpeg";

  const openai = new OpenAI({ apiKey });
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: VISION_PROMPT },
          { type: "image_url", image_url: { url: `data:${mime};base64,${base64}` } },
        ],
      },
    ],
    max_tokens: 250,
  });
  return completion.choices?.[0]?.message?.content?.trim() ?? null;
}

/** Mask: transparent = AI edits, opaque = keep. */
async function createEditMask(designType: DesignType, width: number, height: number): Promise<Buffer> {
  const channels = 4;
  const data = Buffer.alloc(width * height * channels);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      let edit = false;
      if (designType === "divar_dekoru") {
        edit = x < width * 0.2 || x > width * 0.8;
      } else if (designType === "tv_stend") {
        edit = x > width * 0.2 && x < width * 0.8 && y < height * 0.7;
      } else {
        edit = y < height * 0.35;
      }
      if (edit) {
        data[i] = 0;
        data[i + 1] = 0;
        data[i + 2] = 0;
        data[i + 3] = 0;
      } else {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
        data[i + 3] = 255;
      }
    }
  }
  return sharp(data, { raw: { width, height, channels } }).png().toBuffer();
}

/**
 * AI generates the preview: OpenAI edits the room photo to add the chosen design.
 */
export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY missing" },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const imageFile = formData.get("image");
    const designTypeRaw = formData.get("designType");

    if (!(imageFile instanceof File)) {
      return NextResponse.json(
        { error: "Invalid image file" },
        { status: 400 }
      );
    }

    const designType = String(designTypeRaw || "").trim();
    if (!isValidDesignType(designType)) {
      return NextResponse.json(
        { error: "Invalid design type" },
        { status: 400 }
      );
    }

    let prompt: string;
    try {
      const designRef = await getDesignDescription(apiKey, designType as DesignType);
      if (designRef) {
        prompt = `Image 1 is the design reference. It shows: ${designRef}

Image 2 is the room where the design should be applied.

Copy the curved gypsum drywall wall and ceiling feature from image 1 and recreate it on the main wall of the room in image 2. Transfer the same wave-shaped wall frame and matching curved ceiling panel. Keep the architecture, camera angle, windows, floor, and room layout from image 2 exactly the same.

Only add the curved drywall structure from image 1 and adapt its size and proportions so it fits naturally on the wall in image 2. The result should look like a finished modern interior with smooth plaster, clean edges, and realistic lighting.`;
      } else {
        prompt = `Copy the curved gypsum drywall wall and ceiling feature from the design reference and recreate it on the main wall of this room. Transfer the same wave-shaped wall frame and matching curved ceiling panel. Keep the architecture, camera angle, windows, floor, and room layout exactly the same. Only add the curved drywall structure and adapt its size and proportions so it fits naturally on the wall. The result should look like a finished modern interior with smooth plaster, clean edges, and realistic lighting.`;
      }
    } catch {
      prompt = FALLBACK_PROMPTS[designType as DesignType];
    }

    const inputBuffer = Buffer.from(await imageFile.arrayBuffer());
    const imageBuffer = await sharp(inputBuffer)
      .ensureAlpha()
      .resize(SIZE, SIZE, { fit: "cover", position: "center" })
      .png()
      .toBuffer();

    const maskBuffer = await createEditMask(designType as DesignType, SIZE, SIZE);

    const openai = new OpenAI({ apiKey });
    const result = await openai.images.edit({
      model: "gpt-image-1",
      image: new File([new Uint8Array(imageBuffer)], "room.png", { type: "image/png" }),
      mask: new File([new Uint8Array(maskBuffer)], "mask.png", { type: "image/png" }),
      prompt,
      size: "1024x1024",
    });

    const imageBase64 = result.data?.[0]?.b64_json;
    if (!imageBase64) {
      return NextResponse.json(
        { error: "No image returned from OpenAI" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      imageUrl: `data:image/png;base64,${imageBase64}`,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Generation failed" },
      { status: 500 }
    );
  }
}
