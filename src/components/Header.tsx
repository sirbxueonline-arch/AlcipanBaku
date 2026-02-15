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
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-[#0a192f] shadow-md py-3 md:py-4`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    
                    {/* Left: Hamburger + Logo Group */}
                    <div className="flex items-center gap-3 md:gap-8">
                        {/* Mobile: Hamburger */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="text-white p-1 -ml-2"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <Menu size={28} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 md:gap-3">
                            <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full shadow-md bg-white shrink-0">
                                <Image
                                    src="/brand-logo.jpg"
                                    alt="Alcipan Baku"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg md:text-2xl font-bold text-white tracking-tight leading-none">
                                    ALCIPAN<span className="text-red-500">BAKU</span>
                                </span>
                                <span className="text-[10px] md:text-[10px] text-gray-400 font-bold tracking-widest uppercase truncate max-w-[100px] md:max-w-none">
                                    {language === 'AZ' ? '20 İL TƏCRÜBƏ' : language === 'RU' ? '20 ЛЕТ ОПЫТА' : '20 YEARS EXPERIENCE'}
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#fbbf24] ${pathname === link.href ? 'text-[#fbbf24]' : 'text-white/90'}`}
                            >
                                {link.label[language]}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side: Phone number */}
                    <div className="flex items-center gap-4">
                        {/* Mobile & Desktop Phone Number Button */}
                         <a 
                            href="tel:+994506368731" 
                            className="flex items-center gap-2 bg-[#3f6248] hover:bg-[#34523c] text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full transition-all border border-white/10 shadow-lg"
                        >
                            <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-xs">📞</span>
                            </span>
                            <span className="text-[12px] md:text-sm font-bold tracking-wide">
                                +994 50 636 87 31
                            </span>
                        </a>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <div className="w-px h-6 bg-white/20"></div>
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
                            className="fixed inset-0 z-[9999] md:hidden pt-24 px-6 flex flex-col bg-[#0a192f]"
                            style={{ backgroundColor: '#0a192f' }}
                        >
                            {/* Close Button specific for Portal */}
                            <button
                                className="absolute top-5 left-4 p-2 text-white/80 hover:text-white transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={28} strokeWidth={1.5} />
                            </button>

                             <div className="absolute top-5 right-6">
                                <LanguageSwitcher />
                            </div>

                            <nav className="flex flex-col space-y-6 mt-8">
                                {navLinks.map((link) => (
                                    <motion.div key={link.href} variants={itemVariants}>
                                        <Link
                                            href={link.href}
                                            className={`block text-3xl font-bold tracking-tight transition-colors ${pathname === link.href ? 'text-[#fbbf24]' : 'text-white hover:text-white/80'}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.label[language]}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 mt-4 space-y-6">
                                    <a href="tel:+994506368731" className="flex items-center gap-4 text-xl font-medium text-white mb-4">
                                        <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg">📞</span>
                                        +994 50 636 87 31
                                    </a>
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
