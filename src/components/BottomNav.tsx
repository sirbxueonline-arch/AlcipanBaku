'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Mail, Globe, User } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';

export function BottomNav() {
    const pathname = usePathname();
    const { language } = useAdmin();

    const navItems = [
        { href: '/', icon: Home, label: { AZ: 'Ana Səhifə', RU: 'Главная', EN: 'Home' } },
        { href: '/contact', icon: Mail, label: { AZ: 'Əlaqə', RU: 'Контакты', EN: 'Contact' } },
        { href: '/services', icon: Globe, label: { AZ: 'Xidmətlər', RU: 'Услуги', EN: 'Services' } }, // Using Globe for Services as per screenshot implication or generic
        { href: '/about', icon: User, label: { AZ: 'Haqqımızda', RU: 'О Нас', EN: 'About' } },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[90] bg-[#0a192f] border-t border-white/10 pb-safe md:hidden">
            <div className="flex justify-around items-center h-16">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
                                isActive ? 'text-[#fbbf24]' : 'text-white/50 hover:text-white/80'
                            }`}
                        >
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 1.5} />
                            {/* Optional: Add labels if needed, but screenshot shows icons mostly */}
                            {/* <span className="text-[10px] mt-1">{item.label[language]}</span> */}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
