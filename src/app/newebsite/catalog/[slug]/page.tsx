'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useAdmin } from '@/context/AdminContext';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { FilterSidebar } from '@/components/catalog/FilterSidebar';
import { ProductGrid } from '@/components/catalog/ProductGrid';
import { SortBar, type SortOption } from '@/components/catalog/SortBar';
import { Pagination } from '@/components/catalog/Pagination';
import {
  filterByCategory,
  filterBySearch,
  sortItems,
  paginate,
  type CatalogItem,
} from '@/lib/catalog';
import { catalogCategories } from '@/data/catalogCategories';

export default function CatalogCategoryPage() {
  const params = useParams();
  const slug = (params.slug as string) ?? '';
  const [sort, setSort] = React.useState<SortOption>('default');
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [page, setPage] = React.useState(1);

  const category = catalogCategories.find((c) => c.slug === slug);
  const { products, packages } = useAdmin();

  const allItems: CatalogItem[] = React.useMemo(() => {
    const activeProducts = products.filter((p) => p.isActive);
    const activePackages = packages.filter((p) => p.isActive);
    return [...activePackages, ...activeProducts];
  }, [products, packages]);

  const filtered = React.useMemo(() => {
    let result = allItems;
    if (slug) result = filterByCategory(result, slug);
    return sortItems(result, sort);
  }, [allItems, slug, sort]);

  const { items: pageItems, totalPages, total } = React.useMemo(
    () => paginate(filtered, page),
    [filtered, page]
  );

  const { language } = useAdmin();
  const categoryName = category ? category.name[language] : slug;

  return (
    <PageContainer className="py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: categoryName, href: `/newebsite/catalog/${slug}` },
        ]}
      />

      {category && (
        <div className="mt-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--nw-text)]">
            {category.name[language]}
          </h1>
          {category.description && (
            <p className="text-[var(--nw-text-muted)] mt-1">{category.description[language]}</p>
          )}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-56 shrink-0">
          <FilterSidebar currentCategorySlug={slug} />
        </aside>

        <div className="flex-1 min-w-0">
          <SortBar
            sort={sort}
            onSortChange={setSort}
            view={view}
            onViewChange={setView}
            totalCount={total}
          />
          <ProductGrid products={pageItems} view={view} className="mt-4" />
          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
