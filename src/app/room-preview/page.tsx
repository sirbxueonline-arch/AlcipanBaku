import { RoomPreviewGenerator } from '@/components/RoomPreviewGenerator';

export const metadata = {
  title: 'AI otaq önizləməsi',
  description: 'Otaq şəklini yükləyin və ya çəkin – AI ilə realistik önizləmə alın.',
};

type Props = { searchParams: Promise<{ design?: string }> | { design?: string } };

export default async function RoomPreviewPage({ searchParams }: Props) {
  const params = await Promise.resolve(searchParams);
  const initialDesign = params?.design ?? undefined;
  return (
    <main className="min-h-screen bg-[#0a192f]">
      <RoomPreviewGenerator initialDesignParam={initialDesign} />
    </main>
  );
}
