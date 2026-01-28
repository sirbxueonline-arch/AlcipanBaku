'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    const { language } = useAdmin();

    return (
        <footer className="bg-gray-900 text-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="relative w-10 h-10 overflow-hidden rounded-full shadow-md bg-white">
                                <Image
                                    src="/brand-logo.jpg"
                                    alt="Alcipan Baku"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white tracking-tight leading-none">
                                    ALCİPAN<span className="text-red-500">BAKU</span>
                                </span>
                                <span className="text-[9px] text-gray-400 font-bold tracking-widest uppercase">
                                    {language === 'AZ' ? '20 İL TƏCRÜBƏ' : language === 'RU' ? '20 ЛЕТ ОПЫТА' : '20 YEARS EXPERIENCE'}
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                            {language === 'AZ'
                                ? 'AlçipanBaku - inşaat dünyasının lideri! Peşəkar, innovativ və təcrübəli!'
                                : language === 'RU'
                                    ? 'AlcipanBaku - лидер строительного мира! Профессионально, инновационно и с опытом!'
                                    : 'AlcipanBaku - leader of the construction world! Professional, innovative and experienced!'}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-blue-400 border border-gray-700">KNAUF</span>
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-orange-400 border border-gray-700">RIGIPS</span>
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-green-400 border border-gray-700">GILAN</span>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
                            {language === 'AZ' ? 'Naviqasiya' : language === 'RU' ? 'Навигация' : 'Navigation'}
                        </h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                                {language === 'AZ' ? 'Haqqımızda' : language === 'RU' ? 'О Нас' : 'About Us'}
                            </Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">
                                {language === 'AZ' ? 'Məhsullar' : language === 'RU' ? 'Продукты' : 'Products'}
                            </Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                                {language === 'AZ' ? 'Xidmətlər' : language === 'RU' ? 'Услуги' : 'Services'}
                            </Link></li>
                            <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                                {language === 'AZ' ? 'Məxfilik Siyasəti' : language === 'RU' ? 'Политика Конфиденциальности' : 'Privacy Policy'}
                            </Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
                            {language === 'AZ' ? 'Əlaqə' : language === 'RU' ? 'Контакты' : 'Contact'}
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/contact" className="hover:text-white transition-colors">
                                {language === 'AZ' ? 'Bizimlə Əlaqə' : language === 'RU' ? 'Связаться с нами' : 'Contact Us'}
                            </Link></li>
                            <li className="flex items-center gap-2 pt-2">
                                <span className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-[10px]">📞</span>
                                +994 50 636 87 31
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-[10px]">📍</span>
                                Baku, Azerbaijan
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-[10px]">✉️</span>
                                alcipanbaki@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Alcipan Baku. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-[10px] text-gray-600">
                            <span>Payments secured by</span>
                            <span className="font-bold text-gray-400">EPoint</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {/* YouTube */}
                        <a href="https://www.youtube.com/@alcipanbaku" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" aria-label="YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        </a>

                        {/* Facebook */}
                        <a href="https://facebook.com/profile.php?id=100083844002234&ref=_ig_profile_ac" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>

                        {/* Instagram */}
                        <a href="https://instagram.com/alcipanbaku" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </div>
                </div>

                {/* GULUZADA Studio Signature */}
                <div className="guluzada-credit text-center py-8 text-sm opacity-80" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'currentColor' }}>
                    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap" rel="stylesheet" />
                    
                    <span style={{ fontWeight: 400, opacity: 0.7 }}>by</span>{' '}
                    <a 
                        href="https://guluzada.dev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            display: 'inline-block',
                            transition: 'opacity 0.3s ease'
                        }}
                        className="hover:opacity-60"
                    >
                        <span style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>GULUZADA</span> <span style={{ fontWeight: 300 }}>Studio</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
