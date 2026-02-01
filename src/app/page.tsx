'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { useCart } from '@/context/CartContext';

import { ServiceCard } from '@/components/ServiceCard';
import { WorkGallery } from '@/components/WorkGallery';
import FeaturesSection from '@/components/FeaturesSection';
import { FAQSection } from '@/components/FAQSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const { packages, services, language } = useAdmin();
  const { addToCart } = useCart();

  const sendWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const msg = (form.elements.namedItem('msg') as HTMLTextAreaElement).value;

    // Updated phone number
    const phoneNumber = '994506368731';

    // Formatted message
    const text = `Salam, ölçü üçün müraciət edirəm!%0A%0A👤 *Ad:* ${name}%0A📞 *Telefon:* ${phone}%0A📝 *Məlumat:* ${msg}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">


      {/* HERO SECTION */}
      <section className="relative py-8 md:py-24 px-4 min-h-[50vh] md:min-h-[85vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/picture3.jpeg"
            alt="Alcipan Baku Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center max-w-7xl pt-6 md:pt-0">
          <div className="mb-2 md:mb-6">
            <span className="text-white/90 font-semibold tracking-[0.2em] uppercase text-[10px] md:text-sm border-b-2 border-[#fbbf24] pb-1 md:pb-2">
                // ALÇİPAN BAKU
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-5xl md:text-7xl font-extrabold mb-3 md:mb-6 text-white leading-[1.1] tracking-tight max-w-4xl drop-shadow-lg"
          >
            {language === 'AZ' ? 'Premium Alçipan Xidmətləri' :
              language === 'RU' ? 'Премиум Услуги Алчипан' :
                'Premium Drywall Services'}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-base md:text-3xl font-medium text-[#fbbf24] mb-4 md:mb-10 tracking-wide"
          >
            {language === 'AZ' ? 'Material + Usta + Zəmanət' : 'Material + Master + Warranty'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs md:text-xl text-white/90 mb-6 md:mb-12 font-medium max-w-xs md:max-w-2xl mx-auto leading-relaxed"
          >
            {language === 'AZ' ? 'Pulsuz Ölçü • Dizayn • Sürətli Montaj' :
              language === 'RU' ? 'Бесплатный замер • Дизайн • Быстрый монтаж' :
                'Free Measurement • Design • Fast Installation'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 md:px-12 py-2.5 md:py-4 bg-gradient-to-r from-[#fbbf24] to-[#d97706] text-[#0a192f] text-xs md:text-base font-extrabold rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
            >
              {language === 'AZ' ? 'PULSUZ QİYMƏT AL' : language === 'RU' ? 'ПОЛУЧИТЬ ЦЕНУ' : 'GET FREE QUOTE'}
            </a>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS / PACKAGES */}
      <section className="relative container mx-auto px-4 py-8 md:py-20 -mt-8 md:-mt-20 z-30" id="products">
        <div className="bg-white rounded-2xl md:rounded-[2.5rem] shadow-2xl p-6 md:p-12 mb-16 relative overflow-hidden">

          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-[#0a192f]">
              {language === 'AZ' ? 'Paket Təkliflərimiz' : language === 'RU' ? 'Наши Пакетные Предложения' : 'Our Package Offers'}
            </h2>
            <div className="h-1 w-20 bg-[#fbbf24] mx-auto rounded-full mb-3"></div>
            <p className="text-gray-500 font-medium text-xs md:text-base uppercase tracking-wider">
              {language === 'AZ' ? 'Tam Xidmət | Material | Montaj Daxil' : 'Full Service | Material | Installation Included'}
            </p>
          </div>

          {/* Custom Package Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-7xl mx-auto">
            {packages.filter(p => p.isActive).slice(0, 3).map(pkg => (
              <div key={pkg.id} className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100 flex flex-col group transform hover:-translate-y-1">

                {/* Dark Blue Header */}
                <div className="bg-[#0a192f] py-3 md:py-6 px-2 md:px-4 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 bg-white/5 rounded-bl-full -mr-2 -mt-2 md:-mr-4 md:-mt-4"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 md:w-12 md:h-12 bg-white/5 rounded-tr-full -ml-2 -mb-2 md:-ml-4 md:-mb-4"></div>
                  <h3 className="text-white text-sm md:text-2xl font-bold tracking-wide relative z-10 truncate">
                    {pkg.name[language]}
                  </h3>
                </div>

                <div className="p-3 md:p-8 flex flex-col items-center flex-grow bg-gradient-to-b from-white to-gray-50">
                  {/* Price */}
                  <div className="text-center mb-4 md:mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-1 text-[#0a192f]">
                      <span className="text-2xl md:text-5xl font-extrabold tracking-tight">
                        {pkg.price.toLocaleString()}
                      </span>
                      <span className="text-sm md:text-2xl font-bold text-gray-400">
                        {pkg.currency}
                      </span>
                    </div>
                    <div className="mt-1 text-green-600 font-semibold text-[10px] md:text-xs uppercase tracking-wider bg-green-50 px-2 py-0.5 md:px-3 md:py-1 rounded-full inline-block">
                      {language === 'AZ' ? 'Əla Qiymət' : 'Best Value'}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-1.5 md:space-y-3 w-full mb-4 md:mb-8 text-left pl-0 md:pl-6 bg-transparent md:bg-white p-0 md:p-4 rounded-xl border-none md:border md:border-gray-100 shadow-none md:shadow-sm">
                    {pkg.description[language].split('\n').map((line, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 md:gap-3.5 text-gray-700 font-medium text-[11px] md:text-base leading-tight md:leading-relaxed">
                        <div className="flex-shrink-0 w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="flex-1">{line}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className="mt-auto w-full">
                    <button onClick={() => addToCart(pkg)} className="w-full py-2.5 md:py-4 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0a192f] font-extrabold rounded-lg md:rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-xs md:text-lg uppercase tracking-wider border-b-2 md:border-b-4 border-[#d97706]/20">
                      {language === 'AZ' ? 'SİFARİŞ ET' : language === 'RU' ? 'ЗАКАЗАТЬ' : 'ORDER NOW'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-12 md:py-20" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4 text-[#0a192f]">
              {language === 'AZ' ? 'Xidmətlərimiz' : language === 'RU' ? 'Услуги' : 'Services'}
            </h2>
            <div className="h-1 w-24 bg-[#0a192f]/10 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US / STATS */}
      <section className="bg-[#f8fafc] py-16">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#0a192f]">
            {language === 'AZ' ? 'Niyə AlcipanBaku?' : language === 'RU' ? 'Почему AlcipanBaku?' : 'Why AlcipanBaku?'}
          </h2>
          <div className="h-1 w-16 bg-[#fbbf24] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {language === 'AZ' ? 'Paket sistem ilə işin bütün mərhələsi bir yerdə: ölçü → material → montaj → təhvil.' :
              language === 'RU' ? 'Весь процесс работы по пакетной системе в одном месте: замер → материал → монтаж → сдача.' :
                'All stages of work with the package system in one place: measurement → material → installation → delivery.'}
          </p>

          <div className="mt-12 text-[#0a192f]">
            <FeaturesSection />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <div className="bg-white">
        <FAQSection />
      </div>

      {/* WORK GALLERY */}
      <WorkGallery />

      {/* CONTACT FORM */}
      <section className="bg-[#0a192f] text-white py-20 text-center" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'AZ' ? 'Ölçü üçün müraciət' : language === 'RU' ? 'Заявка на замер' : 'Request Measurement'}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">
            {language === 'AZ' ? 'Qiymət obyektə baxıldıqdan sonra dəqiqləşdirilir.' : language === 'RU' ? 'Цена уточняется после осмотра объекта.' : 'Price is finalized after site inspection.'}
          </p>

          <form onSubmit={sendWhatsApp} className="max-w-xl mx-auto space-y-4">
            <input
              name="name"
              placeholder={language === 'AZ' ? 'Adınız' : language === 'RU' ? 'Ваше Имя' : 'Your Name'}
              required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--gold)] transition-colors placeholder:text-white/40"
            />
            <input
              name="phone"
              placeholder={language === 'AZ' ? 'Telefon' : language === 'RU' ? 'Телефон' : 'Phone'}
              required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--gold)] transition-colors placeholder:text-white/40"
            />
            <textarea
              name="msg"
              placeholder={language === 'AZ' ? 'Qısa məlumat (mənzil / obyekt)' : language === 'RU' ? 'Краткая информация (квартира / объект)' : 'Short info (apartment / object)'}
              rows={4}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--gold)] transition-colors resize-none mb-4 placeholder:text-white/40"
            />
            <button className="w-full py-4 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#0a192f] font-bold rounded-lg hover:shadow-lg transition-all text-lg uppercase tracking-wide">
              {language === 'AZ' ? 'GÖNDƏR' : language === 'RU' ? 'ОТПРАВИТЬ' : 'SEND'}
            </button>
          </form>
        </div>
      </section>
      {/* Sticky Mobile Whatsapp Button */}
      <a
        href="https://wa.me/994506368731"
        target="_blank"
        className="fixed bottom-0 left-0 w-full bg-[#1da750] text-white py-4 flex items-center justify-center gap-3 z-50 md:hidden shadow-[0_-5px_20px_rgba(37,211,102,0.3)] hover:bg-[#189144] active:bg-[#15803c]"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
        <span className="font-bold text-lg">{language === 'AZ' ? 'WhatsApp ilə Yaz' : 'WhatsApp'}</span>
      </a>

    </div>
  );
}
