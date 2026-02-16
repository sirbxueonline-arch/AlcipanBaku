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
        <div className="group relative flex flex-col bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 h-full">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.name[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-3 md:p-5 text-center bg-white z-10">
                {/* Title */}
                {/* Title Removed */}

                {/* Price and Action */}
                <div className="mt-auto pt-1 w-full">
                    <button
                        onClick={handleAddToCart}
                        className="w-full py-2 md:py-3 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0a192f] text-[10px] md:text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all uppercase tracking-wide"
                    >
                        {language === 'AZ' ? 'əlaqə saxla' : language === 'RU' ? 'Связаться' : 'Contact'}
                    </button>
                </div>
            </div>

            {/* Whole card clickable overlay (except button which has z-index) */}
            <a href={`/service/${service.id}`} className="absolute inset-0 z-0" aria-label={`Request service ${service.name[language]}`}></a>
        </div>
    );
}
