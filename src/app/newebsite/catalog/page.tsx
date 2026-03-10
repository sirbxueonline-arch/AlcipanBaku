'use client';

import React, { useMemo, useState, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAdmin } from '@/context/AdminContext';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { FilterSidebar } from '@/components/catalog/FilterSidebar';
import { ProductGrid } from '@/components/catalog/ProductGrid';
import { SortBar, type SortOption } from '@/components/catalog/SortBar';
import { Pagination } from '@/components/catalog/Pagination';
import { ProductGridSkeleton } from '@/components/ui/SkeletonLoader';
import {
  filterByCategory,
  filterBySearch,
  sortItems,
  paginate,
  type CatalogItem,
} from '@/lib/catalog';

function CatalogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category') ?? '';
  const q = searchParams.get('q') ?? '';
  const pageParam = parseInt(searchParams.get('page') ?? '1', 10);
  const [sort, setSort] = useState<SortOption>('default');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const { products, packages } = useAdmin();
  const allItems: CatalogItem[] = useMemo(() => {
    const activeProducts = products.filter((p) => p.isActive);
    const activePackages = packages.filter((p) => p.isActive);
    return [...activePackages, ...activeProducts];
  }, [products, packages]);

  const filtered = useMemo(() => {
    let result = allItems;
    if (categorySlug) result = filterByCategory(result, categorySlug);
    if (q) result = filterBySearch(result, q);
    return sortItems(result, sort);
  }, [allItems, categorySlug, q, sort]);

  const { items: pageItems, totalPages, total } = useMemo(
    () => paginate(filtered, Math.max(1, pageParam)),
    [filtered, pageParam]
  );

  const setPage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', String(page));
      router.push(`/newebsite/catalog?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <PageContainer className="py-8 md:py-10">
      <Breadcrumb
        items={[
          ...(categorySlug ? [{ label: categorySlug, href: `/newebsite/catalog/${categorySlug}` }] : []),
          ...(q ? [{ label: `Axtarış: ${q}` }] : []),
        ].filter(Boolean) as { label: string; href?: string }[]}
      />

      <div className="mt-6 flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-56 shrink-0">
          <FilterSidebar currentCategorySlug={categorySlug || undefined} />
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
              <Pagination
                currentPage={Math.min(pageParam, totalPages)}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={
      <PageContainer className="py-8 md:py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-56 shrink-0 h-48 rounded-lg bg-[var(--nw-neutral-100)] animate-pulse" />
          <div className="flex-1">
            <ProductGridSkeleton count={8} />
          </div>
        </div>
      </PageContainer>
    }>
      <CatalogContent />
    </Suspense>
  );
}
