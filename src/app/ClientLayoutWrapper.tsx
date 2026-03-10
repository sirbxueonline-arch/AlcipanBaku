'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNewWebsite = pathname?.startsWith('/newebsite');

  if (isNewWebsite) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <Cart />
      {children}
      <WhatsAppWidget />
      <Footer />
    </>
  );
}
