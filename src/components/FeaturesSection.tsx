import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { advantagesData } from '@/data/pricingData';

interface FeaturesSectionProps {
    variant?: 'default' | 'dark';
}

const FeaturesSection = ({ variant = 'default' }: FeaturesSectionProps) => {
    const { language } = useAdmin();
    const isDark = variant === 'dark';

    const getIcon = (name: string) => {
        const iconClass = isDark ? 'w-10 h-10 text-[#fbbf24]' : 'w-10 h-10 text-[#fbbf24]';
        switch (name) {
            case 'experience':
                return (
                    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                );
            case 'quality':
                return (
                    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case 'time':
                return (
                    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case 'guarantee':
                return (
                    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                );
            case 'price':
                 return (
                    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className={isDark ? 'py-0' : 'py-20 bg-[var(--bg)] border-y border-white/5'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!isDark && (
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a192f] mb-4">
                            {language === 'AZ' ? 'Üstünlüklərimiz' : language === 'RU' ? 'Наши Преимущества' : 'Our Advantages'}
                        </h2>
                        <div className="w-24 h-1 bg-[#fbbf24] mx-auto rounded-full" />
                    </div>
                )}

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${isDark ? 'text-white' : 'text-[#0a192f]'}`}>
                    {advantagesData.map((feature) => (
                        <div
                            key={feature.id}
                            className={
                                isDark
                                    ? 'bg-white/5 backdrop-blur border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 hover:border-[#fbbf24]/30 transition-all duration-300'
                                    : 'bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center'
                            }
                        >
                            <div className={`mb-6 p-4 rounded-2xl ${isDark ? 'bg-[#fbbf24]/20' : 'bg-amber-100/50'}`}>
                                {getIcon(feature.iconName)}
                            </div>
                            <h3 className={`text-lg md:text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#0a192f]'}`}>
                                {feature.title[language]}
                            </h3>
                            <p className={isDark ? 'text-white/70 leading-relaxed' : 'text-gray-600 leading-relaxed'}>
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
