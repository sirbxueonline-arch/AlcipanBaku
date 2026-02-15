import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PACKAGES = [
    { area: 20, price: 460 },
    { area: 50, price: 1100 },
    { area: 100, price: 2100 },
    { area: 150, price: 3150 },
    { area: 200, price: 4200 },
];

export const PricingTables = () => {
    const { language } = useAdmin();

    return (
        <section className="py-12 bg-[#f8fafc]" id="pricing">
            <div className="container mx-auto px-4">
                
                {/* Section Header */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-4 mb-2">
                         <div className="h-px bg-gray-300 w-12 md:w-24"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0a192f] uppercase tracking-wide">
                            {language === 'AZ' ? 'Paket Təkliflərimiz' : language === 'RU' ? 'Наши Пакетные Предложения' : 'Our Package Offers'}
                        </h2>
                         <div className="h-px bg-gray-300 w-12 md:w-24"></div>
                    </div>
                    <p className="text-sm text-gray-500 font-medium max-w-2xl mx-auto">
                        {language === 'AZ' 
                            ? 'Tam Xidmət | Material | Montaj Daxil' 
                            : language === 'RU' 
                            ? 'Полный Сервис | Материал | Монтаж Включен' 
                            : 'Full Service | Material | Installation Included'}
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {PACKAGES.map((pkg, index) => (
                        <motion.div 
                            key={pkg.area}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col"
                        >
                            {/* Card Header - Dark Blue */}
                            <div className="bg-[#0a192f] p-4 text-center py-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b]"></div>
                                <h3 className="text-xl font-bold text-white tracking-wide">
                                    {pkg.area} m² {language === 'AZ' ? 'Paket' : language === 'RU' ? 'Пакет' : 'Package'}
                                </h3>
                                <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                                    {language === 'AZ' ? 'TAM XİDMƏT' : language === 'RU' ? 'ПОЛНЫЙ СЕРВИС' : 'FULL SERVICE'}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col items-center flex-1">
                                
                                <div className="text-center mb-6">
                                     <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-3xl font-extrabold text-[#0a192f]">{pkg.price}</span>
                                        <span className="text-xl font-bold text-[#0a192f]">AZN</span>
                                     </div>
                                </div>
                                
                                {/* Features List */}
                                <ul className="w-full space-y-3 mb-8">
                                    {[
                                        { az: 'Keyfiyyətli Material', ru: 'Качественный Материал', en: 'Quality Material' },
                                        { az: 'Peşəkar Montaj', ru: 'Профессиональный Монтаж', en: 'Professional Installation' },
                                        { az: 'Pulsuz Ölçü', ru: 'Бесплатный Замер', en: 'Free Measurement' },
                                        { az: 'Zəmanətli İş', ru: 'Гарантия Работы', en: 'Guaranteed Work' }
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-[#fbbf24] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{language === 'AZ' ? feature.az : language === 'RU' ? feature.ru : feature.en}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Action Button */}
                                <div className="mt-auto w-full">
                                    <Link 
                                        href={`/calculator?package=simple&area=${pkg.area}`}
                                        className="w-full block bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0a192f] py-3 text-center text-sm font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95"
                                    >
                                        {language === 'AZ' ? 'SİFARİŞ ET' : language === 'RU' ? 'ЗАКАЗАТЬ' : 'ORDER'}
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Calculation Link */}
                <div className="text-center mt-12">
                     <Link href="/calculator" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-4 transition-colors">
                        {language === 'AZ' ? 'Başqa ölçü hesablamaq istəyirsiniz? Kalkulyatora keçin' : language === 'RU' ? 'Хотите рассчитать другой размер? Перейдите в калькулятор' : 'Want to calculate another size? Go to Calculator'}
                        <ArrowRight size={16} />
                     </Link>
                </div>
            </div>
        </section>
    );
};
