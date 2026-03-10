'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

export function ProductGallery({ images, alt, className }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainImage = images[activeIndex] ?? images[0];

  return (
    <div className={cn('space-y-3', className)}>
      <div className="relative aspect-square rounded-[var(--nw-radius-lg)] overflow-hidden bg-[var(--nw-neutral-100)]">
        <Image
          src={mainImage}
          alt={alt}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={cn(
                'relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors',
                activeIndex === i ? 'border-[var(--nw-primary)]' : 'border-transparent hover:border-[var(--nw-border-strong)]'
              )}
            >
              <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
