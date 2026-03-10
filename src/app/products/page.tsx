'use client';

import React, { useMemo, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAdmin } from '@/context/AdminContext';
import { ProductCard } from '@/components/ProductCard';
import { catalogCategories } from '@/data/catalogCategories';
import { filterByCategory, sortItems, type SortOption } from '@/lib/catalog';
import Link from 'next/link';
import { ChevronRight, LayoutGrid, List } from 'lucide-react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category') || '';
  const { packages, products, language } = useAdmin();
  const [sort, setSort] = useState<SortOption>('default');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const allItems = useMemo(() => {
    const activePackages = packages.filter((p) => p.isActive);
    const activeProducts = products.filter((p) => p.isActive);
    return [...activePackages, ...activeProducts];
  }, [packages, products]);

  const filtered = useMemo(() => {
    const list = categorySlug ? filterByCategory(allItems, categorySlug) : allItems;
    return sortItems(list, sort);
  }, [allItems, categorySlug, sort]);

  const currentCategory = categorySlug ? catalogCategories.find((c) => c.slug === categorySlug) : null;

  const t = {
    title: { AZ: 'Məhsullar', RU: 'Продукты', EN: 'Products' },
    sub: { AZ: 'Bütün məhsul və paket təklifləri', RU: 'Все товары и пакеты', EN: 'All products and package offers' },
    categories: { AZ: 'Kateqoriyalar', RU: 'Категории', EN: 'Categories' },
    all: { AZ: 'Hamısı', RU: 'Все', EN: 'All' },
    sort: { AZ: 'Sırala', RU: 'Сортировка', EN: 'Sort' },
    default: { AZ: 'Ümumi', RU: 'По умолчанию', EN: 'Default' },
    priceAsc: { AZ: 'Qiymət: aşağıdan', RU: 'Цена: по возрастанию', EN: 'Price: low to high' },
    priceDesc: { AZ: 'Qiymət: yuxarıdan', RU: 'Цена: по убыванию', EN: 'Price: high to low' },
    name: { AZ: 'Ad', RU: 'Название', EN: 'Name' },
    count: { AZ: 'məhsul', RU: 'товар', EN: 'products' },
    noResults: { AZ: 'Bu kateqoriyada məhsul tapılmadı.', RU: 'В этой категории товаров не найдено.', EN: 'No products in this category.' },
    note: { AZ: 'Qiymətlər təqdimat üçündür. Dəqiq qiymət üçün bizimlə əlaqə saxlayın.', RU: 'Цены ориентировочные. Для точной цены свяжитесь с нами.', EN: 'Prices are indicative. Contact us for exact quote.' },
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero – same style as header */}
      <div className="bg-[#0a192f] border-b border-white/10 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {currentCategory ? currentCategory.name[language] : t.title[language]}
          </h1>
          <p className="mt-2 text-white/70 text-sm md:text-base">
            {currentCategory && currentCategory.description ? currentCategory.description[language] : t.sub[language]}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar – categories (hesap style) */}
          <aside className="lg:w-56 shrink-0">
            <div className="bg-[#112240] rounded-xl border border-white/10 overflow-hidden sticky top-24">
              <div className="p-4 border-b border-white/10">
                <h2 className="font-bold text-white text-sm uppercase tracking-wider">{t.categories[language]}</h2>
              </div>
              <nav className="p-2">
                <Link
                  href="/products"
                  className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    !categorySlug ? 'bg-[#fbbf24] text-[#0a192f]' : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {t.all[language]}
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </Link>
                {catalogCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products?category=${cat.slug}`}
                    className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      categorySlug === cat.slug ? 'bg-[#fbbf24] text-[#0a192f]' : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {cat.name[language]}
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main – toolbar + grid */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <p className="text-white/70 text-sm">
                <span className="font-semibold text-white">{filtered.length}</span> {t.count[language]}
              </p>
              <div className="flex items-center gap-3">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="rounded-lg border border-white/20 bg-[#112240] px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#fbbf24]"
                >
                  <option value="default">{t.default[language]}</option>
                  <option value="price-asc">{t.priceAsc[language]}</option>
                  <option value="price-desc">{t.priceDesc[language]}</option>
                  <option value="name">{t.name[language]}</option>
                </select>
                <div className="flex rounded-lg border border-white/20 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setView('grid')}
                    className={`p-2 ${view === 'grid' ? 'bg-[#fbbf24] text-[#0a192f]' : 'bg-[#112240] text-white/80 hover:bg-white/10'}`}
                    aria-label="Grid"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setView('list')}
                    className={`p-2 ${view === 'list' ? 'bg-[#fbbf24] text-[#0a192f]' : 'bg-[#112240] text-white/80 hover:bg-white/10'}`}
                    aria-label="List"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-[#112240] rounded-xl border border-white/10 p-12 text-center text-white/70">
                {t.noResults[language]}
              </div>
            ) : (
              <div
                className={
                  view === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'flex flex-col gap-4'
                }
              >
                {filtered.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            )}

            <div className="mt-10 p-4 bg-[#112240]/80 rounded-xl border border-white/10">
              <p className="text-white/70 text-sm">{t.note[language]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center">
          <div className="text-white/70">Yüklənir...</div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
