import type { DesignType } from '@/lib/designPrompts';
import type { LocalizedString } from '@/types';

export interface RoomPreviewDesignOption {
  id: DesignType;
  title: LocalizedString;
  image: string;
}

export const roomPreviewDesignOptions: RoomPreviewDesignOption[] = [
  { id: 'sade_tavan', title: { AZ: 'Sadə tavan', RU: 'Простой потолок', EN: 'Simple ceiling' }, image: '/service_simple_ceiling_new.png' },
  { id: 'fiqurlu_tavan', title: { AZ: 'Fiqurlu tavan', RU: 'Фигурный потолок', EN: 'Figured ceiling' }, image: '/picture2.jpeg' },
  { id: 'gizli_isiqli_tavan', title: { AZ: 'Gizli işıqlı tavan', RU: 'Потолок со скрытой подсветкой', EN: 'Ceiling with hidden lighting' }, image: '/picture3.jpeg' },
  { id: 'tv_stend', title: { AZ: 'TV stend dizaynı', RU: 'Дизайн ТВ стенда', EN: 'TV stand design' }, image: '/picture8.jpeg' },
  { id: 'yataq_otagi', title: { AZ: 'Yataq otağı dizaynı', RU: 'Дизайн спальни', EN: 'Bedroom design' }, image: '/picture9.jpeg' },
  { id: 'divar_dekoru', title: { AZ: 'Divar dekoru', RU: 'Декор стен', EN: 'Wall decor' }, image: '/image.png' },
];

export function getDesignImagePath(designType: DesignType): string {
  const opt = roomPreviewDesignOptions.find((o) => o.id === designType);
  return opt?.image ?? '';
}
