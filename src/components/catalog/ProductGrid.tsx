'use client';

import React from 'react';
import type { Product, Package } from '@/types';
import { ProductCardNew } from '@/components/products/ProductCard';
import { ProductGridSkeleton } from '@/components/ui/SkeletonLoader';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: (Product | Package)[];
  isLoading?: boolean;
  view?: 'grid' | 'list';
  className?: string;
}

export function ProductGrid({ products, isLoading, view = 'grid', className }: ProductGridProps) {
  if (isLoading) {
    return <ProductGridSkeleton count={8} />;
  }

  if (!products.length) {
    return (
      <div className="py-16 text-center text-[var(--nw-text-muted)]">
        <p className="text-lg font-medium">Heç bir məhsul tapılmadı.</p>
        <p className="text-sm mt-1">Filterləri dəyişin və ya yenidən axtarın.</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        view === 'grid'
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          : 'flex flex-col gap-4',
        className
      )}
    >
      {products.map((item) => (
        <ProductCardNew key={item.id} product={item} variant={view} />
      ))}
    </div>
  );
}
