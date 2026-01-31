'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { ProductCard } from '@/components/ProductCard';
import { ServiceCard } from '@/components/ServiceCard';
import { WorkGallery } from '@/components/WorkGallery';
import FeaturesSection from '@/components/FeaturesSection';
import { FAQSection } from '@/components/FAQSection';
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
    
    // Updated phone number
    const phoneNumber = '994506368731'; 

    // Formatted message
    const text = `Salam, ölçü üçün müraciət edirəm!%0A%0A👤 *Ad:* ${name}%0A📞 *Telefon:* ${phone}%0A📝 *Məlumat:* ${msg}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      
      {/* HERO SECTION */}
      <section className="relative text-center py-20 md:py-32 px-4 min-h-[85vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image Effect */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/90 via-[#0a192f]/80 to-[#0a192f] z-10"></div>
             {/* We can use a high-quality background image here if available, otherwise solid color is fine */}
        </div>

        <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight tracking-tight"
          >
            {language === 'AZ' ? 'Azərbaycanda İlk Premium Alçipan Paket Xidməti!' : 
             language === 'RU' ? 'Первая в Азербайджане Премиум Пакетная Служба Алчипан!' : 
             'First Premium Drywall Package Service in Azerbaijan!'}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-[var(--muted)] mb-10 max-w-3xl font-light"
          >
            {language === 'AZ' ? 'Material + Montaj + Zəmanət bir paketdə – heç vaxt belə rahat olmamışdı. Pulsuz Ölçü və Dizayn daxil.' : 
             language === 'RU' ? 'Материал + Монтаж + Гарантия в одном пакете – никогда еще не было так удобно. Бесплатный замер и дизайн включены.' :
             'Material + Installation + Warranty in one package – never been this easy. Free Measurement and Design included.'}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--gold)] text-black text-lg font-bold rounded-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)]"
            >
              {language === 'AZ' ? 'Pulsuz Ölçü Al' : language === 'RU' ? 'Записаться на замер' : 'Get Free Measurement'}
            </a>
            <a 
              href="https://wa.me/994506368731" 
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white text-lg font-bold rounded-lg hover:bg-[#20bd5a] transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] gap-2"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              {language === 'AZ' ? 'WhatsApp ilə Yaz' : language === 'RU' ? 'WhatsApp' : 'WhatsApp'}
            </a>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM FEATURES BAR */}
      <section className="bg-[var(--card)] border-y border-white/5 py-8 md:py-10">
          <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 max-w-6xl mx-auto">
                  
                  {/* Item 1 */}
                  <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                      </div>
                      <div className="text-left">
                          <h3 className="font-bold text-white text-lg">{language === 'AZ' ? '20+ il təcrübə' : '20+ Years Exp'}</h3>
                      </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                      </div>
                      <div className="text-left">
                          <h3 className="font-bold text-white text-lg">{language === 'AZ' ? 'Pulsuz ölçü' : 'Free Measure'}</h3>
                          <p className="text-xs text-[var(--muted)]">{language === 'AZ' ? 'Mütəxəssis baxışı' : 'Expert Check'}</p>
                      </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                      </div>
                      <div className="text-left">
                          <h3 className="font-bold text-white text-lg">{language === 'AZ' ? 'Zəmanətli iş' : 'Warranty'}</h3>
                          <p className="text-xs text-[var(--muted)]">{language === 'AZ' ? 'Rəsmi zəmanət' : 'Official Warranty'}</p>
                      </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                      </div>
                      <div className="text-left">
                          <h3 className="font-bold text-white text-lg">{language === 'AZ' ? 'Tam paket xidmət' : 'Full Package'}</h3>
                          <p className="text-xs text-[var(--muted)]">{language === 'AZ' ? 'Azərbaycanda bir ilk!' : 'First in Azerbaijan!'}</p>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* PRODUCTS / PACKAGES */}
      <section className="container mx-auto px-4 py-16" id="products">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                {language === 'AZ' ? 'Paket Xidmətlərimiz' : language === 'RU' ? 'Наши Пакетные Услуги' : 'Our Package Services'}
             </h2>
             <div className="h-1 w-24 bg-[var(--gold)] mx-auto rounded-full"></div>
          </div>

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
      </section>

      {/* MATERIALS SECTION */}
      <section className="container mx-auto px-4 py-16 border-t border-white/5">
        <h2 className="text-center text-3xl font-bold mb-12 text-white">
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
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--card)] border border-white/10 rounded-full text-white font-semibold hover:bg-[var(--gold)] hover:text-black transition-all duration-300"
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
      </section>

       {/* SERVICES SECTION */}
       <section className="bg-[var(--card)] py-16" id="services">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                 {language === 'AZ' ? 'Xidmətlərimiz' : language === 'RU' ? 'Услуги' : 'Services'}
                 </h2>
                 <p className="text-[var(--muted)] text-lg">
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
      <section className="container mx-auto px-4 py-16 cursor-default">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-white">
                {language === 'AZ' ? 'Niyə AlcipanBaku?' : language === 'RU' ? 'Почему AlcipanBaku?' : 'Why AlcipanBaku?'}
                </h2>
                <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
                    {language === 'AZ' ? 'Paket sistem ilə işin bütün mərhələsi bir yerdə: ölçü → material → montaj → təhvil.' : 
                    language === 'RU' ? 'Весь процесс работы по пакетной системе в одном месте: замер → материал → монтаж → сдача.' :
                    'All stages of work with the package system in one place: measurement → material → installation → delivery.'}
                </p>
            </div>
            
            <FeaturesSection />
      </section>

      {/* FAQ SECTION */}
      <FAQSection />

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
