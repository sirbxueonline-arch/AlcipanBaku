'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { ProductCard } from '@/components/ProductCard';
import { ServiceCard } from '@/components/ServiceCard';
import { WorkGallery } from '@/components/WorkGallery';
import FeaturesSection from '@/components/FeaturesSection';
import { FAQSection } from '@/components/FAQSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const { packages, products, services, language } = useAdmin();
  const [showAllProducts, setShowAllProducts] = React.useState(false);

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
      <section className="relative py-20 md:py-32 px-4 min-h-[85vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image Effect */}
        <div className="absolute inset-0 z-0">
             <Image 
                src="/picture3.jpeg"
                alt="Alcipan Baku Hero"
                fill
                className="object-cover"
                priority
             />
             <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 flex flex-col items-start text-left max-w-7xl">
          <div className="mb-4">
             <span className="text-white/80 font-medium tracking-widest uppercase text-sm md:text-base border-b border-white/20 pb-1">
                // ALÇİPAN BAKU
             </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white leading-[1.1] tracking-tight max-w-4xl"
          >
            {language === 'AZ' ? 'Premium Alçipan Xidmətləri' : 
             language === 'RU' ? 'Премиум Услуги Алчипан' : 
             'Premium Drywall Services'}
          </motion.h1>

           <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold text-white/90 mb-8"
           >
              {language === 'AZ' ? 'Material + Usta + Zəmanət' : 'Material + Master + Warranty'}
           </motion.h2>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-white mb-10 font-medium"
          >
            {language === 'AZ' ? 'Pulsuz Ölçü + Dizayn + Sürətli Montaj!' : 
             language === 'RU' ? 'Бесплатный замер + Дизайн + Быстрый монтаж!' :
             'Free Measurement + Design + Fast Installation!'}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#0a192f] text-lg font-bold rounded-lg hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all uppercase tracking-wide"
            >
              {language === 'AZ' ? 'PULSUZ QİYMƏT AL' : language === 'RU' ? 'ПОЛУЧИТЬ ЦЕНУ' : 'GET FREE QUOTE'}
            </a>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM FEATURES BAR (Hidden for now to match image cleanliness or can keep if desired, usually clean is better per reference image which doesn't show it but we can keep it subtle) - Removing to match strict reference */}

      {/* PRODUCTS / PACKAGES */}
      <section className="container mx-auto px-4 py-16 bg-[#F8FAFC]" id="products">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#0a192f]">
                {language === 'AZ' ? 'Paket Təkliflərimiz' : language === 'RU' ? 'Наши Пакетные Предложения' : 'Our Package Offers'}
             </h2>
             <p className="text-gray-600 font-medium">
                 {language === 'AZ' ? 'Tam Xidmət | Material + Montaj Daxil' : 'Full Service | Material + Installation Included'}
             </p>
          </div>

        {/* Custom Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
            {packages.filter(p => p.isActive).slice(0, 3).map(pkg => (
              <div key={pkg.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                  {/* Image Top */}
                  <div className="relative h-48 w-full">
                      <Image 
                        src={pkg.image} 
                        alt={pkg.name[language]} 
                        fill 
                        className="object-cover"
                      />
                  </div>
                  
                  {/* Blue Strip Title */}
                  <div className="bg-[#0a192f] py-4 text-center">
                      <h3 className="text-white text-xl font-bold">
                          {pkg.name[language]}
                      </h3>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col items-center flex-grow">
                      {/* Price */}
                      <div className="text-center mb-6 border-b border-gray-200 w-full pb-6">
                          <span className="text-4xl font-extrabold text-[#0a192f]">
                              {pkg.price.toLocaleString()} {pkg.currency}
                          </span>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-3 w-full mb-8 text-left pl-4">
                          {pkg.description[language].split('\n').map((line, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                  {line}
                              </li>
                          ))}
                      </ul>

                      {/* Button */}
                      <div className="mt-auto w-full">
                          <button onClick={() => window.location.href='#contact'} className="w-full py-4 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#0a192f] font-bold rounded-xl shadow-md hover:shadow-lg transition-all uppercase tracking-wider">
                              {language === 'AZ' ? 'SİFARİŞ ET' : language === 'RU' ? 'ЗАКАЗАТЬ' : 'ORDER NOW'}
                          </button>
                      </div>
                  </div>
              </div>
            ))}
        </div>

        {/* View All Button if needed, or remove if strictly 3 */}
      </section>



       {/* SERVICES SECTION */}
       <section className="bg-white py-16" id="services">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0a192f]">
                 {language === 'AZ' ? 'Xidmətlərimiz' : language === 'RU' ? 'Услуги' : 'Services'}
                 </h2>
                 <p className="text-gray-500 text-lg">
                    {language === 'AZ' ? 'İlk dəfə tam paketlə Azərbaycanda' : 'First time full package in Azerbaijan'}
                 </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    {language === 'AZ' ? 'Paket sistem ilə işin bütün mərhələsi bir yerdə: ölçü → material → montaj → təhvil.' : 
                    language === 'RU' ? 'Весь proses работы по пакетной системе в одном месте: замер → материал → монтаж → сдача.' :
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
      
    </div>
  );
}
