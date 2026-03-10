import type { Product, Package } from '@/types';
import { getCategoryIdForProduct, CATEGORY_IDS } from '@/data/catalogCategories';

export type CatalogItem = Product | Package;

export function getCategorySlugForProduct(product: CatalogItem): string {
  if (product.type === 'package') return CATEGORY_IDS.PACKAGES;
  return getCategoryIdForProduct(product.id, product.name.AZ);
}

export function filterByCategory(items: CatalogItem[], categorySlug: string): CatalogItem[] {
  if (!categorySlug) return items;
  return items.filter((item) => getCategorySlugForProduct(item) === categorySlug);
}

export function filterBySearch(items: CatalogItem[], query: string): CatalogItem[] {
  if (!query.trim()) return items;
  const q = query.toLowerCase().trim();
  return items.filter((item) => {
    const name = `${item.name.AZ} ${item.name.RU} ${item.name.EN}`.toLowerCase();
    const desc = `${item.name.AZ} ${item.description.AZ}`.toLowerCase();
    return name.includes(q) || desc.includes(q);
  });
}

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name';

export function sortItems(items: CatalogItem[], sort: SortOption): CatalogItem[] {
  const copy = [...items];
  if (sort === 'default') return copy;
  if (sort === 'name') {
    return copy.sort((a, b) => a.name.AZ.localeCompare(b.name.AZ));
  }
  return copy.sort((a, b) => {
    const priceA = a.type === 'package' ? a.price * (a.step ?? 20) : a.price;
    const priceB = b.type === 'package' ? b.price * (b.step ?? 20) : b.price;
    return sort === 'price-asc' ? priceA - priceB : priceB - priceA;
  });
}

const PER_PAGE = 12;

export function paginate<T>(items: T[], page: number): { items: T[]; totalPages: number; total: number } {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const itemsPage = items.slice(start, start + PER_PAGE);
  return { items: itemsPage, totalPages, total };
}
