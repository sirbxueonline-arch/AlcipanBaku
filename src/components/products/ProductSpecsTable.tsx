'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface SpecRow {
  label: string;
  value: string | number;
}

interface ProductSpecsTableProps {
  rows: SpecRow[];
  className?: string;
}

export function ProductSpecsTable({ rows, className }: ProductSpecsTableProps) {
  if (!rows.length) return null;

  return (
    <div className={cn('overflow-hidden rounded-[var(--nw-radius)] border border-[var(--nw-border)]', className)}>
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-[var(--nw-bg)]' : 'bg-[var(--nw-bg-subtle)]'}
            >
              <td className="px-4 py-3 font-medium text-[var(--nw-text-muted)] w-1/3">
                {row.label}
              </td>
              <td className="px-4 py-3 font-medium text-[var(--nw-text)]">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
