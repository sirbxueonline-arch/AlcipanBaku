'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import { catalogCategories } from '@/data/catalogCategories';
import { cn } from '@/lib/utils';

interface CategoryGridProps {
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

export function CategoryGrid({ columns = 4, className }: CategoryGridProps) {
  const { language } = useAdmin();

  return (
    <div
      className={cn(
        'grid gap-4 sm:gap-6',
        columns === 2 && 'grid-cols-2',
        columns === 3 && 'grid-cols-2 md:grid-cols-3',
        columns === 4 && 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        columns === 5 && 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
        className
      )}
    >
      {catalogCategories.map((cat) => (
        <Link
          key={cat.id}
          href={`/newebsite/catalog/${cat.slug}`}
          className="group flex flex-col rounded-[var(--nw-radius-lg)] border border-[var(--nw-border)] bg-[var(--nw-bg-elevated)] overflow-hidden hover:border-[var(--nw-primary)] hover:shadow-[var(--nw-shadow-md)] transition-all"
        >
          <div className="relative aspect-[4/3] bg-[var(--nw-neutral-100)] overflow-hidden">
            <Image
              src={cat.image}
              alt={cat.name[language]}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-[var(--nw-text)] group-hover:text-[var(--nw-primary)] transition-colors">
              {cat.name[language]}
            </h3>
            {cat.description && (
              <p className="text-sm text-[var(--nw-text-muted)] mt-1 line-clamp-2">
                {cat.description[language]}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
