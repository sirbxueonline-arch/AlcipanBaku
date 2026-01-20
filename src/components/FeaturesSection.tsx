import React from 'react';
import { useAdmin } from '@/context/AdminContext';

const FeaturesSection = () => {
    const { language } = useAdmin();

    const features = [
        {
            id: 1,
            title: {
                AZ: '20 İllik Təcrübə',
                RU: '20 Лет Опыта',
                EN: '20 Years Experience'
            },
            desc: {
                AZ: 'İnşaat sektorunda peşəkar və etibarlı xidmət.',
                RU: 'Профессиональное и надежное обслуживание в строительном секторе.',
                EN: 'Professional and reliable service in the construction sector.'
            },
            icon: (
                <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            id: 2,
            title: {
                AZ: 'Keyfiyyət Zəmanəti',
                RU: 'Гарантия Качества',
                EN: 'Quality Guarantee'
            },
            desc: {
                AZ: 'KNAUF, RIGIPS kimi dünya brendləri ilə işləyirik.',
                RU: 'Мы работаем с такими мировыми брендами, как KNAUF, RIGIPS.',
                EN: 'We work with world brands like KNAUF, RIGIPS.'
            },
            icon: (
                <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 3,
            title: {
                AZ: 'Sərfəli Qiymət',
                RU: 'Доступная Цена',
                EN: 'Affordable Price'
            },
            desc: {
                AZ: 'Bazarın ən rəqabətli qiymətlərini təklif edirik.',
                RU: 'Мы предлагаем самые конкурентные цены на рынке.',
                EN: 'We offer the most competitive prices in the market.'
            },
            icon: (
                <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="py-20 bg-[var(--bg)] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mb-4">
                        {language === 'AZ' ? 'Niyə Bizi Seçməlisiniz?' : language === 'RU' ? 'Почему Выбирают Нас?' : 'Why Choose Us?'}
                    </h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="bg-[var(--card)] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-white/10 flex flex-col items-center text-center">
                            <div className="mb-6 p-4 bg-blue-500/10 rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{feature.title[language]}</h3>
                            <p className="text-[var(--muted)] leading-relaxed">
                                {feature.desc[language]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
