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
  const [expandedPlan, setExpandedPlan] = React.useState<any>(null);

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
      <section className="relative h-[85vh] min-h-[500px] flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/new-hero.jpg"
            alt="Alcipan Baku Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/90 via-[#0a192f]/70 to-[#0a192f] z-10 transition-opacity duration-700"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center max-w-4xl pt-16">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white leading-tight tracking-tight drop-shadow-2xl"
          >
            {language === 'AZ' ? 'Evinizi' : language === 'RU' ? 'Ваш Дом' : 'Your Home'} <span className="text-white/90">{language === 'AZ' ? 'Premium Alçipan' : language === 'RU' ? 'Премиум Алчипан' : 'Premium Drywall'}</span>
            <br />
            <span className="text-[#fbbf24]">
                {language === 'AZ' ? 'ilə Gözəlləşdirin' : language === 'RU' ? 'Украсьте с Нами' : 'Beautify with Us'}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex flex-col gap-1.5 items-center mb-6"
          >
             <div className="flex items-center gap-2 text-white/90 text-sm md:text-xl font-medium bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
                <span className="text-[#fbbf24] text-lg">✔</span>
                <span>{language === 'AZ' ? 'Yüksək Keyfiyyətli Material' : language === 'RU' ? 'Качественный Материал' : 'High Quality Material'}</span>
             </div>
             <div className="flex items-center gap-2 text-white/80 text-xs md:text-lg font-medium">
                <span>+ {language === 'AZ' ? 'Təcrübəli Usta' : language === 'RU' ? 'Опытный Мастер' : 'Experienced Master'}</span>
                <span>+ {language === 'AZ' ? 'Tam Zəmanət' : language === 'RU' ? 'Полная Гарантия' : 'Full Warranty'}</span>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 w-full max-w-xs md:max-w-md"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0a192f] text-base md:text-xl font-bold rounded-2xl shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all transform hover:-translate-y-1 active:scale-95"
            >
              <span>{language === 'AZ' ? 'Pulsuz Qiymət Təklifi Al' : language === 'RU' ? 'Получить Предложение' : 'Get Free Quote'}</span>
            </a>
          </motion.div>

          {/* Feature Icons */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="grid grid-cols-3 gap-2 md:gap-8 w-full max-w-2xl px-2"
          >
              {/* Icon 1: Measurement */}
              <div className="flex flex-col items-center gap-2 text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/20 flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:border-[#fbbf24]/50 transition-colors relative">
                      <div className="absolute inset-0 bg-[#fbbf24]/5 rounded-full filter blur-md"></div>
                      <span className="text-3xl md:text-4xl filter drop-shadow-md">📏</span>
                  </div>
                  <p className="text-[10px] md:text-sm font-bold text-white leading-tight">
                      {language === 'AZ' ? 'Ölçü Pulsuz' : language === 'RU' ? 'Бесплатный Замер' : 'Free Measure'}<br/>
                      <span className="text-white/70">{language === 'AZ' ? 'və Peşəkar' : language === 'RU' ? 'и Профессионально' : 'and Professional'}</span>
                  </p>
              </div>

              {/* Icon 2: Design */}
              <div className="flex flex-col items-center gap-2 text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/20 flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:border-[#fbbf24]/50 transition-colors relative">
                      <div className="absolute inset-0 bg-[#fbbf24]/5 rounded-full filter blur-md"></div>
                      <span className="text-3xl md:text-4xl filter drop-shadow-md">✏️</span>
                  </div>
                  <p className="text-[10px] md:text-sm font-bold text-white leading-tight">
                      {language === 'AZ' ? 'Fərdi Dizayn' : language === 'RU' ? 'Индив. Дизайн' : 'Custom Design'}<br/>
                      <span className="text-white/70">{language === 'AZ' ? 'Xidməti' : language === 'RU' ? 'Услуги' : 'Service'}</span>
                  </p>
              </div>

               {/* Icon 3: Installation */}
               <div className="flex flex-col items-center gap-2 text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/20 flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:border-[#fbbf24]/50 transition-colors relative">
                      <div className="absolute inset-0 bg-[#fbbf24]/5 rounded-full filter blur-md"></div>
                      <span className="text-3xl md:text-4xl filter drop-shadow-md">🔩</span>
                  </div>
                  <p className="text-[10px] md:text-sm font-bold text-white leading-tight">
                      {language === 'AZ' ? 'Sürətli və' : language === 'RU' ? 'Быстрый и' : 'Fast and'}<br/>
                      <span className="text-white/70">{language === 'AZ' ? 'Təhlükəsiz Montaj' : language === 'RU' ? 'Безопасный Монтаж' : 'Safe Install'}</span>
                  </p>
              </div>
          </motion.div>

        </div>
      </section>

      {/* PRICING TABLES */}
      <PricingTables />

      {/* MODERN PROFILE PLANS */}
      <section className="bg-white py-12 md:py-20" id="plans">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a192f] uppercase tracking-wide">
              {language === 'AZ' ? 'Müasir Profil Planları' : language === 'RU' ? 'Планы Современных Профилей' : 'Modern Profile Plans'}
            </h2>
            <div className="h-1 w-20 bg-[#fbbf24] mx-auto rounded-full mt-3"></div>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              {language === 'AZ' 
                ? 'Eviniz üçün ən son texnologiya ilə hazırlanmış kölgəli və işıqlı profillər.' 
                : language === 'RU' 
                ? 'Теневые и световые профили, изготовленные по последним технологиям для вашего дома.' 
                : 'Shadow and light profiles prepared with the latest technology for your home.'}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
            {products.filter(p => p.id.startsWith('gp')).map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-[#f8fafc] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container with fixed aspect ratio */}
                <div 
                  className="relative aspect-[4/5] w-full overflow-hidden bg-white cursor-zoom-in"
                  onClick={() => setExpandedPlan(plan)}
                >
                  <Image
                    src={plan.image}
                    alt={plan.name[language]}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#0a192f]/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md">
                    {plan.id.toUpperCase()}
                  </div>
                  

                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 p-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0a192f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow text-center">
                  <h3 className="text-sm md:text-base font-bold text-[#0a192f] mb-2 leading-tight min-h-[40px] flex items-center justify-center">
                    {plan.name[language]}
                  </h3>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col items-center">
                    <div className="text-lg font-extrabold text-[#fbbf24]">
                      {plan.price.toFixed(2)} <span className="text-xs uppercase">AZN / m</span>
                    </div>
                    
                    <a
                      href={`https://wa.me/994506368731?text=${encodeURIComponent(
                        `Salam, ${plan.name[language]} planı ilə maraqlanıram.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-full py-2.5 bg-[#0a192f] hover:bg-[#112240] text-white text-[10px] md:text-xs font-bold rounded-xl transition-all uppercase tracking-wider shadow-md active:scale-95"
                    >
                      {language === 'AZ' ? 'Sifariş et' : language === 'RU' ? 'Заказать' : 'Order Now'}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {expandedPlan && (
          <div 
            className="fixed inset-0 z-[9999] bg-[#0a192f]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            onClick={() => setExpandedPlan(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-5xl w-full h-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-[#fbbf24] transition-colors p-2"
                onClick={() => setExpandedPlan(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={expandedPlan.image}
                  alt={expandedPlan.name[language]}
                  fill
                  className="object-contain p-4 md:p-8"
                />
                

              </div>

              <div className="mt-6 text-center text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{expandedPlan.name[language]}</h3>
                <p className="text-[#fbbf24] text-2xl font-black">{expandedPlan.price.toFixed(2)} AZN / m</p>
              </div>
            </motion.div>
          </div>
        )}
      </section>

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
            {services.map(service => (
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
                    <div className="mt-auto w-full">
                        <a 
                            href={`https://wa.me/994506368731?text=${encodeURIComponent(
                                `Salam, mən ${service.name[language]} xidməti ilə maraqlanıram.`
                            )}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0a192f] text-[11px] md:text-sm font-bold py-2.5 rounded-lg shadow-sm transition-all uppercase tracking-wide"
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
            {products.filter(p => p.isActive && p.price > 0 && !p.id.startsWith('gp')).map(product => (
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
