'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function SkeletonLoader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-[var(--nw-radius)] bg-[var(--nw-neutral-200)]', className)}
      {...props}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-[var(--nw-radius-lg)] border border-[var(--nw-border)] overflow-hidden">
      <SkeletonLoader className="aspect-[4/3] w-full" />
      <div className="p-4 space-y-3">
        <SkeletonLoader className="h-5 w-3/4" />
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-1/2" />
        <div className="flex justify-between pt-2">
          <SkeletonLoader className="h-6 w-20" />
          <SkeletonLoader className="h-10 w-24 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
