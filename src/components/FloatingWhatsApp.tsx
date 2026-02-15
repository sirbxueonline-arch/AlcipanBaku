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
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-105 active:scale-95 group w-[90%] max-w-sm justify-center md:w-auto md:left-auto md:right-8 md:translate-x-0"
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
            <span className="font-bold text-base md:text-lg">
                {language === 'AZ' ? 'WhatsApp ilə Yaz' : language === 'RU' ? 'Написать в WhatsApp' : 'Chat on WhatsApp'}
            </span>
        </a>
    );
}
