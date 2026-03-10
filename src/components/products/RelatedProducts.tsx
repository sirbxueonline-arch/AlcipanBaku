'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import type { Product, Package } from '@/types';
import { ProductCardNew } from './ProductCard';

interface RelatedProductsProps {
  products: (Product | Package)[];
  currentId: string;
  title?: string;
  max?: number;
}

export function RelatedProducts({
  products,
  currentId,
  title,
  max = 4,
}: RelatedProductsProps) {
  const { language } = useAdmin();
  const filtered = products.filter((p) => p.id !== currentId && p.isActive).slice(0, max);

  if (filtered.length === 0) return null;

  const label = title ?? (language === 'AZ' ? 'Oxşar məhsullar' : language === 'RU' ? 'Похожие товары' : 'Related products');

  return (
    <section>
      <h2 className="text-xl font-semibold text-[var(--nw-text)] mb-4">{label}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCardNew key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
