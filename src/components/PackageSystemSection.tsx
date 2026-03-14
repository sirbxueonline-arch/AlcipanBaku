'use client';

import React from 'react';
import Link from 'next/link';
import { useAdmin } from '@/context/AdminContext';
import { packageTiers } from '@/data/packageSystem';
import { Check } from 'lucide-react';

export function PackageSystemSection() {
  const { language } = useAdmin();

  return (
    <section id="packages" className="py-8 sm:py-14 md:py-20 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10 md:mb-14">
          <span className="inline-block w-10 sm:w-14 h-1 bg-[#fbbf24] rounded-full mb-2 sm:mb-4" aria-hidden />
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1.5 sm:mb-2">
            {language === 'AZ' ? 'Paket sistemi' : language === 'RU' ? 'Система пакетов' : 'Package system'}
          </h2>
          <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-1">
            {language === 'AZ'
              ? 'Ehtiyacınıza uyğun paketi seçin – material və montaj daxildir.'
              : language === 'RU'
                ? 'Выберите подходящий пакет – материалы и монтаж включены.'
                : 'Choose the package that fits your needs – materials and installation included.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {packageTiers.map((tier, index) => (
            <Link
              key={tier.id}
              href={`/package/${tier.id}`}
              className={`relative flex flex-col rounded-xl sm:rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fbbf24] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${
                index === 1
                  ? 'bg-[#112240] border-[#fbbf24]/50 shadow-[0_0_30px_rgba(251,191,36,0.15)]'
                  : 'bg-[#112240] border-white/10 hover:border-[#fbbf24]/40'
              }`}
            >
              {index === 1 && (
                <div className="absolute top-0 left-0 right-0 py-1 sm:py-1.5 bg-[#fbbf24] text-[#0a192f] text-center text-[10px] sm:text-xs font-bold uppercase">
                  {language === 'AZ' ? 'Ən populyar' : language === 'RU' ? 'Популярный' : 'Most popular'}
                </div>
              )}
              <div className={`p-4 sm:p-6 md:p-8 ${index === 1 ? 'pt-8 sm:pt-10' : ''}`}>
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 ${
                    index === 1 ? 'text-[#fbbf24]' : 'text-white'
                  }`}
                >
                  {tier.name[language]}
                </h3>
                <ul className="space-y-2.5 sm:space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3 text-white/90">
                      <span className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#fbbf24]/20 flex items-center justify-center">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#fbbf24]" />
                      </span>
                      <span className="text-xs sm:text-sm md:text-base">{feature[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
