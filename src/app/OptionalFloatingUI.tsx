'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { BottomNav } from '@/components/BottomNav';

export function OptionalFloatingUI() {
  const pathname = usePathname();
  if (pathname?.startsWith('/newebsite')) return null;
  return <BottomNav />;
}
