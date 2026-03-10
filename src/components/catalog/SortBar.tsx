'use client';

import React from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';
import { cn } from '@/lib/utils';

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name';

interface SortBarProps {
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
  totalCount: number;
  className?: string;
}

const sortLabels: Record<SortOption, { AZ: string; RU: string; EN: string }> = {
  default: { AZ: 'Ümumi', RU: 'По умолчанию', EN: 'Default' },
  'price-asc': { AZ: 'Qiymət: aşağıdan yuxarı', RU: 'Цена: по возрастанию', EN: 'Price: low to high' },
  'price-desc': { AZ: 'Qiymət: yuxarıdan aşağı', RU: 'Цена: по убыванию', EN: 'Price: high to low' },
  name: { AZ: 'Ad', RU: 'Название', EN: 'Name' },
};

export function SortBar({ sort, onSortChange, view, onViewChange, totalCount, className }: SortBarProps) {
  const { language } = useAdmin();
  const productLabel = language === 'AZ' ? 'məhsul' : language === 'RU' ? 'товар' : 'products';

  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-3',
        className
      )}
    >
      <p className="text-sm text-[var(--nw-text-muted)]">
        <span className="font-medium text-[var(--nw-text)]">{totalCount}</span> {productLabel}
      </p>
      <div className="flex items-center gap-4">
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="rounded-[var(--nw-radius)] border border-[var(--nw-border)] bg-[var(--nw-bg)] px-3 py-2 text-sm text-[var(--nw-text)] focus:outline-none focus:ring-2 focus:ring-[var(--nw-primary)]"
        >
          {(Object.keys(sortLabels) as SortOption[]).map((opt) => (
            <option key={opt} value={opt}>
              {sortLabels[opt][language]}
            </option>
          ))}
        </select>
        <div className="flex rounded-[var(--nw-radius)] border border-[var(--nw-border)] overflow-hidden">
          <button
            type="button"
            onClick={() => onViewChange('grid')}
            className={cn(
              'p-2 transition-colors',
              view === 'grid' ? 'bg-[var(--nw-primary)] text-white' : 'bg-[var(--nw-bg)] text-[var(--nw-text-muted)] hover:bg-[var(--nw-neutral-100)]'
            )}
            aria-label="Grid view"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onViewChange('list')}
            className={cn(
              'p-2 transition-colors',
              view === 'list' ? 'bg-[var(--nw-primary)] text-white' : 'bg-[var(--nw-bg)] text-[var(--nw-text-muted)] hover:bg-[var(--nw-neutral-100)]'
            )}
            aria-label="List view"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
