'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { ServiceCard } from '@/components/ServiceCard';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    const { services, language } = useAdmin();
    const activeServices = services.filter(s => s.isActive);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const benefits = [
        {
            title: { AZ: 'Peşəkar Komanda', RU: 'Профессиональная Команда', EN: 'Professional Team' },
            desc: { AZ: 'İllərin təcrübəsinə malik sertifikatlı ustalar.', RU: 'Сертифицированные мастера с многолетним опытом.', EN: 'Certified masters with years of experience.' }
        },
        {
            title: { AZ: 'Zəmanətli İş', RU: 'Гарантированная Работа', EN: 'Guaranteed Work' },
            desc: { AZ: 'Gördüyümüz hər bir işə tam zəmanət veririk.', RU: 'Мы даем полную гарантию на все наши работы.', EN: 'We provide a full guarantee for all our work.' }
        },
        {
            title: { AZ: 'Sürətli Təhvil', RU: 'Быстрая Сдача', EN: 'Fast Delivery' },
            desc: { AZ: 'Layihələrin vaxtında və keyfiyyətlə təhvil verilməsi.', RU: 'Сдача проектов в срок и с высоким качеством.', EN: 'Delivery of projects on time and with high quality.' }
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://placehold.co/1920x800/1e293b/0f172a')] opacity-60 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-transparent"></div>

                <div className="relative container mx-auto px-4 max-w-7xl flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            {language === 'AZ' ? 'Xəyallarınızdakı Məkanı Yaradırıq' :
                                language === 'RU' ? 'Создаем Пространство Вашей Мечты' :
                                    'Creating The Space of Your Dreams'}
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
                            {language === 'AZ' ? 'Təmirdən tikintiyə qədər hər mərhələdə yüksək keyfiyyət və peşəkarlıq.' :
                                language === 'RU' ? 'Высокое качество и профессионализм на каждом этапе от ремонта до строительства.' :
                                    'High quality and professionalism at every stage from renovation to construction.'}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Why Choose Us (Mini) */}
            <div className="bg-white py-12 border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-1">{benefit.title[language]}</h3>
                                    <p className="text-sm text-slate-500">{benefit.desc[language]}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-20 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">
                            {language === 'AZ' ? 'Xidmətlərimiz' : language === 'RU' ? 'Наши Услуги' : 'Our Services'}
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {activeServices.map(service => (
                        <motion.div key={service.id} variants={itemVariants} className="h-full">
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>

                {activeServices.length === 0 && (
                    <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                        <p className="text-gray-500 text-lg">
                            {language === 'AZ' ? 'Hal-hazırda xidmət tapılmadı.' :
                                language === 'RU' ? 'Услуги не найдены.' :
                                    'No services available at the moment.'}
                        </p>
                    </div>
                )}
            </div>

            {/* Contact Strip */}
            <div className="bg-blue-600 text-white py-12">
                <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            {language === 'AZ' ? 'Sualınız var?' : language === 'RU' ? 'Есть вопросы?' : 'Have Questions?'}
                        </h2>
                        <p className="text-blue-100">
                            {language === 'AZ' ? 'Bizimlə əlaqə saxlayın və ödənişsiz konsultasiya əldə edin.' :
                                language === 'RU' ? 'Свяжитесь с нами и получите бесплатную консультацию.' :
                                    'Contact us and get a free consultation.'}
                        </p>
                    </div>
                    <Link
                        href="/#contact"
                        className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        {language === 'AZ' ? 'Əlaqə Saxlayın' : language === 'RU' ? 'Связаться' : 'Contact Us'}
                    </Link>
                </div>
            </div>
        </div>
    );
}
