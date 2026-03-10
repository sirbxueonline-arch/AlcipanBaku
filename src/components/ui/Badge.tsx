'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--nw-neutral-200)] text-[var(--nw-text)]',
  success: 'bg-[var(--nw-success-bg)] text-[var(--nw-success)]',
  warning: 'bg-[var(--nw-warning-bg)] text-[var(--nw-warning)]',
  error: 'bg-[var(--nw-error-bg)] text-[var(--nw-error)]',
  info: 'bg-[var(--nw-primary-light)] text-[var(--nw-primary)]',
  outline: 'border border-[var(--nw-border)] bg-transparent text-[var(--nw-text-secondary)]',
};

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
