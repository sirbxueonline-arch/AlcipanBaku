'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { WorkGallery } from '@/components/WorkGallery';
import { HeroWorkSlideshow } from '@/components/HeroWorkSlideshow';
import { PackageSystemSection } from '@/components/PackageSystemSection';
import { Testimonials } from '@/components/Testimonials';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  LayoutGrid,
  Palette,
  Lightbulb,
  Building2,
  ImageIcon,
  Calculator,
  PenTool,
  Wrench,
  Phone,
  MessageCircle,
  Instagram,
} from 'lucide-react';

export default function Home() {
  const { language } = useAdmin();

  const t = {
    heroTitle: {
      AZ: 'AlcipanBaku – Azərbaycanda rəqəmsal tavan platforması',
      RU: 'AlcipanBaku – Цифровая платформа потолков в Азербайджане',
      EN: 'AlcipanBaku – Digital ceiling platform in Azerbaijan',
    },
    heroSub: {
      AZ: '20 il təcrübə ilə alçıpan və dekorativ tavan sistemləri.',
      RU: 'Гипсокартонные и декоративные потолочные системы с 20-летним опытом.',
      EN: 'Drywall and decorative ceiling systems with 20 years of experience.',
    },
    heroTags: {
      AZ: 'Onlayn sifariş • Dizayn • Material • Montaj • Zəmanət',
      RU: 'Онлайн заказ • Дизайн • Материал • Монтаж • Гарантия',
      EN: 'Online order • Design • Material • Installation • Warranty',
    },
    ctaPrice: { AZ: 'Qiymət Hesabla', RU: 'Рассчитать цену', EN: 'Calculate price' },

    servicesTitle: { AZ: 'Xidmətlər', RU: 'Услуги', EN: 'Services' },
    s1: { AZ: 'Alçıpan tavan sistemləri', RU: 'Гипсокартонные потолочные системы', EN: 'Drywall ceiling systems' },
    s2: { AZ: 'Dekorativ tavan dizaynları', RU: 'Декоративные потолочные дизайны', EN: 'Decorative ceiling designs' },
    s3: { AZ: 'LED və işıq sistemləri', RU: 'LED и системы освещения', EN: 'LED and lighting systems' },
    s4: { AZ: 'Ofis və ev tavan layihələri', RU: 'Офисные и домашние потолочные проекты', EN: 'Office and home ceiling projects' },

    howTitle: { AZ: 'Necə işləyir', RU: 'Как это работает', EN: 'How it works' },
    step1: { AZ: 'Müştəri otağın şəklini göndərir', RU: 'Клиент отправляет фото комнаты', EN: 'Customer sends a photo of the room' },
    step2: { AZ: 'Sistem təxmini qiyməti hesablayır', RU: 'Система рассчитывает примерную цену', EN: 'System calculates approximate price' },
    step3: { AZ: 'Dizayn hazırlanır', RU: 'Подготавливается дизайн', EN: 'Design is prepared' },
    step4: { AZ: 'Montaj və zəmanət', RU: 'Монтаж и гарантия', EN: 'Installation and warranty' },

    galleryTitle: { AZ: 'Görülən işlər', RU: 'Выполненные работы', EN: 'Completed work' },
    contactTitle: { AZ: 'Əlaqə', RU: 'Контакты', EN: 'Contact' },
    phone: { AZ: 'Telefon', RU: 'Телефон', EN: 'Phone' },
    whatsapp: { AZ: 'WhatsApp', RU: 'WhatsApp', EN: 'WhatsApp' },
    instagram: { AZ: 'Instagram', RU: 'Instagram', EN: 'Instagram' },
  };

  const services = [
    { icon: LayoutGrid, text: t.s1 },
    { icon: Palette, text: t.s2 },
    { icon: Lightbulb, text: t.s3 },
    { icon: Building2, text: t.s4 },
  ];

  const steps = [
    { icon: ImageIcon, text: t.step1 },
    { icon: Calculator, text: t.step2 },
    { icon: PenTool, text: t.step3 },
    { icon: Wrench, text: t.step4 },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      {/* 1. ÜST BAŞLIQ / HERO */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <HeroWorkSlideshow />
        <div className="relative z-20 container mx-auto px-3 sm:px-4 flex flex-col items-center max-w-4xl pt-10 sm:pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-5 px-1"
          >
            {t.heroTitle[language]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/90 text-base sm:text-lg md:text-xl mb-3"
          >
            {t.heroSub[language]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-sm sm:text-base mb-6 sm:mb-8"
          >
            {t.heroTags[language]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 py-3 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a192f] font-bold rounded-xl sm:rounded-2xl text-base sm:text-lg shadow-[0_0_24px_rgba(251,191,36,0.35)] hover:shadow-[0_0_32px_rgba(251,191,36,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Calculator className="w-5 h-5" />
              {t.ctaPrice[language]}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. XİDMƏTLƏR */}
      <section id="services" className="py-10 sm:py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block w-10 sm:w-14 h-1 bg-[#fbbf24] rounded-full mb-2 sm:mb-4" aria-hidden />
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1.5">
              {t.servicesTitle[language]}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 sm:p-6 rounded-xl border border-white/10 bg-[#112240] hover:border-[#fbbf24]/40 transition-all"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#fbbf24]/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#fbbf24]" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">{item.text[language]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HAZIR TAVAN PAKETLƏRİ */}
      <PackageSystemSection />

      {/* 4. NECƏ İŞLƏYİR */}
      <section className="py-10 sm:py-14 md:py-20 bg-[#112240]/60">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block w-10 sm:w-14 h-1 bg-[#fbbf24] rounded-full mb-2 sm:mb-4" aria-hidden />
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1.5">
              {t.howTitle[language]}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#fbbf24]/20 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#fbbf24]" />
                </div>
                <span className="text-[#fbbf24] font-bold text-lg sm:text-xl mb-2">{i + 1}</span>
                <p className="text-white/90 text-sm sm:text-base">{step.text[language]}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-white/10" aria-hidden />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GÖRÜLƏN İŞLƏR (Qalereya) */}
      <section id="gallery" className="py-10 sm:py-14 md:py-20">
        <WorkGallery
          title={{
            AZ: 'Görülən işlər',
            RU: 'Выполненные работы',
            EN: 'Completed work',
          }}
        />
      </section>

      {/* 6. MÜŞTƏRİ RƏYLƏRİ */}
      <Testimonials />

      {/* 7. ƏLAQƏ */}
      <section id="contact" className="py-10 sm:py-14 md:py-20 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block w-10 sm:w-14 h-1 bg-[#fbbf24] rounded-full mb-2 sm:mb-4" aria-hidden />
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1.5">
              {t.contactTitle[language]}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <a
              href="tel:+994506368731"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0a192f] border border-white/10 hover:border-[#fbbf24]/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#fbbf24]/20 flex items-center justify-center group-hover:bg-[#fbbf24]/30 transition-colors">
                <Phone className="w-7 h-7 text-[#fbbf24]" />
              </div>
              <span className="text-white font-semibold">{t.phone[language]}</span>
              <span className="text-[#fbbf24] font-bold text-lg">+994 50 636 87 31</span>
            </a>
            <a
              href="https://wa.me/994506368731"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0a192f] border border-white/10 hover:border-[#fbbf24]/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#fbbf24]/20 flex items-center justify-center group-hover:bg-[#fbbf24]/30 transition-colors">
                <MessageCircle className="w-7 h-7 text-[#fbbf24]" />
              </div>
              <span className="text-white font-semibold">{t.whatsapp[language]}</span>
              <span className="text-white/80 text-sm">WhatsApp ilə yazın</span>
            </a>
            <a
              href="https://instagram.com/alcipanbaku"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0a192f] border border-white/10 hover:border-[#fbbf24]/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#fbbf24]/20 flex items-center justify-center group-hover:bg-[#fbbf24]/30 transition-colors">
                <Instagram className="w-7 h-7 text-[#fbbf24]" />
              </div>
              <span className="text-white font-semibold">{t.instagram[language]}</span>
              <span className="text-white/80 text-sm">@alcipanbaku</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
