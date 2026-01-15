'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { ProductCard } from '@/components/ProductCard';
import { ServiceCard } from '@/components/ServiceCard';
import { WorkGallery } from '@/components/WorkGallery';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import FeaturesSection from '@/components/FeaturesSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const { products, services, language } = useAdmin();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto">
        {/* Header */}
        {/* Hero Section - Redesigned (Light Theme) */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-white text-slate-900 rounded-3xl mb-16 shadow-2xl mx-4 mt-4 border border-gray-100">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 z-10" />
            {/* Abstract Pattern */}
            <div className="absolute inset-0 opacity-[0.03] z-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
                {language === 'AZ' ? 'Keyfiyyətli İnşaat' : language === 'RU' ? 'Качественное Строительство' : 'Quality Construction'}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  {language === 'AZ' ? 'Gələcəyi Yaradın' : language === 'RU' ? 'Создай Будущее' : 'Build The Future'}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                {language === 'AZ'
                  ? 'AlçipanBaku - 20 illik təcrübə ilə məkanınızı sənət əsərinə çeviririk.'
                  : language === 'RU'
                    ? 'AlcipanBaku - С 20-летним опытом превращаем ваше пространство в произведение искусства.'
                    : 'AlcipanBaku - Turning your space into a masterpiece with 20 years of experience.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/#products"
                  className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-200"
                >
                  {language === 'AZ' ? 'Məhsullara Baxın' : language === 'RU' ? 'Смотреть Продукты' : 'View Products'}
                </Link>
                <Link
                  href="/#contact"
                  className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-sm"
                >
                  {language === 'AZ' ? 'Əlaqə Saxlayın' : language === 'RU' ? 'Связаться' : 'Contact Us'}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 items-center flex flex-col gap-2 opacity-50"
          >
            <span className="text-xs uppercase tracking-widest text-slate-400">Scroll</span>
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-slate-400 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Products Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">
              {language === 'AZ' ? 'Məhsullar' : language === 'RU' ? 'Продукты' : 'Products'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.filter(p => p.isActive).length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 text-lg">No active products to display.</p>
            </div>
          )}
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-orange-500 pl-4">
              {language === 'AZ' ? 'Xidmətlər' : language === 'RU' ? 'Услуги' : 'Services'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          {services.filter(s => s.isActive).length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 text-lg">No active services to display.</p>
            </div>
          )}
        </section>

        {/* Our Work Section */}
        <WorkGallery />
      </main>
    </div>
  );
}
