import type { LocalizedString } from '@/types';

export interface CatalogCategory {
  id: string;
  slug: string;
  name: LocalizedString;
  description?: LocalizedString;
  image: string;
  parentId: string | null;
  productCount?: number;
}

/**
 * Category slugs used for filtering.
 * Products are assigned via categoryId in catalog product mapping.
 */
export const CATEGORY_IDS = {
  GYPSUM_BOARDS: 'gypsum-boards',
  METAL_PROFILES: 'metal-profiles',
  SCREWS_FASTENERS: 'screws-fasteners',
  INSULATION: 'insulation',
  ACCESSORIES: 'accessories',
  PACKAGES: 'packages',
  LIGHT_PROFILES: 'light-profiles',
} as const;

/**
 * Map product id or name patterns to category for the new catalog.
 */
export function getCategoryIdForProduct(productId: string, nameAZ: string): string {
  const id = productId.toLowerCase();
  const name = nameAZ.toLowerCase();
  if (id.startsWith('pkg')) return CATEGORY_IDS.PACKAGES;
  if (id.startsWith('gp')) return CATEGORY_IDS.LIGHT_PROFILES;
  if (name.includes('gipskarton') || name.includes('alçipan') || name.includes('alcipan') || name.includes('gipsarton') || name.includes('gypsum') || name.includes('гипсокартон') || name.includes('lövhə')) return CATEGORY_IDS.GYPSUM_BOARDS;
  if (name.includes('tavan u ') || name.includes('ceiling profile') || name.includes('потолочный') || name.includes('profilili')) return CATEGORY_IDS.METAL_PROFILES;
  if (name.includes('profil') || name.includes('profile') || name.includes('профиль')) return CATEGORY_IDS.METAL_PROFILES;
  if (name.includes('srup') || name.includes('vida') || name.includes('screw') || name.includes('шуруп') || name.includes('eqreb') || name.includes('dupel') || name.includes('anker') || name.includes('klips') || name.includes('celik dupel') || name.includes('qepik')) return CATEGORY_IDS.SCREWS_FASTENERS;
  if (name.includes('izolyasiya') || name.includes('yün') || name.includes('insulation') || name.includes('изоляция') || name.includes('вата') || name.includes('daş yunu')) return CATEGORY_IDS.INSULATION;
  if (name.includes('işıq') || name.includes('led') || name.includes('kölgə') || name.includes('plintus') || name.includes('gp-')) return CATEGORY_IDS.LIGHT_PROFILES;
  return CATEGORY_IDS.ACCESSORIES;
}

export const catalogCategories: CatalogCategory[] = [
  {
    id: CATEGORY_IDS.GYPSUM_BOARDS,
    slug: CATEGORY_IDS.GYPSUM_BOARDS,
    name: { AZ: 'Gipsarton lövhələr', RU: 'Гипсокартон', EN: 'Gypsum boards' },
    description: { AZ: 'Standart və nəmə davamlı gipsarton', RU: 'Стандартный и влагостойкий гипсокартон', EN: 'Standard and moisture-resistant gypsum boards' },
    image: '/material_gypsum_moisture.jpg',
    parentId: null,
  },
  {
    id: CATEGORY_IDS.METAL_PROFILES,
    slug: CATEGORY_IDS.METAL_PROFILES,
    name: { AZ: 'Metal profillər', RU: 'Металлические профили', EN: 'Metal profiles' },
    description: { AZ: 'Tavan və divar profilləri', RU: 'Профили для потолка и стен', EN: 'Ceiling and wall profiles' },
    image: '/material_profile_ceiling.jpg',
    parentId: null,
  },
  {
    id: CATEGORY_IDS.SCREWS_FASTENERS,
    slug: CATEGORY_IDS.SCREWS_FASTENERS,
    name: { AZ: 'Vintlər və bərkidicilər', RU: 'Шурупы и крепеж', EN: 'Screws & fasteners' },
    description: { AZ: 'Vidalar, ankerlər, asqılar', RU: 'Саморезы, анкеры, подвесы', EN: 'Screws, anchors, hangers' },
    image: '/accessory_screws_knauf_box.png',
    parentId: null,
  },
  {
    id: CATEGORY_IDS.INSULATION,
    slug: CATEGORY_IDS.INSULATION,
    name: { AZ: 'İzolyasiya', RU: 'Изоляция', EN: 'Insulation' },
    description: { AZ: 'İstilik və səs izolyasiyası', RU: 'Тепло- и звукоизоляция', EN: 'Thermal and acoustic insulation' },
    image: '/insulation_knauf_wool.png',
    parentId: null,
  },
  {
    id: CATEGORY_IDS.ACCESSORIES,
    slug: CATEGORY_IDS.ACCESSORIES,
    name: { AZ: 'Aksesuarlar', RU: 'Аксессуары', EN: 'Accessories' },
    description: { AZ: 'Montaj aksesuarları', RU: 'Монтажные аксессуары', EN: 'Installation accessories' },
    image: '/accessory_bracket_strip.png',
    parentId: null,
  },
  {
    id: CATEGORY_IDS.LIGHT_PROFILES,
    slug: CATEGORY_IDS.LIGHT_PROFILES,
    name: { AZ: 'İşıqlandırma profilləri', RU: 'Профили освещения', EN: 'Lighting profiles' },
    description: { AZ: 'LED və gizli işıq profilləri', RU: 'LED и скрытая подсветка', EN: 'LED and hidden light profiles' },
    image: '/GP-15.png',
    parentId: null,
  },
  {
    id: CATEGORY_IDS.PACKAGES,
    slug: CATEGORY_IDS.PACKAGES,
    name: { AZ: 'Paket həllər', RU: 'Пакетные решения', EN: 'Package solutions' },
    description: { AZ: 'Material + montaj paketləri', RU: 'Пакеты материал + монтаж', EN: 'Material + installation packages' },
    image: '/picture1.jpeg',
    parentId: null,
  },
];

export const MANUFACTURERS = [
  { id: 'knauf', name: 'Knauf', logo: '/brand-logo.jpg' },
  { id: 'gilan', name: 'Gilan', logo: '/brand-logo.jpg' },
  { id: 'rigips', name: 'Rigips', logo: '/brand-logo.jpg' },
];
