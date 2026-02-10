import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { pricingPackages } from '@/data/pricingData';
import { motion } from 'framer-motion';

export const PricingTables = () => {
    const { language } = useAdmin();

    // Helper to get the 20m2 price for display
    const getBasePrice = (pkg: any) => {
        const base = pkg.prices.find((p: any) => p.area === 20);
        return base ? base.price : 0;
    };

    return (
        <section className="py-12 bg-[#f8fafc]" id="pricing">
            <div className="container mx-auto px-4">
                
                {/* Section Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-4 mb-2">
                        <div className="h-px bg-gray-300 w-12 md:w-24"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0a192f] uppercase tracking-wide">
                            {language === 'AZ' ? 'Paket Təkliflərimiz' : language === 'RU' ? 'Пакетные Предложения' : 'Package Offers'}
                        </h2>
                        <div className="h-px bg-gray-300 w-12 md:w-24"></div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 font-medium tracking-widest uppercase">
                        {language === 'AZ' 
                            ? 'Tam Xidmət | Material | Montaj Daxil' 
                            : language === 'RU' 
                            ? 'Полный Сервис | Материал | Монтаж' 
                            : 'Full Service | Material | Installation Included'}
                    </p>
                </div>

                {/* Compact Grid - 2 Columns on Mobile/Desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
                    {pricingPackages.map((pkg, index) => (
                        <motion.div 
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col items-center pb-4 relative"
                        >
                            {/* Dark Blue Header Bar */}
                            <div className="bg-[#0a192f] w-[90%] mt-3 py-2 rounded-lg text-center shadow-md relative z-10">
                                <h3 className="text-white text-sm md:text-xl font-bold tracking-wide">
                                    {pkg.title[language]}
                                </h3>
                            </div>

                            <div className="px-2 md:px-6 w-full flex flex-col items-center pt-4">
                                {/* Price Display */}
                                <div className="text-center mb-3">
                                    <div className="flex items-baseline justify-center gap-1 text-[#0a192f]">
                                        <span className="text-2xl md:text-4xl font-extrabold tracking-tight">
                                            {getBasePrice(pkg)}
                                        </span>
                                        <span className="text-sm md:text-lg font-bold">{pkg.currency}</span>
                                    </div>
                                    <p className="text-[10px] md:text-xs text-gray-400 font-medium">
                                        {language === 'AZ' ? '20 m² üçün' : 'for 20 m²'}
                                    </p>
                                </div>

                                {/* Compact Features List */}
                                <ul className="space-y-1.5 md:space-y-3 w-full mb-4 px-1">
                                    {pkg.features[language].slice(0, 4).map((feature: string, i: number) => (
                                        <li key={i} className="flex items-center gap-2 text-[10px] md:text-sm text-gray-600 font-medium">
                                            <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="line-clamp-1">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Gold Button */}
                                <a 
                                    href={`https://wa.me/994506368731?text=${encodeURIComponent(
                                        `Salam, mən ${pkg.title[language]} paketi (20m2) ilə maraqlanıram.`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-2.5 md:py-3 bg-gradient-to-b from-[#fbbf24] to-[#d97706] text-[#0a192f] text-[11px] md:text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-transform active:scale-95 text-center uppercase tracking-wide"
                                >
                                    {language === 'AZ' ? 'SİFARİŞ ET' : language === 'RU' ? 'ЗАКАЗАТЬ' : 'ORDER'}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
