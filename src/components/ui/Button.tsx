'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--nw-primary)] text-white hover:bg-[var(--nw-primary-hover)] border-transparent shadow-sm',
  secondary: 'bg-[var(--nw-neutral-100)] text-[var(--nw-text)] hover:bg-[var(--nw-neutral-200)] border-[var(--nw-border)]',
  outline: 'bg-transparent border-2 border-[var(--nw-primary)] text-[var(--nw-primary)] hover:bg-[var(--nw-primary-light)]',
  ghost: 'bg-transparent text-[var(--nw-text)] hover:bg-[var(--nw-neutral-100)] border-transparent',
  accent: 'bg-[var(--nw-accent)] text-white hover:bg-[var(--nw-accent-hover)] border-transparent shadow-sm',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2.5 text-base gap-2',
  lg: 'px-6 py-3 text-lg gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-[var(--nw-radius)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--nw-primary)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
