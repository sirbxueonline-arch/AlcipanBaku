'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { catalogCategories } from '@/data/catalogCategories';
import { CategoryNavigation } from '@/components/navigation/CategoryNavigation';
import { cn } from '@/lib/utils';

interface FilterSidebarProps {
  currentCategorySlug?: string;
  className?: string;
}

export function FilterSidebar({ currentCategorySlug, className }: FilterSidebarProps) {
  const { language } = useAdmin();

  return (
    <aside className={cn('space-y-6', className)}>
      <div>
        <h3 className="font-semibold text-[var(--nw-text)] mb-3">
          {language === 'AZ' ? 'Kateqoriya' : language === 'RU' ? 'Категория' : 'Category'}
        </h3>
        <CategoryNavigation currentSlug={currentCategorySlug} variant="vertical" />
      </div>
    </aside>
  );
}
