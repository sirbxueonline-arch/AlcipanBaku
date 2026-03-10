'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAdmin } from '@/context/AdminContext';
import { SearchBar } from '@/components/navigation/SearchBar';
import { MegaMenu } from '@/components/navigation/MegaMenu';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { cn } from '@/lib/utils';

export function NewWebsiteHeader() {
  const pathname = usePathname();
  const { cartCount, toggleCart } = useCart();
  const { language } = useAdmin();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCatalogOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    if (q.trim()) window.location.href = `/newebsite/catalog?q=${encodeURIComponent(q.trim())}`;
  };

  const navLinks = [
    { href: '/newebsite', label: { AZ: 'Ana səhifə', RU: 'Главная', EN: 'Home' } },
    { href: '/newebsite/catalog', label: { AZ: 'Kataloq', RU: 'Каталог', EN: 'Catalog' } },
    { href: '/newebsite/about', label: { AZ: 'Haqqımızda', RU: 'О нас', EN: 'About' } },
    { href: '/contact', label: { AZ: 'Əlaqə', RU: 'Контакты', EN: 'Contact' } },
  ];

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          scrolled ? 'bg-[var(--nw-bg)]/95 backdrop-blur border-b border-[var(--nw-border)] shadow-sm' : 'bg-[var(--nw-bg)]'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 md:h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/newebsite" className="flex items-center gap-2 shrink-0">
              <div className="relative h-9 w-9 md:h-10 md:w-10 rounded-lg overflow-hidden bg-[var(--nw-neutral-100)]">
                <Image src="/brand-logo.jpg" alt="Alcipan Baku" fill className="object-cover" />
              </div>
              <span className="font-bold text-lg text-[var(--nw-text)] hidden sm:block">
                ALCIPAN <span className="text-[var(--nw-primary)]">BAKU</span>
              </span>
            </Link>

            {/* Desktop: Catalog dropdown + Search */}
            <div className="hidden lg:flex items-center gap-4 flex-1 max-w-2xl mx-6">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCatalogOpen((o) => !o)}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2.5 rounded-[var(--nw-radius)] font-medium text-[var(--nw-text)] border border-[var(--nw-border)] hover:bg-[var(--nw-neutral-50)] transition-colors',
                    catalogOpen && 'bg-[var(--nw-primary-light)] border-[var(--nw-primary)] text-[var(--nw-primary)]'
                  )}
                >
                  {language === 'AZ' ? 'Kateqoriyalar' : language === 'RU' ? 'Категории' : 'Categories'}
                  <ChevronDown className={cn('w-4 h-4 transition-transform', catalogOpen && 'rotate-180')} />
                </button>
                <MegaMenu isOpen={catalogOpen} onClose={() => setCatalogOpen(false)} />
              </div>
              <div className="flex-1 min-w-0">
                <SearchBar
                  placeholder={language === 'AZ' ? 'Məhsul axtar...' : language === 'RU' ? 'Поиск товаров...' : 'Search products...'}
                  onSubmit={handleSearch}
                  size="sm"
                />
              </div>
            </div>

            {/* Right: Cart, Account, Language, Phone */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={toggleCart}
                className="relative p-2 rounded-[var(--nw-radius)] text-[var(--nw-text)] hover:bg-[var(--nw-neutral-100)] transition-colors"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-[var(--nw-accent)] text-white text-xs font-bold flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
              <Link
                href="/ap"
                className="hidden sm:flex p-2 rounded-[var(--nw-radius)] text-[var(--nw-text)] hover:bg-[var(--nw-neutral-100)] transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>
              <a
                href="tel:+994506368731"
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-[var(--nw-radius)] bg-[var(--nw-primary)] text-white text-sm font-semibold hover:bg-[var(--nw-primary-hover)] transition-colors"
              >
                +994 50 636 87 31
              </a>
              <button
                type="button"
                className="lg:hidden p-2 rounded-[var(--nw-radius)] text-[var(--nw-text)] hover:bg-[var(--nw-neutral-100)]"
                onClick={() => setMobileMenuOpen((o) => !o)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="lg:hidden pb-3">
            <SearchBar
              placeholder={language === 'AZ' ? 'Məhsul axtar...' : 'Search...'}
              onSubmit={handleSearch}
              size="sm"
            />
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[var(--nw-bg-overlay)] lg:hidden"
          aria-hidden
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={cn(
          'fixed top-0 right-0 z-40 h-full w-full max-w-sm bg-[var(--nw-bg)] shadow-xl lg:hidden transform transition-transform duration-300 ease-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-16 pb-8 px-4 overflow-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-3 rounded-[var(--nw-radius)] font-medium',
                  pathname === link.href ? 'bg-[var(--nw-primary-light)] text-[var(--nw-primary)]' : 'text-[var(--nw-text)]'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label[language]}
              </Link>
            ))}
            <Link
              href="/newebsite/catalog"
              className="px-4 py-3 rounded-[var(--nw-radius)] font-medium text-[var(--nw-text)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === 'AZ' ? 'Bütün kateqoriyalar' : 'All categories'}
            </Link>
          </nav>
          <div className="mt-8 pt-6 border-t border-[var(--nw-border)]">
            <a href="tel:+994506368731" className="flex items-center gap-3 px-4 py-3 text-[var(--nw-primary)] font-semibold">
              +994 50 636 87 31
            </a>
            <div className="px-4 pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
