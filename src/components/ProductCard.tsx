'use client';

import React from 'react';
import { Product, Package } from '@/types';
import { useAdmin } from '@/context/AdminContext';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product | Package;
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

  const displayPrice = product.type === 'package' ? product.price * (product.step || 20) : product.price;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col bg-[#112240] border border-white/10 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#fbbf24]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all duration-300 h-full"
    >
      <Link href={`/product/${product.id}`} className="absolute inset-0 z-10" aria-label={`View ${product.name[language]}`} />
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name[language]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {product.type === 'package' && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#fbbf24] text-[#0a192f] text-[10px] font-bold uppercase rounded-md">
            Paket
          </span>
        )}
      </div>
      <div className="flex flex-col flex-grow p-4 md:p-5">
        <h3 className="text-base md:text-lg font-bold text-white mb-1 line-clamp-2 group-hover:text-[#fbbf24] transition-colors">
          {product.name[language]}
        </h3>
        <p className="text-white/60 text-sm line-clamp-2 mb-4 flex-grow">
          {product.description[language]}
        </p>
        <div className="flex items-center justify-between gap-3 flex-wrap mt-auto pt-2 border-t border-white/10 relative z-20">
          {product.isPriceVisible ? (
            <span className="text-[#fbbf24] font-bold text-lg">
              {displayPrice.toFixed(2)} {product.currency}
            </span>
          ) : (
            <span className="text-white/50 text-sm italic">
              {language === 'AZ' ? 'Qiymət razılaşma ilə' : language === 'RU' ? 'Цена по запросу' : 'Price on request'}
            </span>
          )}
          <div className="flex items-center gap-2">
            <Link
              href={`/product/${product.id}`}
              className="inline-flex items-center gap-1 text-white/80 hover:text-[#fbbf24] text-sm font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              {language === 'AZ' ? 'Ətraflı' : language === 'RU' ? 'Подробнее' : 'Details'}
              <ChevronRight className="w-4 h-4" />
            </Link>
            <button
              onClick={handleAddToCart}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a192f] font-bold rounded-lg text-sm transition-colors shadow-lg z-20 relative"
            >
              <ShoppingCart className="w-4 h-4" />
              {language === 'AZ' ? 'Səbətə at' : language === 'RU' ? 'В корзину' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
