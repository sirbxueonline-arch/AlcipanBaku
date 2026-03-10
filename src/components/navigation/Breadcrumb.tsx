'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1 text-sm text-[var(--nw-text-muted)]', className)}>
      <Link href="/newebsite" className="hover:text-[var(--nw-primary)] transition-colors">
        Ana səhifə
      </Link>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <ChevronRight className="w-4 h-4 shrink-0 text-[var(--nw-neutral-400)]" />
          {item.href ? (
            <Link href={item.href} className="hover:text-[var(--nw-primary)] transition-colors truncate max-w-[200px]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--nw-text)] font-medium truncate max-w-[200px]" aria-current="page">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
