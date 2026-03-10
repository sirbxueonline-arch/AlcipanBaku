'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import type { Product, Package } from '@/types';
import { ProductPrice } from './ProductPrice';
import { AddToCartButton } from './AddToCartButton';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product | Package;
  className?: string;
  /** Show as compact row (list view) */
  variant?: 'grid' | 'list';
}

export function ProductCardNew({ product, className, variant = 'grid' }: ProductCardProps) {
  const { language } = useAdmin();
  if (!product.isActive) return null;

  const step = product.type === 'package' ? (product.step ?? 20) : 1;
  const displayPrice = product.type === 'package' ? product.price * step : product.price;

  if (variant === 'list') {
    return (
      <Link
        href={`/newebsite/product/${product.id}`}
        className={cn(
          'flex gap-4 p-4 rounded-[var(--nw-radius-lg)] border border-[var(--nw-border)] bg-[var(--nw-bg-elevated)] hover:border-[var(--nw-primary)] hover:shadow-md transition-all group',
          className
        )}
      >
        <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-[var(--nw-neutral-100)]">
          <Image
            src={product.image}
            alt={product.name[language]}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            sizes="96px"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <h3 className="font-semibold text-[var(--nw-text)] truncate group-hover:text-[var(--nw-primary)]">
            {product.name[language]}
          </h3>
          <p className="text-sm text-[var(--nw-text-muted)] line-clamp-2 mt-0.5">{product.description[language]}</p>
          <div className="mt-2 flex items-center gap-3">
            <ProductPrice
              price={product.price}
              currency={product.currency}
              isPriceVisible={product.isPriceVisible}
              step={step}
              size="sm"
            />
            <AddToCartButton product={product} size="sm" variant="outline" className="shrink-0" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div
      className={cn(
        'group flex flex-col rounded-[var(--nw-radius-lg)] border border-[var(--nw-border)] bg-[var(--nw-bg-elevated)] overflow-hidden hover:border-[var(--nw-primary)] hover:shadow-[var(--nw-shadow-md)] transition-all h-full',
        className
      )}
    >
      <Link href={`/newebsite/product/${product.id}`} className="block flex-1 flex flex-col">
        <div className="relative aspect-[4/3] bg-[var(--nw-neutral-100)] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name[language]}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.type === 'package' && (
            <Badge variant="info" className="absolute top-2 left-2">
              Paket
            </Badge>
          )}
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-[var(--nw-text)] line-clamp-2 group-hover:text-[var(--nw-primary)] transition-colors">
            {product.name[language]}
          </h3>
          <p className="text-sm text-[var(--nw-text-muted)] line-clamp-2 mt-1 flex-1">
            {product.description[language]}
          </p>
          <div className="mt-4 flex items-center justify-between gap-2 flex-wrap">
            <ProductPrice
              price={product.price}
              currency={product.currency}
              isPriceVisible={product.isPriceVisible}
              step={step}
              size="md"
            />
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <AddToCartButton product={product} size="sm" fullWidth />
      </div>
    </div>
  );
}
