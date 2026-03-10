import React from 'react';
import '@/styles/newebsite-tokens.css';
import { NewWebsiteHeader } from '@/components/layout/newebsite/Header';
import { NewWebsiteFooter } from '@/components/layout/newebsite/Footer';
import { Cart } from '@/components/Cart';

export default function NewWebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-newebsite className="min-h-screen flex flex-col bg-[var(--nw-bg)] text-[var(--nw-text)]">
      <NewWebsiteHeader />
      <Cart />
      <main className="flex-1">{children}</main>
      <NewWebsiteFooter />
    </div>
  );
}
