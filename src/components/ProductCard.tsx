'use client';

import React from 'react';
import { Product } from '@/types';
import { useAdmin } from '@/context/AdminContext';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { language } = useAdmin();

    if (!product.isActive) return null;

    return (
        <div className="group relative flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300 h-full cursor-pointer">
            {/* Image Container - Aspect Ratio 4:3 */}
            <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-4">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 h-[3.5rem]">
                    {product.name[language]}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {product.description[language]}
                </p>

                {/* Price and Action - Pushed to bottom */}
                <div className="mt-auto flex items-center justify-between">
                    <div>
                        {product.isPriceVisible ? (
                            <span className="text-xl font-bold text-blue-600">
                                {product.price.toFixed(2)} {product.currency}
                            </span>
                        ) : (
                            <span className="text-sm text-gray-400 italic">
                                {language === 'AZ' ? 'Qiymət razılaşma yolu ilə' : language === 'RU' ? 'Цена договорная' : 'Price on request'}
                            </span>
                        )}
                    </div>

                    <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors z-10 relative">
                        {language === 'AZ' ? 'Ətraflı' : language === 'RU' ? 'Подробнее' : 'View Details'}
                    </button>
                </div>
            </div>

            {/* Whole card clickable overlay (except button which has z-index) */}
            <a href={`/product/${product.id}`} className="absolute inset-0 z-0" aria-label={`View details for ${product.name[language]}`}></a>
        </div>
    );
}
