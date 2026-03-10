'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import { useCart } from '@/context/CartContext';
import { PageContainer } from '@/components/layout/PageContainer';
import { CategoryGrid } from '@/components/catalog/CategoryGrid';
import { ProductCardNew } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/Button';
import { catalogCategories } from '@/data/catalogCategories';
import { MANUFACTURERS } from '@/data/catalogCategories';
import { ArrowRight, Truck, Shield, HeadphonesIcon } from 'lucide-react';

export default function NewWebsiteHomePage() {
  const { language, products, packages } = useAdmin();
  const { cartCount } = useCart();
  const activeProducts = products.filter((p) => p.isActive && !p.id.startsWith('gp')).slice(0, 8);
  const activePackages = packages.filter((p) => p.isActive).slice(0, 3);
  const featuredCategories = catalogCategories.slice(0, 6);

  const t = {
    heroTitle: { AZ: 'Tikinti materialları və alçipan sistemləri', RU: 'Строительные материалы и гипсокартонные системы', EN: 'Construction materials & drywall systems' },
    heroSub: { AZ: 'Keyfiyyətli məhsullar, sürətli çatdırılma, peşəkar dəstək.', RU: 'Качественная продукция, быстрая доставка, профессиональная поддержка.', EN: 'Quality products, fast delivery, professional support.' },
    browseCatalog: { AZ: 'Kataloqa bax', RU: 'В каталог', EN: 'Browse catalog' },
    categories: { AZ: 'Kateqoriyalar', RU: 'Категории', EN: 'Categories' },
    popularProducts: { AZ: 'Populyar məhsullar', RU: 'Популярные товары', EN: 'Popular products' },
    viewAll: { AZ: 'Hamısına bax', RU: 'Смотреть все', EN: 'View all' },
    packages: { AZ: 'Paket həllər', RU: 'Пакетные решения', EN: 'Package solutions' },
    brands: { AZ: 'Brendlər', RU: 'Бренды', EN: 'Brands' },
    trustTitle: { AZ: 'Niyə biz?', RU: 'Почему мы?', EN: 'Why us?' },
    trust1: { AZ: '20+ il təcrübə', RU: '20+ лет опыта', EN: '20+ years experience' },
    trust2: { AZ: 'Rəsmi təchizatçı', RU: 'Официальный поставщик', EN: 'Official supplier' },
    trust3: { AZ: 'Sürətli çatdırılma', RU: 'Быстрая доставка', EN: 'Fast delivery' },
    trust4: { AZ: 'Peşəkar dəstək', RU: 'Профессиональная поддержка', EN: 'Expert support' },
    ctaTitle: { AZ: 'Layihəniz üçün təklif almaq istəyirsiniz?', RU: 'Хотите получить предложение для вашего проекта?', EN: 'Need a quote for your project?' },
    ctaButton: { AZ: 'Əlaqə saxlayın', RU: 'Связаться', EN: 'Get in touch' },
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--nw-neutral-900)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/picture1.jpeg" alt="" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--nw-neutral-900)]/90 to-[var(--nw-neutral-900)]" />
        <PageContainer className="relative py-16 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {t.heroTitle[language]}
            </h1>
            <p className="mt-4 text-lg text-[var(--nw-neutral-300)]">
              {t.heroSub[language]}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/newebsite/catalog">
                <Button size="lg" variant="accent" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  {t.browseCatalog[language]}
                </Button>
              </Link>
              <a href="tel:+994506368731">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  +994 50 636 87 31
                </Button>
              </a>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Featured categories */}
      <section className="py-12 md:py-16">
        <PageContainer>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--nw-text)] mb-8">
            {t.categories[language]}
          </h2>
          <CategoryGrid columns={3} />
          <div className="mt-8 text-center">
            <Link href="/newebsite/catalog">
              <Button variant="outline" size="lg">
                {t.viewAll[language]}
              </Button>
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* Popular products */}
      <section className="py-12 md:py-16 bg-[var(--nw-bg-subtle)]">
        <PageContainer>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--nw-text)]">
              {t.popularProducts[language]}
            </h2>
            <Link href="/newebsite/catalog">
              <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
                {t.viewAll[language]}
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeProducts.map((product) => (
              <ProductCardNew key={product.id} product={product} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Package solutions */}
      {activePackages.length > 0 && (
        <section className="py-12 md:py-16">
          <PageContainer>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--nw-text)] mb-8">
              {t.packages[language]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activePackages.map((pkg) => (
                <ProductCardNew key={pkg.id} product={pkg} />
              ))}
            </div>
          </PageContainer>
        </section>
      )}

      {/* Brands */}
      <section className="py-12 md:py-16 bg-[var(--nw-bg-subtle)]">
        <PageContainer>
          <h2 className="text-2xl font-bold text-[var(--nw-text)] mb-8 text-center">
            {t.brands[language]}
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-80">
            {MANUFACTURERS.map((m) => (
              <div key={m.id} className="h-12 w-24 relative grayscale hover:grayscale-0 transition-all">
                <Image src={m.logo} alt={m.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Trust */}
      <section className="py-12 md:py-16">
        <PageContainer>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--nw-text)] mb-10 text-center">
            {t.trustTitle[language]}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-[var(--nw-radius-lg)] border border-[var(--nw-border)] bg-[var(--nw-bg-elevated)]">
              <div className="inline-flex p-3 rounded-full bg-[var(--nw-primary-light)] text-[var(--nw-primary)] mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <p className="font-semibold text-[var(--nw-text)]">{t.trust1[language]}</p>
            </div>
            <div className="text-center p-6 rounded-[var(--nw-radius-lg)] border border-[var(--nw-border)] bg-[var(--nw-bg-elevated)]">
              <div className="inline-flex p-3 rounded-full bg-[var(--nw-primary-light)] text-[var(--nw-primary)] mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <p className="font-semibold text-[var(--nw-text)]">{t.trust2[language]}</p>
            </div>
            <div className="text-center p-6 rounded-[var(--nw-radius-lg)] border border-[var(--nw-border)] bg-[var(--nw-bg-elevated)]">
              <div className="inline-flex p-3 rounded-full bg-[var(--nw-primary-light)] text-[var(--nw-primary)] mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <p className="font-semibold text-[var(--nw-text)]">{t.trust3[language]}</p>
            </div>
            <div className="text-center p-6 rounded-[var(--nw-radius-lg)] border border-[var(--nw-border)] bg-[var(--nw-bg-elevated)]">
              <div className="inline-flex p-3 rounded-full bg-[var(--nw-primary-light)] text-[var(--nw-primary)] mb-3">
                <HeadphonesIcon className="w-6 h-6" />
              </div>
              <p className="font-semibold text-[var(--nw-text)]">{t.trust4[language]}</p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[var(--nw-primary)] text-white">
        <PageContainer className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t.ctaTitle[language]}
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8">
            {language === 'AZ' ? 'Peşəkar komandamız sizin layihənizə uyğun təklif hazırlayacaq.' : 'Our team will prepare a tailored quote for your project.'}
          </p>
          <a href="tel:+994506368731">
            <Button size="lg" className="bg-white text-[var(--nw-primary)] hover:bg-[var(--nw-neutral-100)]">
              {t.ctaButton[language]}
            </Button>
          </a>
        </PageContainer>
      </section>
    </>
  );
}
