'use client';

import React from 'react';
import Link from 'next/link';
import { useAdmin } from '@/context/AdminContext';
import { catalogCategories } from '@/data/catalogCategories';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface CategoryNavigationProps {
  currentSlug?: string;
  className?: string;
  variant?: 'horizontal' | 'vertical';
}

export function CategoryNavigation({ currentSlug, className, variant = 'horizontal' }: CategoryNavigationProps) {
  const { language } = useAdmin();

  if (variant === 'vertical') {
    return (
      <nav className={cn('space-y-1', className)} aria-label="Categories">
        {catalogCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`/newebsite/catalog/${cat.slug}`}
            className={cn(
              'flex items-center justify-between gap-2 px-4 py-3 rounded-[var(--nw-radius)] text-[var(--nw-text)] font-medium transition-colors',
              currentSlug === cat.slug
                ? 'bg-[var(--nw-primary-light)] text-[var(--nw-primary)]'
                : 'hover:bg-[var(--nw-neutral-100)]'
            )}
          >
            {cat.name[language]}
            <ChevronRight className="w-4 h-4 shrink-0 text-[var(--nw-text-muted)]" />
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className={cn('flex flex-wrap gap-2', className)} aria-label="Categories">
      {catalogCategories.map((cat) => (
        <Link
          key={cat.id}
          href={`/newebsite/catalog/${cat.slug}`}
          className={cn(
            'inline-flex items-center px-4 py-2 rounded-[var(--nw-radius)] text-sm font-medium transition-colors',
            currentSlug === cat.slug
              ? 'bg-[var(--nw-primary)] text-white'
              : 'bg-[var(--nw-neutral-100)] text-[var(--nw-text)] hover:bg-[var(--nw-neutral-200)]'
          )}
        >
          {cat.name[language]}
        </Link>
      ))}
    </nav>
  );
}
