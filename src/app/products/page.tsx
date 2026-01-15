'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { ProductCard } from '@/components/ProductCard';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function ProductsPage() {
    const { products, language } = useAdmin();
    const activeProducts = products.filter(p => p.isActive);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative bg-slate-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600/1e293b/1e293b')] opacity-50 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

                <div className="relative container mx-auto px-4 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            {language === 'AZ' ? 'Yüksək Keyfiyyətli Məhsullar' :
                                language === 'RU' ? 'Продукция Высокого Качества' :
                                    'Premium Quality Products'}
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                            {language === 'AZ' ? 'Layihələriniz üçün ən yaxşı gipskarton və aksesuarları aşkar edin. Peşəkarlar üçün hazırlanmış dayanıqlı həllər.' :
                                language === 'RU' ? 'Откройте для себя лучший гипсокартон и аксессуары для ваших проектов. Надежные решения, созданные для профессионалов.' :
                                    'Discover the best plasterboard and accessories for your projects. Durable solutions crafted for professionals.'}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto px-4 py-16 max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {activeProducts.map(product => (
                        <motion.div key={product.id} variants={itemVariants} className="h-full">
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>

                {activeProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">
                            {language === 'AZ' ? 'Hal-hazırda məhsul tapılmadı.' :
                                language === 'RU' ? 'Продукты не найдены.' :
                                    'No products found at the moment.'}
                        </p>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="bg-white border-t border-gray-100 py-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full mix-blend-screen opacity-20 filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                {language === 'AZ' ? 'Layihənizdə Kömək Lazımdır?' :
                                    language === 'RU' ? 'Нужна помощь с проектом?' :
                                        'Need Help With Your Project?'}
                            </h2>
                            <p className="text-slate-300 mb-8">
                                {language === 'AZ' ? 'Bizim peşəkar komandamız sizə düzgün seçim etməkdə və təmir işlərində kömək etməyə hazırdır.' :
                                    language === 'RU' ? 'Наша профессиональная команда готова помочь вам сделать правильный выбор и помочь с ремонтом.' :
                                        'Our professional team is here to help you make the right choice and assist with renovation works.'}
                            </p>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors"
                            >
                                {language === 'AZ' ? 'Xidmətlərimizə Baxın' :
                                    language === 'RU' ? 'Посмотреть Услуги' :
                                        'View Our Services'}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
