'use client';

import React, { useEffect, useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Header } from '@/components/Header';
import { Cart } from '@/components/Cart';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { AnimatePresence, motion } from 'framer-motion';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { language } = useAdmin();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // This wrapper ensures Header and Footer have access to AdminContext
    // and handle client-side logic
    return (
        <>
            <Header />
            <Cart />
            <AnimatePresence mode="wait">
                {mounted ? (
                    <motion.div
                        key={language}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex-grow flex flex-col w-full"
                    >
                        {children}
                    </motion.div>
                ) : (
                    <div className="flex-grow flex flex-col w-full">{children}</div>
                )}
            </AnimatePresence>
            <WhatsAppWidget />
        </>
    );
}
