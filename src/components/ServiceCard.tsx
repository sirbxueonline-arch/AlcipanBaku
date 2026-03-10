'use client';

import React from 'react';
import { Service } from '@/types';
import { useAdmin } from '@/context/AdminContext';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart } from 'lucide-react';

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
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col bg-[#112240] rounded-xl md:rounded-2xl overflow-hidden border border-white/10 hover:border-[#fbbf24]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 h-full"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name[language]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-80 pointer-events-none" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-lg line-clamp-2">
            {service.name[language]}
          </h3>
        </div>
      </div>

      {/* Content – name only, no price/description */}
      <div className="flex flex-col flex-grow p-4 md:p-5">
        <div className="flex items-center justify-end gap-2 flex-wrap mt-auto">
            <Link
              href={`/service/${service.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
            >
              {language === 'AZ' ? 'Ətraflı' : language === 'RU' ? 'Подробнее' : 'Details'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={handleAddToCart}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a192f] font-bold rounded-lg text-sm transition-colors shadow-lg hover:shadow-[#fbbf24]/30"
            >
              <ShoppingCart className="w-4 h-4" />
              {language === 'AZ' ? 'Səbətə at' : language === 'RU' ? 'В корзину' : 'Add to cart'}
            </button>
        </div>
      </div>
    </motion.div>
  );
}
