'use client';

import React from 'react';
import { Product, Package } from '@/types';
import { useAdmin } from '@/context/AdminContext';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product | Package;
}

export function ProductCard({ product }: ProductCardProps) {
  const { language } = useAdmin();
  const { addToCart } = useCart();
  const router = useRouter();

  if (!product.isActive) return null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.type === 'package') {
      router.push('/calculator');
      return;
    }
    addToCart(product);
  };

  const displayPrice = product.type === 'package' ? product.price * (product.step || 20) : product.price;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col bg-[#112240] border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden hover:border-[#fbbf24]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all duration-300 h-full"
    >
      <Link href={`/product/${product.id}`} className="absolute inset-0 z-10" aria-label={`View ${product.name[language]}`} />
      <div className="relative w-full h-32 sm:h-44 md:h-52 shrink-0 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name[language]}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {product.type === 'package' && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#fbbf24] text-[#0a192f] text-[9px] sm:text-[10px] font-bold uppercase rounded">
            Paket
          </span>
        )}
      </div>
      <div className="flex flex-col flex-grow p-2.5 sm:p-4 md:p-5">
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-1 line-clamp-2 group-hover:text-[#fbbf24] transition-colors">
          {product.name[language]}
        </h3>
        <p className="text-white/60 text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-4 flex-grow">
          {product.description[language]}
        </p>
        <div className="flex items-center justify-between gap-2 sm:gap-3 flex-wrap mt-auto pt-1.5 sm:pt-2 border-t border-white/10 relative z-20">
          {product.isPriceVisible ? (
            <span className="text-[#fbbf24] font-bold text-sm sm:text-lg">
              {displayPrice.toFixed(2)} {product.currency}
            </span>
          ) : (
            <span className="text-white/50 text-xs sm:text-sm italic">
              {language === 'AZ' ? 'Qiymət razılaşma ilə' : language === 'RU' ? 'Цена по запросу' : 'Price on request'}
            </span>
          )}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href={`/product/${product.id}`}
              className="inline-flex items-center gap-0.5 sm:gap-1 text-white/80 hover:text-[#fbbf24] text-xs sm:text-sm font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              {language === 'AZ' ? 'Ətraflı' : language === 'RU' ? 'Подробнее' : 'Details'}
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
            <button
              onClick={handleAddToCart}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a192f] font-bold rounded-md sm:rounded-lg text-xs sm:text-sm transition-colors shadow-lg z-20 relative"
            >
              <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {language === 'AZ' ? 'Səbətə at' : language === 'RU' ? 'В корзину' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
