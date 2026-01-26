'use client';

import React from 'react';
import { Product } from '@/types';
import { useAdmin } from '@/context/AdminContext';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { language } = useAdmin();
    const { addToCart } = useCart();

    if (!product.isActive) return null;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <div className="group relative flex flex-col bg-[var(--card)] border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-500/30 h-full cursor-pointer">
            {/* Image Container - Aspect Ratio 4:3 */}
            <div className="relative w-full aspect-[4/3] bg-[var(--card)] overflow-hidden">
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
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">
                    {product.name[language]}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--muted)] mb-4 whitespace-pre-line leading-relaxed">
                    {product.description[language]}
                </p>

                {/* Price and Action - Pushed to bottom */}
                <div className="mt-auto flex items-center justify-between">
                    <div>
                        {product.isPriceVisible ? (
                            <span className="text-xl font-bold text-[var(--primary)]">
                                {product.price.toFixed(2)} {product.currency}
                            </span>
                        ) : (
                            <span className="text-sm text-[var(--muted)] italic">
                                {language === 'AZ' ? 'Qiymət razılaşma yolu ilə' : language === 'RU' ? 'Цена договорная' : 'Price on request'}
                            </span>
                        )}
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors z-10 relative shadow-md shadow-blue-100"
                    >
                        <ShoppingCart size={16} />
                        {language === 'AZ' ? 'Səbətə at' : language === 'RU' ? 'В корзину' : 'Add to Cart'}
                    </button>
                </div>
            </div>

            {/* Whole card clickable overlay (except button which has z-index) */}
            <a href={`/product/${product.id}`} className="absolute inset-0 z-0" aria-label={`View details for ${product.name[language]}`}></a>
        </div>
    );
}
