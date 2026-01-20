'use client';

import React from 'react';
import { Service } from '@/types';
import { useAdmin } from '@/context/AdminContext';
import Image from 'next/image';

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    const { language } = useAdmin();

    if (!service.isActive) return null;

    return (
        <div className="group relative flex flex-col bg-[var(--card)] border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-500/30 h-full cursor-pointer">
            {/* Image Container - Aspect Ratio 16:9 */}
            <div className="relative w-full aspect-[16/9] bg-[var(--card)] overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.name[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-5">
                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                    {service.name[language]}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--muted)] mb-6 line-clamp-3 leading-relaxed">
                    {service.description[language]}
                </p>

                {/* Action Button - Pushed to bottom */}
                <div className="mt-auto">
                    <button className="w-full py-3 bg-[var(--primary)] text-white font-semibold rounded-md hover:opacity-90 transition-colors shadow-sm z-10 relative">
                        {language === 'AZ' ? 'Xidmət Sifarişi' : language === 'RU' ? 'Заказать услугу' : 'Request Service'}
                    </button>
                </div>
            </div>

            {/* Whole card clickable overlay (except button which has z-index) */}
            <a href={`/service/${service.id}`} className="absolute inset-0 z-0" aria-label={`Request service ${service.name[language]}`}></a>
        </div>
    );
}
