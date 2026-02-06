'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { CartButton } from './CartButton';

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
        { href: '/about', label: { AZ: 'Haqqımızda', RU: 'О Нас', EN: 'About' } },
        { href: '/contact', label: { AZ: 'Əlaqə', RU: 'Контакты', EN: 'Contact' } },
    ];

    const menuVariants: Variants = {
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

    const itemVariants: Variants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                scrolled ? 'bg-[#0a192f]/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent shadow-none py-4'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    
                    {/* Mobile: Left Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-white p-1"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 relative z-50">
                         <h1 className="text-lg sm:text-2xl font-extrabold text-white tracking-tighter leading-none uppercase italic">
                            //ALÇİPAN <span className="text-[#fbbf24] font-normal not-italic">BAKU</span>
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#fbbf24] ${pathname === link.href ? 'text-[#fbbf24]' : 'text-white'}`}
                            >
                                {link.label[language]}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side: Phone (Mobile) / Actions (Desktop) */}
                    <div className="flex items-center gap-4">
                        {/* Mobile Phone Number - Button Style as per screenshot */}
                        <a href="tel:+994506368731" className="md:hidden flex items-center justify-center bg-[#fbbf24] text-[#0a192f] font-bold text-xs px-4 py-2 rounded-full shadow-md whitespace-nowrap">
                            Call Now
                        </a>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-6">
                             <a href="tel:+994506368731" className="flex flex-col items-end text-right">
                                <span className="text-[10px] text-white/60 uppercase tracking-widest">Əlaqə Nömrəsi</span>
                                <span className="text-white font-bold text-lg leading-none hover:text-[#fbbf24] transition-colors">+994 50 636 87 31</span>
                            </a>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Rendered via Portal */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <MenuPortal>
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed inset-0 z-[9999] md:hidden pt-28 px-8 flex flex-col bg-white"
                            style={{ backgroundColor: '#ffffff' }} // Force solid white
                        >
                            {/* Close Button specific for Portal */}
                            <button
                                className="absolute top-6 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>

                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />

                            <nav className="flex flex-col space-y-8">
                                {navLinks.map((link) => (
                                    <motion.div key={link.href} variants={itemVariants}>
                                        <Link
                                            href={link.href}
                                            className={`block text-4xl font-bold tracking-tight transition-colors ${pathname === link.href ? 'text-blue-600' : 'text-gray-900 hover:text-gray-600'}`}
                                            onClick={() => setMobileMenuOpen(false)}
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
                                        <a href="mailto:alcipanbaki@gmail.com" className="flex items-center gap-4 text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors">
                                            <span className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-lg">✉️</span>
                                            alcipanbaki@gmail.com
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
                    </MenuPortal>
                )}
            </AnimatePresence>
        </header>
    );
}

// Simple Portal Component
function MenuPortal({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    return typeof document !== 'undefined'
        ? require('react-dom').createPortal(children, document.body)
        : null;
}
