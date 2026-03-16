import type { LocalizedString } from '@/types';

export interface PackageTier {
  id: string;
  name: LocalizedString;
  features: LocalizedString[];
}

export const packageTiers: PackageTier[] = [
  {
    id: 'standart',
    name: { AZ: 'Standart', RU: 'Стандарт', EN: 'Standard' },
    features: [
      { AZ: 'Sadə alçipan tavan', RU: 'Простой гипсокартонный потолок', EN: 'Simple drywall ceiling' },
      { AZ: 'Montaj', RU: 'Монтаж', EN: 'Installation' },
      { AZ: 'Material', RU: 'Материал', EN: 'Material' },
    ],
  },
  {
    id: 'premium',
    name: { AZ: 'Premium', RU: 'Премиум', EN: 'Premium' },
    features: [
      { AZ: 'Müasir dizayn', RU: 'Современный дизайн', EN: 'Modern design' },
      { AZ: 'Gizli işıq sistemi', RU: 'Система скрытой подсветки', EN: 'Hidden lighting system' },
      { AZ: 'Tam dekor', RU: 'Полная отделка', EN: 'Full decor' },
    ],
  },
  {
    id: 'dizayn',
    name: { AZ: 'Dizayn', RU: 'Дизайн', EN: 'Design' },
    features: [
      { AZ: '2 səviyyəli tavan', RU: 'Двухуровневый потолок', EN: '2-level ceiling' },
      { AZ: 'LED işıq', RU: 'LED освещение', EN: 'LED lighting' },
      { AZ: 'Fərdi dizayn', RU: 'Индивидуальный дизайн', EN: 'Custom design' },
    ],
  },
];

export interface CeilingDesign {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  spec: LocalizedString; // e.g. "20-30 m² otaqlar üçün"
  image?: string;
}

export const ceilingDesigns: CeilingDesign[] = [
  {
    id: 'sade-tavan',
    title: { AZ: 'Sadə tavan', RU: 'Простой потолок', EN: 'Simple ceiling' },
    description: { AZ: 'Sadə düz gipskarton tavan', RU: 'Простой ровный гипсокартонный потолок', EN: 'Simple flat drywall ceiling' },
    spec: { AZ: '20-30 m² otaqlar üçün', RU: 'Для комнат 20-30 m²', EN: 'For 20-30 m² rooms' },
    image: '/service_simple_ceiling_new.png',
  },
  {
    id: 'fiqurlu-tavan',
    title: { AZ: 'Fiqurlu tavan', RU: 'Фигурный потолок', EN: 'Figured ceiling' },
    description: { AZ: 'Fiqurlu dizayn, üçölçülü dekor', RU: 'Фигурный дизайн, объемный декор', EN: 'Figured design, 3D decor' },
    spec: { AZ: '25-40 m² otaqlar üçün', RU: 'Для комнат 25-40 m²', EN: 'For 25-40 m² rooms' },
    image: '/picture2.jpeg',
  },
  {
    id: 'arakesme',
    title: { AZ: 'Gizli işıqlı tavan', RU: 'Потолок со скрытой подсветкой', EN: 'Ceiling with hidden lighting' },
    description: { AZ: 'Geometrik panellər, gizli LED kanalları', RU: 'Геометрические панели, скрытая LED подсветка', EN: 'Geometric panels, hidden LED channels' },
    spec: { AZ: 'İstənilən ölçü', RU: 'Любой размер', EN: 'Any size' },
    image: '/picture3.jpeg',
  },
  {
    id: 'gizli-isiq',
    title: { AZ: 'TV stend dizaynı', RU: 'Дизайн ТВ стенда', EN: 'TV stand design' },
    description: { AZ: 'Ay və ulduz dekorativ divar, televizor üçün fon', RU: 'Декор стены (полумесяц и звезда), фон для ТВ', EN: 'Crescent and star decorative wall, TV backdrop' },
    spec: { AZ: '15-30 m² otaqlar üçün', RU: 'Для комнат 15-30 m²', EN: 'For 15-30 m² rooms' },
    image: '/picture8.jpeg',
  },
  {
    id: 'tv-dizayn',
    title: { AZ: 'Yataq otağı dizaynı', RU: 'Дизайн спальни', EN: 'Bedroom design' },
    description: { AZ: 'Dalğalı tavan və divar', RU: 'Волнообразный потолок и стена', EN: 'Wave ceiling and wall' },
    spec: { AZ: 'Divar / tavan birləşməsi', RU: 'Стена / потолок', EN: 'Wall / ceiling combination' },
    image: '/picture9.jpeg',
  },
  {
    id: 'yeni-xidmet',
    title: { AZ: 'Divar dekoru', RU: 'Декор стен', EN: 'Wall decor' },
    description: { AZ: 'Müasir divar panelləri və üzlüklər', RU: 'Современные стеновые панели', EN: 'Modern wall panels and cladding' },
    spec: { AZ: 'İstənilən ölçü', RU: 'Любой размер', EN: 'Any size' },
    image: '/image.png',
  },
];
