'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { usePathname } from 'next/navigation';

export function Header() {
    const { language } = useAdmin();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: { AZ: 'Ana Səhifə', RU: 'Главная', EN: 'Home' } },
        { href: '/products', label: { AZ: 'Məhsullar', RU: 'Продукты', EN: 'Products' } },
        { href: '/services', label: { AZ: 'Xidmətlər', RU: 'Услуги', EN: 'Services' } },
    ];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-white py-5 border-b border-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="relative w-12 h-12 overflow-hidden rounded-full shadow-md group-hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/brand-logo.jpg"
                                alt="Alcipan Baku Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-gray-900 tracking-tight leading-none group-hover:text-blue-900 transition-colors">
                                ALCİPAN<span className="text-red-600">BAKU</span>
                            </h1>
                            <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                                {language === 'AZ' ? 'PREMİUM USTA SEÇİMİ' : language === 'RU' ? 'ПРЕМИУМ ВЫБОР' : 'PREMIUM CHOICE'}
                            </span>
                        </div>
                    </Link>

                    {/* Navigation - Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-blue-600 ${pathname === link.href ? 'text-blue-600' : 'text-gray-600'}`}
                            >
                                {link.label[language]}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}
