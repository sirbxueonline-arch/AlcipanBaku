'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { ProductCard } from '@/components/ProductCard';
import { ServiceCard } from '@/components/ServiceCard';
import { WorkGallery } from '@/components/WorkGallery';
import FeaturesSection from '@/components/FeaturesSection';
import { motion } from 'framer-motion';

export default function Home() {
  const { packages, products, services, language } = useAdmin();
  const [showAllProducts, setShowAllProducts] = React.useState(false);

  const sendWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const msg = (form.elements.namedItem('msg') as HTMLTextAreaElement).value;
    
    // Replace with actual phone number if provided, currently using placeholder
    const phoneNumber = '994500000000'; 
    const text = `Ad: ${name}%0ATelefon: ${phone}%0AMəlumat: ${msg}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      
      {/* HERO SECTION */}
      <section className="text-center py-12 md:py-20 px-4 min-h-[60vh] flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            {language === 'AZ' ? 'Premium' : language === 'RU' ? 'Премиум' : 'Premium'} <span className="text-[var(--primary)]">{language === 'AZ' ? 'Paket' : language === 'RU' ? 'Пакет' : 'Package'}</span> {language === 'AZ' ? 'Alçıpan Həlləri' : language === 'RU' ? 'Решения из Гипсокартона' : 'Drywall Solutions'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
             {language === 'AZ' 
               ? 'Paket alçıpan xidmətləri: usta + material bir yerdə. 2006-cı ildən bəri Bakıda etibarlı xidmət.'
               : language === 'RU'
               ? 'Пакетные услуги по гипсокартону: мастер + материал в одном месте. Надежный сервис в Баку с 2006 года.'
               : 'Package drywall services: master + material in one place. Reliable service in Baku since 2006.'}
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            href="#contact" 
            className="inline-block px-8 py-4 bg-[var(--primary)] text-white text-lg font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            {language === 'AZ' ? 'Pulsuz ölçü üçün yaz' : language === 'RU' ? 'Записаться на замер' : 'Request Free Measurement'}
          </motion.a>
        </div>
      </section>

      {/* PRODUCTS / PACKAGES */}
      <section className="container mx-auto px-4 py-12 md:py-16" id="products">
        <h2 className="text-center text-3xl font-bold mb-12 text-white">
          {language === 'AZ' ? 'Paket Xidmətlərimiz' : language === 'RU' ? 'Наши Пакетные Услуги' : 'Our Package Services'}
        </h2>
        
        
        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {packages.filter(p => p.isActive).map(pkg => (
              <ProductCard key={pkg.id} product={pkg} />
            ))}
        </div>

        {packages.filter(p => p.isActive).length === 0 && (
            <div className="text-center py-16 bg-[var(--card)] rounded-xl border border-dashed border-white/10">
              <p className="text-[var(--muted)] text-lg">No active packages to display.</p>
            </div>
        )}

        {/* MATERIALS SECTION */}
        <h2 className="text-center text-3xl font-bold mb-12 text-white mt-16 pt-16 border-t border-white/10">
          {language === 'AZ' ? 'Tikinti Materialları' : language === 'RU' ? 'Строительные Материалы' : 'Construction Materials'}
        </h2>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.slice(0, showAllProducts ? undefined : 3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>

        {/* Load More Button */}
        {products.length > 3 && (
            <div className="text-center">
                <button 
                    onClick={() => setShowAllProducts(!showAllProducts)}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--card)] border border-white/10 rounded-full text-white font-semibold hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300"
                >
                    {showAllProducts 
                        ? (language === 'AZ' ? 'Daha az göstər' : language === 'RU' ? 'Показать меньше' : 'Show Less')
                        : (language === 'AZ' ? 'Daha çox göstər' : language === 'RU' ? 'Показать больше' : 'Load More')
                    }
                    <svg className={`w-4 h-4 transition-transform duration-300 ${showAllProducts ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        )}

        {products.filter(p => p.isActive).length === 0 && (
            <div className="text-center py-16 bg-[var(--card)] rounded-xl border border-dashed border-white/10">
              <p className="text-[var(--muted)] text-lg">No active materials to display.</p>
            </div>
        )}
        {/* Pricing Note */}
        <div className="mt-12 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="text-yellow-500 mt-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/></svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-yellow-500 mb-2">
                {language === 'AZ' ? 'Vacib Qeyd' : language === 'RU' ? 'Важное Примечание' : 'Important Note'}
              </h4>
              <p className="text-[var(--muted)] text-base leading-relaxed">
                {language === 'AZ' ? 'Qiymətlər obyektin ölçüsünə, dizayna və material seçiminə görə dəyişə bilər. Dəqiq qiymət üçün obyektə baxış keçirilir.' : 
                 language === 'RU' ? 'Цены могут меняться в зависимости от размера объекта, дизайна и выбора материала. Точная цена определяется после осмотра объекта.' : 
                 'Prices may vary depending on object size, design, and material choice. Exact price is determined after on-site inspection.'}
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* SERVICES */}
       <section className="container mx-auto px-4 py-12 md:py-16 bg-[var(--bg)]" id="services">
        <h2 className="text-center text-3xl font-bold mb-12 text-white">
          {language === 'AZ' ? 'Xidmətlər' : language === 'RU' ? 'Услуги' : 'Services'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
        </div>
         {services.filter(s => s.isActive).length === 0 && (
            <div className="text-center py-16 bg-[var(--card)] rounded-xl border border-dashed border-white/10">
              <p className="text-[var(--muted)] text-lg">No active services to display.</p>
            </div>
          )}
      </section>


      {/* WHY US / STATS */}
      <section className="container mx-auto px-4 py-16 cursor-default">
        <div className="bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] border border-white/10 rounded-2xl p-6 md:p-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              {language === 'AZ' ? 'Niyə AlcipanBaku?' : language === 'RU' ? 'Почему AlcipanBaku?' : 'Why AlcipanBaku?'}
            </h2>
             <p className="text-[var(--muted)] max-w-2xl mx-auto mb-12 text-lg">
                {language === 'AZ' ? 'Paket sistem ilə işin bütün mərhələsi bir yerdə: ölçü → material → montaj → təhvil.' : 
                 language === 'RU' ? 'Весь процесс работы по пакетной системе в одном месте: замер → материал → монтаж → сдача.' :
                 'All stages of work with the package system in one place: measurement → material → installation → delivery.'}
            </p>
            
            <FeaturesSection />
        </div>
      </section>

      {/* WORK GALLERY */}
      <WorkGallery />

      {/* CONTACT FORM */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center" id="contact">
        <h2 className="text-3xl font-bold mb-4 text-white">
          {language === 'AZ' ? 'Ölçü üçün müraciət' : language === 'RU' ? 'Заявка на замер' : 'Request Measurement'}
        </h2>
        <p className="text-[var(--muted)] max-w-xl mx-auto mb-10">
          {language === 'AZ' ? 'Qiymət obyektə baxıldıqdan sonra dəqiqləşdirilir.' : language === 'RU' ? 'Цена уточняется после осмотра объекта.' : 'Price is finalized after site inspection.'}
        </p>

        <form onSubmit={sendWhatsApp} className="max-w-xl mx-auto space-y-4">
          <input 
            name="name" 
            placeholder={language === 'AZ' ? 'Adınız' : language === 'RU' ? 'Ваше Имя' : 'Your Name'} 
            required 
            className="w-full p-4 bg-[var(--card)] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
          />
          <input 
            name="phone" 
            placeholder={language === 'AZ' ? 'Telefon' : language === 'RU' ? 'Телефон' : 'Phone'} 
            required 
            className="w-full p-4 bg-[var(--card)] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
          />
          <textarea 
            name="msg" 
            placeholder={language === 'AZ' ? 'Qısa məlumat (mənzil / obyekt)' : language === 'RU' ? 'Краткая информация (квартира / объект)' : 'Short info (apartment / object)'} 
            rows={4}
            className="w-full p-4 bg-[var(--card)] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[var(--primary)] transition-colors resize-none mb-4"
          />
          <button className="w-full py-4 bg-[var(--primary)] text-white font-bold rounded-lg hover:opacity-90 transition-all text-lg">
             {language === 'AZ' ? 'Göndər' : language === 'RU' ? 'Отправить' : 'Send'}
          </button>
        </form>
      </section>
      
    </div>
  );
}
