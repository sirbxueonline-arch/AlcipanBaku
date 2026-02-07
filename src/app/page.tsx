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
      <section className="relative py-0 min-h-[60vh] md:min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/new-hero.jpg"
            alt="Alcipan Baku Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center max-w-7xl h-full justify-center pt-28 pb-12">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 mobile-heading text-white leading-[1.1] tracking-normal drop-shadow-xl"
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
            className="text-base md:text-2xl font-normal text-white/90 mb-5 tracking-wide"
          >
            {language === 'AZ' ? 'Material + Usta + Zəmanət' : 'Material + Master + Warranty'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs md:text-xl text-white/70 mb-8 font-light max-w-xs md:max-w-2xl mx-auto tracking-wide"
          >
            {language === 'AZ' ? 'Pulsuz Ölçü • Dizayn • Sürətli Montaj' :
              language === 'RU' ? 'Бесплатный замер • Дизайн • Быстрый монтаж' :
                'Free Measurement • Design • Fast Installation'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full px-10 md:w-auto md:px-0"
          >
            <a
              href="#contact"
              className="flex items-center justify-center w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-[#fbbf24] to-[#d97706] text-[#0a192f] text-sm md:text-lg font-bold rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all uppercase tracking-widest"
            >
              {language === 'AZ' ? 'PULSUZ QİYMƏT AL' : language === 'RU' ? 'ПОЛУЧИТЬ ЦЕНУ' : 'GET FREE QUOTE'}
            </a>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS / PACKAGES */}
      <section className="relative container mx-auto px-4 -mt-8 z-30 mb-12" id="products">
        <div className="bg-white/95 md:bg-transparent rounded-[30px] shadow-2xl md:shadow-none p-6 md:p-0">
        
        <div className="mb-8 md:mb-16 text-center">
            <h2 className="text-xl md:text-4xl font-bold text-[#0a192f] relative inline-block pb-4">
               {language === 'AZ' ? 'Paket Təkliflərimiz' : language === 'RU' ? 'Наши Пакетные Предложения' : 'Our Package Offers'}
               <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 md:w-24 h-[2px] bg-gray-200">
                  <div className="w-8 md:w-12 h-full bg-[#fbbf24] mx-auto"></div>
               </div>
            </h2>
             <p className="text-gray-500 font-medium text-[11px] md:text-base mt-2 tracking-wide">
                {language === 'AZ' ? 'Tam Xidmət | Material | Montaj Daxil' : 'Full Service | Material | Installation Included'}
            </p>
        </div>

          {/* Custom Package Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto">
            {packages.filter(p => p.isActive).slice(0, 2).map(pkg => (
              <div key={pkg.id} className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 flex flex-col items-center pt-2 pb-4 md:pb-8">
                
                {/* Visual Separator/Header - Dark Blue Rounded Tag */}
                 <div className="bg-[#0a192f] w-[90%] py-2 md:py-3 rounded-lg md:rounded-xl text-center shadow-lg -mt-0 mb-4">
                    <h3 className="text-white text-[13px] md:text-2xl font-bold tracking-wide">
                        {pkg.name[language]}
                    </h3>
                 </div>

                <div className="px-3 md:px-8 w-full flex flex-col items-center flex-grow">
                  {/* Price */}
                   <div className="text-center mb-4 md:mb-8">
                      <div className="flex flex-col items-center text-[#0a192f]">
                        <span className="text-2xl md:text-5xl font-extrabold tracking-tight leading-none">
                          {(pkg.price * (pkg.step || 20)).toLocaleString()} {pkg.currency}
                        </span>
                      </div>
                   </div>

                  {/* Features List */}
                  <ul className="space-y-2 md:space-y-4 w-full mb-6 md:mb-8 text-left max-w-[200px] md:max-w-xs mx-auto">
                    {pkg.description[language].split('\n').map((line, idx) => (
                      <li key={idx} className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium text-[10px] md:text-base">
                        <div className="flex-shrink-0 text-[#fbbf24] text-xs md:text-lg">✔</div>
                        <span className="flex-1">{line}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className="mt-auto w-full max-w-[180px] md:max-w-xs">
                    <button onClick={() => addToCart(pkg)} className="w-full py-2.5 md:py-4 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0a192f] font-bold rounded-lg md:rounded-xl shadow-md transition-all text-[11px] md:text-lg uppercase tracking-wider">
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
      <section className="bg-transparent pb-20 md:py-20" id="services">
        <div className="container mx-auto px-4">
           <div className="text-center mb-8 md:mb-12">
                <h2 className="text-xl md:text-4xl font-bold text-[#0a192f] relative inline-block pb-4">
                  {language === 'AZ' ? 'Xidmətlərimiz' : language === 'RU' ? 'Услуги' : 'Services'}
                   <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 md:w-24 h-[2px] bg-gray-200">
                      <div className="w-8 md:w-12 h-full bg-[#fbbf24] mx-auto"></div>
                   </div>
                </h2>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8 max-w-4xl mx-auto">
            {services.slice(0, 2).map(service => (
              <div key={service.id} className="relative group overflow-hidden rounded-xl md:rounded-3xl shadow-lg bg-white">
                 <div className="aspect-[4/3] md:aspect-[16/9] relative">
                    <Image src={service.image} alt={service.name[language]} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                 </div>
                 <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-center">
                    <h3 className="text-white font-bold text-sm md:text-2xl mb-2 md:mb-4 drop-shadow-md">{service.name[language]}</h3>
                    <a href="#contact" className="inline-block bg-[#fbbf24] hover:bg-[#d97706] text-[#0a192f] text-[10px] md:text-base font-bold py-1.5 px-4 md:py-3 md:px-8 rounded-full shadow-lg transition-all uppercase tracking-wide">
                        {language === 'AZ' ? 'əlaqə saxla' : language === 'RU' ? 'связаться' : 'contact us'}
                    </a>
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

      {/* Sticky Mobile Whatsapp Button - PILL SHAPE */}
      <a
        href="https://wa.me/994506368731"
        target="_blank"
        className="fixed bottom-6 right-1/2 translate-x-1/2 w-[90%] md:w-auto md:right-6 md:translate-x-0 md:bg-[#25D366] md:rounded-full bg-[#128c7e] text-white rounded-xl flex items-center justify-center gap-3 py-3.5 shadow-lg z-50 md:hidden hover:bg-[#075e54] transition-all active:scale-95"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
        <span className="font-bold text-base">WhatsApp ilə Yaz</span>
      </a>

    </div>
  );
}
