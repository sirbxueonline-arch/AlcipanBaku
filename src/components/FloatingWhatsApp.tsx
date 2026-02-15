'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';

export function FloatingWhatsApp() {
    const { language } = useAdmin();

    const phoneNumber = '994506368731';
    const message = language === 'AZ' ? 'Salam, qiymət təklifi almaq istəyirəm.' : 
                   language === 'RU' ? 'Здравствуйте, хочу получить ценовое предложение.' : 
                   'Hello, I would like to get a price quote.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[80] flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-3.5 rounded-full shadow-lg shadow-green-900/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all group w-[85%] max-w-sm justify-center md:hidden border border-white/20"
            aria-label="Chat on WhatsApp"
        >
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 fill-white stroke-none"
            >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span className="font-bold text-base tracking-wide">
                {language === 'AZ' ? 'İndi WhatsApp ilə Əlaqə Saxla' : language === 'RU' ? 'Написать в WhatsApp' : 'Chat on WhatsApp'}
            </span>
        </a>
    );
}
