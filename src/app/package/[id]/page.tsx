'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useAdmin } from '@/context/AdminContext';
import { packageTiers } from '@/data/packageSystem';
import { Check, Calculator, ArrowLeft } from 'lucide-react';

export default function PackageDetailPage() {
  const { id } = useParams();
  const { language } = useAdmin();
  const tier = packageTiers.find((t) => t.id === id);

  if (!tier) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-4 bg-[var(--bg)]">
        <h2 className="text-2xl font-bold text-white mb-2">
          {language === 'AZ' ? 'Paket tapılmadı' : language === 'RU' ? 'Пакет не найден' : 'Package not found'}
        </h2>
        <Link
          href="/#packages"
          className="text-[#fbbf24] hover:underline inline-flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === 'AZ' ? 'Paketlərə qayıt' : language === 'RU' ? 'Вернуться к пакетам' : 'Back to packages'}
        </Link>
      </div>
    );
  }

  const isPopular = tier.id === 'premium';

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-[#fbbf24] transition-colors">
            {language === 'AZ' ? 'Ana səhifə' : language === 'RU' ? 'Главная' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/#packages" className="hover:text-[#fbbf24] transition-colors">
            {language === 'AZ' ? 'Paket sistemi' : language === 'RU' ? 'Система пакетов' : 'Package system'}
          </Link>
          <span>/</span>
          <span className="text-white font-medium">{tier.name[language]}</span>
        </nav>

        <div
          className={`relative rounded-2xl border overflow-hidden ${
            isPopular
              ? 'bg-[#112240] border-[#fbbf24]/50 shadow-[0_0_40px_rgba(251,191,36,0.2)]'
              : 'bg-[#112240] border-white/10'
          }`}
        >
          {isPopular && (
            <div className="absolute top-0 left-0 right-0 py-2 bg-[#fbbf24] text-[#0a192f] text-center text-sm font-bold uppercase">
              {language === 'AZ' ? 'Ən populyar' : language === 'RU' ? 'Популярный' : 'Most popular'}
            </div>
          )}
          <div className={`p-8 sm:p-10 md:p-12 ${isPopular ? 'pt-14' : ''}`}>
            <h1
              className={`text-3xl sm:text-4xl font-bold mb-2 ${
                isPopular ? 'text-[#fbbf24]' : 'text-white'
              }`}
            >
              {tier.name[language]}
            </h1>
            <p className="text-white/60 text-sm sm:text-base mb-8">
              {language === 'AZ'
                ? 'Material və montaj daxildir.'
                : language === 'RU'
                  ? 'Материалы и монтаж включены.'
                  : 'Materials and installation included.'}
            </p>

            <ul className="space-y-4 mb-10">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#fbbf24]/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#fbbf24]" />
                  </span>
                  <span className="text-base sm:text-lg">{feature[language]}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a192f] font-bold rounded-xl transition-colors shadow-lg hover:shadow-[#fbbf24]/30"
              >
                <Calculator className="w-5 h-5" />
                {language === 'AZ' ? 'Qiymət kalkulyatoruna keç' : language === 'RU' ? 'Перейти к калькулятору цен' : 'Go to price calculator'}
              </Link>
              <Link
                href="/#packages"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl border border-white/20 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {language === 'AZ' ? 'Digər paketlər' : language === 'RU' ? 'Другие пакеты' : 'Other packages'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
