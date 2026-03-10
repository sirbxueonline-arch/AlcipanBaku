'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SearchBar({
  placeholder = 'Məhsul axtar...',
  value: controlledValue,
  onChange,
  onSubmit,
  className,
  size = 'md',
}: SearchBarProps) {
  const [localValue, setLocalValue] = useState('');
  const value = controlledValue ?? localValue;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setLocalValue(v);
    onChange?.(v);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
    inputRef.current?.blur();
  };

  const clear = () => {
    setLocalValue('');
    onChange?.('');
    inputRef.current?.focus();
  };

  const sizeClasses = {
    sm: 'h-9 text-sm pl-9',
    md: 'h-11 text-base pl-10',
    lg: 'h-12 text-base pl-11',
  };

  return (
    <form onSubmit={handleSubmit} className={cn('relative', className)} role="search">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--nw-text-muted)]" aria-hidden />
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label="Search products"
        className={cn(
          'w-full rounded-[var(--nw-radius)] border border-[var(--nw-border)] bg-[var(--nw-bg)] text-[var(--nw-text)] placeholder:text-[var(--nw-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--nw-primary)] focus:border-transparent transition-shadow',
          sizeClasses[size]
        )}
      />
      {value && (
        <button
          type="button"
          onClick={clear}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-[var(--nw-text-muted)] hover:text-[var(--nw-text)] hover:bg-[var(--nw-neutral-100)]"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </form>
  );
}
