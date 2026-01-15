'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Header() {
    const { language } = useAdmin();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { href: '/', label: { AZ: 'Ana Səhifə', RU: 'Главная', EN: 'Home' } },
        { href: '/products', label: { AZ: 'Məhsullar', RU: 'Продукты', EN: 'Products' } },
        { href: '/services', label: { AZ: 'Xidmətlər', RU: 'Услуги', EN: 'Services' } },
    ];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-5 border-b border-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-3 relative z-50">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full shadow-md group-hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/brand-logo.jpg"
                                alt="Alcipan Baku Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight leading-none group-hover:text-blue-900 transition-colors">
                                ALCİPAN<span className="text-red-600">BAKU</span>
                            </h1>
                            <span className="text-[8px] sm:text-[10px] text-gray-500 font-bold tracking-widest uppercase">
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

                    {/* Actions & Mobile Menu Button */}
                    <div className="flex items-center gap-4 relative z-50">
                        <LanguageSwitcher />

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden pt-24 px-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-2xl font-semibold transition-colors ${pathname === link.href ? 'text-blue-600' : 'text-gray-800'}`}
                        >
                            {link.label[language]}
                        </Link>
                    ))}

                    <div className="pt-8 border-t border-gray-100 mt-auto">
                        <p className="text-sm text-gray-500 mb-4">
                            {language === 'AZ' ? 'Əlaqə' : language === 'RU' ? 'Контакты' : 'Contact'}
                        </p>
                        <a href="tel:+994506368731" className="flex items-center gap-3 text-lg font-medium text-gray-900 mb-2">
                            📞 +994 50 636 87 31
                        </a>
                        <a href="mailto:info@alcipan.az" className="flex items-center gap-3 text-lg font-medium text-gray-900">
                            ✉️ info@alcipan.az
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
