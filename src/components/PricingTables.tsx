import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { pricingPackages } from '@/data/pricingData';
import { motion } from 'framer-motion';

export const PricingTables = () => {
    const { language } = useAdmin();

    return (
        <section className="py-20 bg-white" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a192f] mb-4">
                        {language === 'AZ' ? 'Paketlərimiz' : language === 'RU' ? 'Наши Пакеты' : 'Our Packages'}
                    </h2>
                    <div className="w-24 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        {language === 'AZ' 
                            ? 'Büdcənizə uyğun ən yaxşı paketi seçin. Material, ustalıq və dizayn bir arada.' 
                            : language === 'RU' 
                            ? 'Выберите лучший пакет под ваш бюджет. Материал, мастера и дизайн в одном.' 
                            : 'Choose the best package for your budget. Material, craftsmanship, and design all in one.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingPackages.map((pkg, index) => (
                        <motion.div 
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`relative rounded-3xl overflow-hidden transition-all duration-300 flex flex-col ${
                                pkg.isPopular 
                                    ? 'shadow-[0_20px_60px_-15px_rgba(251,191,36,0.3)] border-2 border-[#fbbf24] scale-105 z-10' 
                                    : 'shadow-lg border border-gray-100 hover:shadow-xl'
                            }`}
                        >
                            {pkg.isPopular && (
                                <div className="absolute top-0 right-0 bg-[#fbbf24] text-[#0a192f] text-xs font-bold px-4 py-1 rounded-bl-xl z-20">
                                    {language === 'AZ' ? 'TÖVSİYƏ OLUNAN' : language === 'RU' ? 'РЕКОМЕНДУЕМЫЙ' : 'RECOMMENDED'}
                                </div>
                            )}

                            {/* Header */}
                            <div className={`p-8 text-center ${
                                pkg.id === 'material-only' ? 'bg-blue-50' : 
                                pkg.id === 'standard-ceiling' ? 'bg-[#0a192f] text-white' : 
                                'bg-purple-50'
                            }`}>
                                <h3 className={`text-xl font-bold mb-2 ${pkg.id === 'standard-ceiling' ? 'text-white' : 'text-[#0a192f]'}`}>
                                    {pkg.title[language]}
                                </h3>
                                <p className={`text-sm opacity-80 ${pkg.id === 'standard-ceiling' ? 'text-gray-300' : 'text-gray-500'}`}>
                                    {pkg.description[language]}
                                </p>
                            </div>

                            {/* Price Table */}
                            <div className="bg-white p-6 md:p-8 flex-grow">
                                <table className="w-full text-sm md:text-base mb-8">
                                    <thead>
                                        <tr className="border-b border-gray-100">
                                            <th className="text-left py-2 font-medium text-gray-500">{language === 'AZ' ? 'Sahə' : language === 'RU' ? 'Площадь' : 'Area'}</th>
                                            <th className="text-right py-2 font-bold text-[#0a192f]">{language === 'AZ' ? 'Qiymət' : language === 'RU' ? 'Цена' : 'Price'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pkg.prices.map((priceTier, i) => (
                                            <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                                                <td className="py-3 text-gray-600">{priceTier.area} m²</td>
                                                <td className="py-3 text-right font-bold text-[#0a192f]">{priceTier.price} {pkg.currency}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {pkg.features[language] && Array.isArray(pkg.features[language]) && pkg.features[language].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Footer / Button */}
                            <div className="p-6 md:p-8 pt-0 bg-white mt-auto">
                                <a 
                                    href={`https://wa.me/994506368731?text=${encodeURIComponent(
                                        `Salam, mən ${pkg.title[language]} paketi ilə maraqlanıram.`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full block text-center py-3 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                                        pkg.isPopular 
                                            ? 'bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#0a192f] shadow-lg' 
                                            : 'bg-white border-2 border-gray-100 text-gray-600 hover:border-[#fbbf24] hover:text-[#fbbf24]'
                                    }`}
                                >
                                    {language === 'AZ' ? 'SİFARİŞ ET' : language === 'RU' ? 'ЗАКАЗАТЬ' : 'ORDER NOW'}
                                </a>
                                {pkg.id !== 'material-only' && (
                                     <p className="text-[10px] text-center text-gray-400 mt-3">
                                        {language === 'AZ' ? '* Qiymətlər təxminidir' : language === 'RU' ? '* Цены приблизительные' : '* Prices are approximate'}
                                     </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                 <div className="text-center mt-12">
                    <p className="text-gray-500 italic text-sm">
                        {language === 'AZ' 
                            ? '⚠️ Qiymətlər obyektin vəziyyətinə və dizayn seçiminə görə dəyişə bilər.' 
                            : language === 'RU' 
                            ? '⚠️ Цены могут меняться в зависимости от состояния объекта и выбора дизайна.' 
                            : '⚠️ Prices may vary depending on the condition of the object and design choice.'}
                    </p>
                </div>
            </div>
        </section>
    );
};
