'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import { catalogCategories } from '@/data/catalogCategories';
import { PageContainer } from '@/components/layout/PageContainer';
import { cn } from '@/lib/utils';

const footerNav = [
  { href: '/newebsite', label: { AZ: 'Ana səhifə', RU: 'Главная', EN: 'Home' } },
  { href: '/newebsite/catalog', label: { AZ: 'Kataloq', RU: 'Каталог', EN: 'Catalog' } },
  { href: '/newebsite/about', label: { AZ: 'Haqqımızda', RU: 'О нас', EN: 'About' } },
  { href: '/contact', label: { AZ: 'Əlaqə', RU: 'Контакты', EN: 'Contact' } },
  { href: '/privacy', label: { AZ: 'Məxfilik', RU: 'Конфиденциальность', EN: 'Privacy' } },
];

export function NewWebsiteFooter() {
  const { language } = useAdmin();

  return (
    <footer className="bg-[var(--nw-neutral-900)] text-[var(--nw-neutral-300)]">
      <PageContainer className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/newebsite" className="inline-flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 rounded-lg overflow-hidden">
                <Image src="/brand-logo.jpg" alt="Alcipan Baku" fill className="object-cover" />
              </div>
              <span className="font-bold text-xl text-white">
                ALCIPAN <span className="text-[var(--nw-primary)]">BAKU</span>
              </span>
            </Link>
            <p className="text-sm max-w-xs">
              {language === 'AZ'
                ? 'Tikinti materialları və alçipan sistemləri üzrə peşəkar təchizatçı. Keyfiyyət və etibar.'
                : language === 'RU'
                  ? 'Профессиональный поставщик строительных материалов и гипсокартонных систем.'
                  : 'Professional supplier of construction materials and drywall systems. Quality and trust.'}
            </p>
            <a href="tel:+994506368731" className="mt-4 inline-block font-semibold text-white hover:text-[var(--nw-primary)] transition-colors">
              +994 50 636 87 31
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {language === 'AZ' ? 'Keçidlər' : language === 'RU' ? 'Ссылки' : 'Links'}
            </h3>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {language === 'AZ' ? 'Kateqoriyalar' : language === 'RU' ? 'Категории' : 'Categories'}
            </h3>
            <ul className="space-y-2">
              {catalogCategories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/newebsite/catalog/${cat.slug}`}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {cat.name[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {language === 'AZ' ? 'Etibar' : language === 'RU' ? 'Надежность' : 'Trust'}
            </h3>
            <p className="text-sm mb-4">
              {language === 'AZ' ? '20 il təcrübə. Rəsmi təchizatçı.' : '20+ years experience. Official supplier.'}
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 rounded bg-[var(--nw-neutral-800)] text-xs font-medium">KNAUF</span>
              <span className="px-3 py-1 rounded bg-[var(--nw-neutral-800)] text-xs font-medium">RIGIPS</span>
              <span className="px-3 py-1 rounded bg-[var(--nw-neutral-800)] text-xs font-medium">GILAN</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--nw-neutral-700)] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <span>© {new Date().getFullYear()} Alcipan Baku. {language === 'AZ' ? 'Bütün hüquqlar qorunur.' : 'All rights reserved.'}</span>
        </div>
      </PageContainer>
    </footer>
  );
}
