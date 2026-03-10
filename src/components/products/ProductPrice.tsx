'use client';

import React from 'react';
import { formatPrice } from '@/lib/utils';
import { useAdmin } from '@/context/AdminContext';
import { cn } from '@/lib/utils';

interface ProductPriceProps {
  price: number;
  currency?: string;
  isPriceVisible: boolean;
  /** For packages: total = pricePerUnit * step */
  step?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ProductPrice({
  price,
  currency = 'AZN',
  isPriceVisible,
  step = 1,
  size = 'md',
  className,
}: ProductPriceProps) {
  const { language } = useAdmin();

  if (!isPriceVisible) {
    const label =
      language === 'AZ' ? 'Qiymət razılaşma ilə' : language === 'RU' ? 'Цена по запросу' : 'Price on request';
    return (
      <span className={cn('text-[var(--nw-text-muted)] italic font-medium', className)}>
        {label}
      </span>
    );
  }

  const total = price * step;
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <span className={cn('font-bold text-[var(--nw-primary)]', sizeClasses[size], className)}>
      {formatPrice(total, currency)}
      {step > 1 && (
        <span className="text-sm font-normal text-[var(--nw-text-muted)] ml-1">
          / {step} {language === 'AZ' ? 'm²' : 'm²'}
        </span>
      )}
    </span>
  );
}
