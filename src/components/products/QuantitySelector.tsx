'use client';

import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  className?: string;
  size?: 'sm' | 'md';
}

export function QuantitySelector({
  value,
  min = 1,
  max = 999,
  step = 1,
  onChange,
  className,
  size = 'md',
}: QuantitySelectorProps) {
  const handleDecrease = () => onChange(Math.max(min, value - step));
  const handleIncrease = () => onChange(Math.min(max, value + step));

  const sizeClasses = size === 'sm' ? 'h-9 gap-2' : 'h-11 gap-3';

  return (
    <div className={cn('inline-flex items-center rounded-[var(--nw-radius)] border border-[var(--nw-border)] bg-[var(--nw-bg)]', sizeClasses, className)}>
      <button
        type="button"
        onClick={handleDecrease}
        disabled={value <= min}
        className="flex items-center justify-center w-10 h-full text-[var(--nw-text-muted)] hover:text-[var(--nw-text)] hover:bg-[var(--nw-neutral-100)] disabled:opacity-40 disabled:pointer-events-none rounded-l-[var(--nw-radius)] transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="min-w-[2.5rem] text-center font-semibold text-[var(--nw-text)] tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={handleIncrease}
        disabled={value >= max}
        className="flex items-center justify-center w-10 h-full text-[var(--nw-text-muted)] hover:text-[var(--nw-text)] hover:bg-[var(--nw-neutral-100)] disabled:opacity-40 disabled:pointer-events-none rounded-r-[var(--nw-radius)] transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
