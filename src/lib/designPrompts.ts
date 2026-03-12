/**
 * Design type identifiers for the room preview AI.
 * Must match frontend design selector values.
 */
export const DESIGN_TYPES = [
  'sade_tavan',
  'fiqurlu_tavan',
  'gizli_isiqli_tavan',
  'tv_stend',
  'yataq_otagi',
  'divar_dekoru',
] as const;

export type DesignType = (typeof DESIGN_TYPES)[number];

// AI edit: same color as wall/ceiling, design integrated into surface (no different-colored object).
const PROMPT_MAP: Record<DesignType, string> = {
  sade_tavan:
    'Same white as the existing wall. Simple flat white gypsum ceiling only, no color change, same finish as room.',
  fiqurlu_tavan:
    'Same white as the wall. Decorative white gypsum ceiling with curved shapes and tiers, same color as room, no other colors.',
  gizli_isiqli_tavan:
    'Same white as the wall. White gypsum ceiling with hidden LED glow, same wall color, soft light only.',
  tv_stend:
    'Built-in white gypsum TV wall unit: horizontal shelves, rectangular recess or niche for the television, clean geometric shapes, same white as the wall. No wavy lines, no abstract marks, no cracks. Clear TV stand design only.',
  yataq_otagi:
    'Same white as the wall. White decorative gypsum ceiling, same color as room, soft lighting, no other colors.',
  divar_dekoru:
    'Same exact wall color. Decorative wall panels in the same white as the wall, subtle relief or pattern only, no different color, seamless with existing wall.',
};

export function getPromptForDesign(designType: DesignType): string {
  const designPrompt = PROMPT_MAP[designType];
  if (!designPrompt) {
    throw new Error(`Unknown design type: ${designType}`);
  }
  return designPrompt;
}

export function isValidDesignType(value: string): value is DesignType {
  return DESIGN_TYPES.includes(value as DesignType);
}

/** Map ceiling design section IDs (from packageSystem) to API design types */
const CEILING_ID_TO_DESIGN_TYPE: Record<string, DesignType> = {
  'sade-tavan': 'sade_tavan',
  'fiqurlu-tavan': 'fiqurlu_tavan',
  'arakesme': 'gizli_isiqli_tavan',
  'gizli-isiq': 'tv_stend',
  'tv-dizayn': 'yataq_otagi',
  'yeni-xidmet': 'divar_dekoru',
};

export function designTypeFromParam(param: string | null | undefined): DesignType | null {
  if (!param || typeof param !== 'string') return null;
  const trimmed = param.trim();
  if (isValidDesignType(trimmed)) return trimmed;
  return CEILING_ID_TO_DESIGN_TYPE[trimmed] ?? null;
}

