'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAdmin } from '@/context/AdminContext';
import { Button } from '@/components/ui/Button';
import type { Product, Package } from '@/types';
import { cn } from '@/lib/utils';

interface AddToCartButtonProps {
  product: Product | Package;
  variant?: 'primary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
  fullWidth?: boolean;
}

export function AddToCartButton({
  product,
  variant = 'primary',
  size = 'md',
  className,
  showIcon = true,
  fullWidth,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const { language } = useAdmin();

  const label =
    language === 'AZ' ? 'Səbətə at' : language === 'RU' ? 'В корзину' : 'Add to cart';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      fullWidth={fullWidth}
      onClick={handleClick}
      leftIcon={showIcon ? <ShoppingCart className="w-4 h-4" /> : undefined}
    >
      {label}
    </Button>
  );
}
