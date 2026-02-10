'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { useCart } from '@/context/CartContext';

import { ServiceCard } from '@/components/ServiceCard';
import { WorkGallery } from '@/components/WorkGallery';
import { PricingTables } from '@/components/PricingTables';
import FeaturesSection from '@/components/FeaturesSection';
import { FAQSection } from '@/components/FAQSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const { packages, products, services, language } = useAdmin();
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
      <section className="relative py-0 min-h-[550px] md:min-h-screen flex flex-col justify-end pb-20 md:justify-center overflow-hidden">
        {/* Background Image Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/new-hero.jpg"
            alt="Alcipan Baku Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/90 via-[#0a192f]/40 to-[#0a192f]/90 z-10"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 md:px-4 flex flex-col items-start md:items-center text-left md:text-center max-w-7xl h-full">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 text-white leading-[1.1] tracking-tight drop-shadow-xl"
          >
            {language === 'AZ' ? 'Premium Alçipan' :
              language === 'RU' ? 'Премиум Алчипан' :
                'Premium Drywall'} <br/>
             <span className="text-[#fbbf24]">{language === 'AZ' ? 'Xidmətləri' :
              language === 'RU' ? 'Услуги' :
                'Services'}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-lg md:text-3xl font-medium text-white/90 mb-4 tracking-wide"
          >
            {language === 'AZ' ? 'Material + Usta + Zəmanət' : 'Material + Master + Warranty'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs md:text-xl text-white/70 mb-8 font-light tracking-wider"
          >
            {language === 'AZ' ? 'Pulsuz Ölçü • Dizayn • Sürətli Montaj' :
              language === 'RU' ? 'Бесплатный замер • Дизайн • Быстрый монтаж' :
                'Free Measurement • Design • Fast Installation'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full md:w-auto"
          >
            <a
              href="#contact"
              className="flex items-center justify-center w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#fbbf24] to-[#b45309] text-white text-sm md:text-lg font-bold rounded-xl shadow-[0_10px_30px_-10px_rgba(251,191,36,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(251,191,36,0.8)] transition-all uppercase tracking-widest"
            >
              {language === 'AZ' ? 'PULSUZ QİYMƏT AL' : language === 'RU' ? 'ПОЛУЧИТЬ ЦЕНУ' : 'GET FREE QUOTE'}
            </a>
          </motion.div>
        </div>
      </section>

      {/* PRICING TABLES */}
      <PricingTables />

      {/* SERVICES SECTION */}
      <section className="bg-[#f8fafc] pb-20 md:py-20" id="services">
        <div className="container mx-auto px-4">
           {/* Section Header */}
           <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="h-px bg-gray-300 w-12 md:w-24"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0a192f] uppercase tracking-wide">
                        {language === 'AZ' ? 'Xidmətlərimiz' : language === 'RU' ? 'Услуги' : 'Services'}
                    </h2>
                    <div className="h-px bg-gray-300 w-12 md:w-24"></div>
                </div>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {services.slice(0, 2).map(service => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                 <div className="aspect-[4/3] relative">
                    <Image 
                        src={service.image} 
                        alt={service.name[language]} 
                        fill 
                        className="object-cover" 
                    />
                 </div>
                 <div className="p-4 text-center flex flex-col items-center flex-grow">
                    <h3 className="text-[#0a192f] font-bold text-sm md:text-xl mb-3">{service.name[language]}</h3>
                    <div className="mt-auto w-full">
                        <a 
                            href={`https://wa.me/994506368731?text=${encodeURIComponent(
                                `Salam, mən ${service.name[language]} xidməti ilə maraqlanıram.`
                            )}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full bg-[#fbbf24] hover:bg-[#d97706] text-[#0a192f] text-[11px] md:text-sm font-bold py-2.5 rounded-lg shadow-sm transition-all uppercase tracking-wide"
                        >
                            {language === 'AZ' ? 'əlaqə saxla' : language === 'RU' ? 'связаться' : 'contact us'}
                        </a>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS (MATERIALS) SECTION */}
      <section className="bg-[#f8fafc] py-12 md:py-20" id="materials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-[#0a192f]">
              {language === 'AZ' ? 'Tikinti Materialları' : language === 'RU' ? 'Строительные Материалы' : 'Construction Materials'}
            </h2>
            <div className="h-1 w-20 bg-[#fbbf24] mx-auto rounded-full mb-3"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
            {products.filter(p => p.isActive && p.price > 0).map(product => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
                <div className="bg-[#0a192f] py-2 px-3 text-center">
                  <h3 className="text-white text-xs md:text-sm font-bold tracking-wide">
                    {product.name[language]}
                  </h3>
                </div>
                <div className="relative h-32 md:h-48 w-full bg-gray-100">
                  <Image
                    src={product.image || 'https://placehold.co/400x300?text=No+Image'}
                    alt={product.name[language]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 md:p-4 flex flex-col flex-grow">
                  <div className="mt-auto">
                    <div className="mb-3">
                        <span className="text-lg font-bold text-[#0a192f]">
                          {product.price.toFixed(2)} {product.currency}
                        </span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full py-2 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0a192f] text-[10px] md:text-xs font-bold rounded border-none shadow-sm hover:shadow-md transition-all uppercase tracking-wider"
                    >
                      {language === 'AZ' ? 'SİFARİŞ ET' : language === 'RU' ? 'ЗАКАЗАТЬ' : 'ORDER'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US / STATS */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#0a192f]">
            {language === 'AZ' ? 'Niyə AlcipanBaku?' : language === 'RU' ? 'Почему AlcipanBaku?' : 'Why AlcipanBaku?'}
          </h2>
          <div className="h-1 w-16 bg-[#fbbf24] mx-auto rounded-full mb-6"></div>
          
          <div className="mt-12 text-[#0a192f]">
            <FeaturesSection />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <div className="bg-[#f8fafc]">
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


    </div>
  );
}
