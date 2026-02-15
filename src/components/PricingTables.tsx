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
                            {language === 'AZ' ? 'PAKET HƏLLƏR' : language === 'RU' ? 'ПАКЕТНЫЕ РЕШЕНИЯ' : 'PACKAGE SOLUTIONS'}
                        </h2>
                         <div className="h-px bg-gray-300 w-12 md:w-24"></div>
                    </div>
                    <p className="text-sm text-gray-500 font-medium max-w-2xl mx-auto">
                        {language === 'AZ' 
                            ? 'Hazır kvadratura paketləri seçin və birbaşa sifariş edin. Fərqli ölçülər üçün kalkulyatordan istifadə edə bilərsiniz.' 
                            : language === 'RU' 
                            ? 'Выберите готовые пакеты по квадратуре и закажите прямо сейчас. Для других размеров используйте калькулятор.' 
                            : 'Choose ready-made square meter packages and order directly. You can use the calculator for other sizes.'}
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                    {PACKAGES.map((pkg, index) => (
                        <motion.div 
                            key={pkg.area}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-[#0a192f] rounded-xl overflow-hidden shadow-lg border border-[#1e2a4a] flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Card Content */}
                            <div className="p-5 flex flex-col items-center flex-1">
                                <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">
                                    {language === 'AZ' ? 'STANDART TAVAN' : language === 'RU' ? 'СТАНДАРТ ПОТОЛОК' : 'STANDARD CEILING'}
                                </span>
                                
                                <div className="text-center mb-4">
                                    <span className="text-4xl font-extrabold text-white tracking-tight">{pkg.area}</span>
                                    <span className="text-lg font-medium text-gray-400 ml-1">m²</span>
                                </div>
                                
                                <div className="w-full h-px bg-gray-700/50 mb-4"></div>
                                
                                <div className="text-center">
                                     <span className="text-3xl font-bold text-[#fbbf24]">{pkg.price} ₼</span>
                                     <div className="text-[10px] text-gray-500 mt-1">
                                        {language === 'AZ' ? 'Tam paket' : language === 'RU' ? 'Полный пакет' : 'Full package'}
                                     </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <Link 
                                href={`/calculator?package=simple&area=${pkg.area}`}
                                className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a192f] py-3 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors relative z-10"
                            >
                                <span>{language === 'AZ' ? 'SİFARİŞ ET' : language === 'RU' ? 'ЗАКАЗАТЬ' : 'ORDER'}</span>
                                <ArrowRight size={14} strokeWidth={3} />
                            </Link>
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
