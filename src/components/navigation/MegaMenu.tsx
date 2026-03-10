'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import { catalogCategories } from '@/data/catalogCategories';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function MegaMenu({ isOpen, onClose, className }: MegaMenuProps) {
  const { language } = useAdmin();

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'absolute left-0 right-0 top-full z-50 mt-0 bg-[var(--nw-bg)] border-b border-[var(--nw-border)] shadow-[var(--nw-shadow-lg)]',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {catalogCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/newebsite/catalog/${cat.slug}`}
              onClick={onClose}
              className="group flex flex-col rounded-[var(--nw-radius-lg)] p-4 border border-[var(--nw-border)] hover:border-[var(--nw-primary)] hover:bg-[var(--nw-primary-light)]/30 transition-all"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--nw-neutral-100)] mb-3">
                <Image
                  src={cat.image}
                  alt={cat.name[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
              </div>
              <span className="font-semibold text-[var(--nw-text)] group-hover:text-[var(--nw-primary)]">
                {cat.name[language]}
              </span>
              {cat.description && (
                <span className="text-sm text-[var(--nw-text-muted)] mt-0.5 line-clamp-2">
                  {cat.description[language]}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
