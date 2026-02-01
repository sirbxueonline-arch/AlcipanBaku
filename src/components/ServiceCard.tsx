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
                <p className="text-sm text-[var(--muted)] mb-6 line-clamp-3 leading-relaxed whitespace-pre-line">
                    {service.description[language]}
                </p>

                {/* Price and Action - Pushed to bottom */}
                <div className="mt-auto flex items-center justify-between">
                    <div>
                        {service.isPriceVisible ? (
                            <span className="text-lg font-bold text-[var(--primary)]">
                                {service.price} {service.currency}
                                <span className="text-sm text-gray-500 font-normal"> / m²</span>
                            </span>
                        ) : (
                            <span className="text-sm text-[var(--muted)] italic">
                                {language === 'AZ' ? 'Qiymət razılaşma yolu ilə' : language === 'RU' ? 'Цена договорная' : 'Price on request'}
                            </span>
                        )}
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm z-10 relative"
                    >
                        {language === 'AZ' ? 'Səbətə at' : language === 'RU' ? 'В корзину' : 'Add to Cart'}
                    </button>
                </div>
            </div>

            {/* Whole card clickable overlay (except button which has z-index) */}
            <a href={`/service/${service.id}`} className="absolute inset-0 z-0" aria-label={`Request service ${service.name[language]}`}></a>
        </div>
    );
}
