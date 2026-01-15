'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: '/', label: { AZ: 'Ana Səhifə', RU: 'Главная', EN: 'Home' } },
        { href: '/products', label: { AZ: 'Məhsullar', RU: 'Продукты', EN: 'Products' } },
        { href: '/services', label: { AZ: 'Xidmətlər', RU: 'Услуги', EN: 'Services' } },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    };

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
                            className="md:hidden p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-all active:scale-95"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-white/98 backdrop-blur-xl z-40 md:hidden pt-28 px-8 flex flex-col"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />

                        <nav className="flex flex-col space-y-8">
                            {navLinks.map((link) => (
                                <motion.div key={link.href} variants={itemVariants}>
                                    <Link
                                        href={link.href}
                                        className={`block text-4xl font-bold tracking-tight transition-colors ${pathname === link.href ? 'text-blue-600' : 'text-gray-900 hover:text-gray-600'}`}
                                    >
                                        {link.label[language]}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div variants={itemVariants} className="pt-12 border-t border-gray-100 mt-4 space-y-6">
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                        {language === 'AZ' ? 'Əlaqə' : language === 'RU' ? 'Контакты' : 'Contact'}
                                    </p>
                                    <a href="tel:+994506368731" className="flex items-center gap-4 text-xl font-medium text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                                        <span className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-lg">📞</span>
                                        +994 50 636 87 31
                                    </a>
                                    <a href="mailto:info@alcipan.az" className="flex items-center gap-4 text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors">
                                        <span className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-lg">✉️</span>
                                        info@alcipan.az
                                    </a>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                        Social
                                    </p>
                                    <div className="flex gap-4">
                                        <a href="https://instagram.com/alcipanbaku" target="_blank" className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-orange-500 text-white rounded-2xl flex items-center justify-center shadow-lg transform active:scale-95 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
