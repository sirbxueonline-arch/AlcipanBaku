'use client';

import React from 'react';
import { Service } from '@/types';
import { useAdmin } from '@/context/AdminContext';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    const { language } = useAdmin();
    const { addToCart } = useCart();

    if (!service.isActive) return null;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(service);
    };

    return (
        <div className="group relative flex flex-col bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.name[language]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                {/* Title Overlay on Mobile/Desktop for punchiness */}
                <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-white text-lg md:text-xl font-bold leading-tight drop-shadow-md">
                        {service.name[language]}
                    </h3>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-4 md:p-5">
                {/* Description */}
                {/* <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {service.description[language]}
                </p> */}

                {/* Price and Action */}
                <div className="mt-auto pt-2">
                    <div className="flex items-center justify-between gap-3">
                        {/* Price Tag if needed or simple button */}
                        {/* Keeping it simple as per screenshot 'əlaqə saxla' style often implies just action, but we allow simple add to cart */}

                        <button
                            onClick={handleAddToCart}
                            className="w-full py-3 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0a192f] text-sm md:text-base font-bold rounded-lg shadow-md hover:shadow-lg transition-all uppercase tracking-wide z-10 relative"
                        >
                            {language === 'AZ' ? 'əlaqə saxla' : language === 'RU' ? 'Связаться' : 'Contact'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Whole card clickable overlay (except button which has z-index) */}
            <a href={`/service/${service.id}`} className="absolute inset-0 z-0" aria-label={`Request service ${service.name[language]}`}></a>
        </div>
    );
}
