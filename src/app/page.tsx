'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { useCart } from '@/context/CartContext';
import { ServiceCard } from '@/components/ServiceCard';
import { WorkGallery } from '@/components/WorkGallery';
import { HeroWorkSlideshow } from '@/components/HeroWorkSlideshow';
import { ProductCard } from '@/components/ProductCard';
import FeaturesSection from '@/components/FeaturesSection';
import { Testimonials } from '@/components/Testimonials';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PackageSystemSection } from '@/components/PackageSystemSection';
import { catalogCategories } from '@/data/catalogCategories';
import { Tag, Truck, Shield, Award, ChevronRight, Sparkles } from 'lucide-react';

export default function Home() {
  const { packages, products, services, language } = useAdmin();
  const { addToCart } = useCart();
  const activePackages = packages.filter((p) => p.isActive);
  const activeProducts = products.filter((p) => p.isActive && !p.id.startsWith('gp'));

  const t = {
    heroCta: { AZ: 'Pulsuz Qiymət Təklifi Al', RU: 'Получить Предложение', EN: 'Get Free Quote' },
    heroBadge1: { AZ: '20+ il təcrübə', RU: '20+ лет опыта', EN: '20+ years experience' },
    heroBadge2: { AZ: 'Pulsuz ölçü', RU: 'Бесплатный замер', EN: 'Free measurement' },
    heroBadge3: { AZ: '+ Dizayn hədiyyə', RU: '+ Дизайн в подарок', EN: '+ Free design' },
    offers: { AZ: 'Təkliflər', RU: 'Акции', EN: 'Offers' },
    offersSub: { AZ: 'Ən sərfəli qiymətlər – material və montaj paketləri', RU: 'Лучшие цены – материалы и монтаж', EN: 'Best prices – materials and installation' },
    campaignProducts: { AZ: 'Kampaniyalı Məhsullar', RU: 'Акционные товары', EN: 'Campaign Products' },
    categories: { AZ: 'Kateqoriyalar', RU: 'Категории', EN: 'Categories' },
    categoriesSub: { AZ: 'Ehtiyacınıza uyğun kateqoriyanı seçin', RU: 'Выберите нужную категорию', EN: 'Choose the category you need' },
    viewAll: { AZ: 'Hamısına bax', RU: 'Смотреть все', EN: 'View all' },
    packages: { AZ: 'Paket Həllər', RU: 'Пакетные решения', EN: 'Package solutions' },
    materials: { AZ: 'Tikinti Materialları', RU: 'Строительные материалы', EN: 'Construction Materials' },
    services: { AZ: 'Xidmətlər', RU: 'Услуги', EN: 'Services' },
    whyUs: { AZ: 'Niyə AlcipanBaku?', RU: 'Почему AlcipanBaku?', EN: 'Why AlcipanBaku?' },
    trust1: { AZ: '20+ il təcrübə', RU: '20+ лет опыта', EN: '20+ years experience' },
    trust2: { AZ: 'Pulsuz ölçü', RU: 'Бесплатный замер', EN: 'Free measurement' },
    trust3: { AZ: 'Rəsmi təchizatçı', RU: 'Официальный поставщик', EN: 'Official supplier' },
    trust4: { AZ: 'Zəmanətli iş', RU: 'Гарантия на работы', EN: 'Guaranteed work' },
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      {/* HERO */}
      <section className="relative h-[80vh] sm:h-[85vh] min-h-[380px] sm:min-h-[500px] flex flex-col justify-center items-center text-center overflow-hidden">
        <HeroWorkSlideshow />
        <div className="relative z-20 container mx-auto px-3 sm:px-4 flex flex-col items-center max-w-4xl pt-10 sm:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6"
          >
            <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] sm:text-xs font-medium backdrop-blur-sm">
              <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#fbbf24]" />
              {t.heroBadge1[language]}
            </span>
            <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] sm:text-xs font-medium backdrop-blur-sm">
              <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#fbbf24]" />
              {t.heroBadge2[language]}
            </span>
            <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] sm:text-xs font-medium backdrop-blur-sm">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#fbbf24]" />
              {t.heroBadge3[language]}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-5 text-white leading-tight tracking-tight drop-shadow-2xl px-1"
          >
            {language === 'AZ' ? 'Evinizi' : language === 'RU' ? 'Ваш Дом' : 'Your Home'}{' '}
            <span className="text-white/90">{language === 'AZ' ? 'Premium Alçipan' : language === 'RU' ? 'Премиум Алчипан' : 'Premium Drywall'}</span>
            <br />
            <span className="text-[#fbbf24]">{language === 'AZ' ? 'ilə Gözəlləşdirin' : language === 'RU' ? 'Украсьте с Нами' : 'Beautify with Us'}</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm"
          >
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-1.5 sm:gap-2 w-full min-h-[44px] sm:min-h-[52px] md:min-h-[56px] py-2.5 sm:py-3.5 px-4 sm:px-6 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0a192f] text-sm sm:text-base md:text-lg font-bold rounded-xl sm:rounded-2xl shadow-[0_0_24px_rgba(251,191,36,0.35)] hover:shadow-[0_0_32px_rgba(251,191,36,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              {t.heroCta[language]}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#112240] border-y border-white/10 py-3 sm:py-5 md:py-6">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {[
              { icon: Award, text: t.trust1 },
              { icon: Tag, text: t.trust2 },
              { icon: Shield, text: t.trust3 },
              { icon: Truck, text: t.trust4 },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#fbbf24]/20 flex items-center justify-center">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#fbbf24]" />
                </div>
                <span className="text-white font-medium text-xs sm:text-sm md:text-base">{item.text[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS BAR */}
      <section className="bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#0a192f] border-b border-white/10 py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#fbbf24]/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{t.offers[language]}</h2>
                <p className="text-white/60 text-xs sm:text-sm mt-0.5">{t.offersSub[language]}</p>
              </div>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a192f] font-bold text-sm sm:text-base rounded-lg sm:rounded-xl transition-colors shrink-0"
            >
              {t.viewAll[language]}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* PAKET SİSTEMİ */}
      <PackageSystemSection />

      {/* CATEGORIES */}
      <section className="py-8 sm:py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10 md:mb-14">
            <span className="inline-block w-10 sm:w-14 h-1 bg-[#fbbf24] rounded-full mb-2 sm:mb-4" aria-hidden />
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1.5 sm:mb-2">{t.categories[language]}</h2>
            <p className="text-white/60 text-xs sm:text-sm md:text-base">{t.categoriesSub[language]}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
            {catalogCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                className="group flex flex-col rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#112240] hover:border-[#fbbf24]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-square bg-[#0a192f] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name[language]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
                <div className="p-2 sm:p-4 text-center flex items-center justify-center min-h-[44px] sm:min-h-[56px]">
                  <span className="text-white font-semibold text-xs sm:text-sm md:text-base group-hover:text-[#fbbf24] transition-colors line-clamp-2">
                    {cat.name[language]}
                  </span>
                </div>
                <div className="flex justify-center pb-2 sm:pb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#fbbf24]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN PRODUCTS */}
      <section className="py-8 sm:py-14 md:py-20 bg-[#112240]/40">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
            <div>
              <span className="inline-block w-10 sm:w-12 h-1 bg-[#fbbf24] rounded-full mb-2 sm:mb-3" aria-hidden />
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">{t.campaignProducts[language]}</h2>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                {language === 'AZ' ? 'Ən sərfəli təkliflər' : language === 'RU' ? 'Лучшие предложения' : 'Best value offers'}
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[#fbbf24] hover:text-[#f59e0b] font-semibold text-xs sm:text-sm md:text-base"
            >
              {t.viewAll[language]}
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>

          {activePackages.length > 0 && (
            <div className="mb-8 sm:mb-12">
              <h3 className="text-base sm:text-lg font-semibold text-[#fbbf24] mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-1 h-4 sm:h-5 bg-[#fbbf24] rounded-full" />
                {t.packages[language]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {activePackages.slice(0, 4).map((pkg) => (
                  <ProductCard key={pkg.id} product={pkg} />
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#fbbf24] mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1 h-4 sm:h-5 bg-[#fbbf24] rounded-full" />
              {t.materials[language]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {activeProducts.slice(0, 10).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-6 sm:mt-10 text-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a192f] font-bold text-sm sm:text-base rounded-lg sm:rounded-xl transition-colors shadow-lg"
              >
                {t.viewAll[language]}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-8 sm:py-14 md:py-20" id="services">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-12 md:mb-16">
            <span className="inline-block w-10 sm:w-14 h-1 bg-[#fbbf24] rounded-full mb-2 sm:mb-4" aria-hidden />
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 sm:mb-3">{t.services[language]}</h2>
            <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              {language === 'AZ'
                ? 'Peşəkar alçipan və tavan işləri – ölçüdən quraşdırmaya qədər tam xidmət.'
                : language === 'RU'
                  ? 'Профессиональные работы по гипсокартону и потолкам – полный цикл от замера до монтажа.'
                  : 'Professional drywall and ceiling work – full service from measurement to installation.'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.filter((s) => s.isActive).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-8 sm:py-14 md:py-20 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <span className="inline-block w-10 sm:w-14 h-1 bg-[#fbbf24] rounded-full mb-2 sm:mb-4" aria-hidden />
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-6 sm:mb-12">{t.whyUs[language]}</h2>
          <div className="text-white/90">
            <FeaturesSection variant="dark" />
          </div>
        </div>
      </section>

      <Testimonials />
      <WorkGallery />
    </div>
  );
}
