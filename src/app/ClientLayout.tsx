'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    // This wrapper ensures Header and Footer have access to AdminContext
    // and handle client-side logic
    return (
        <>
            <Header />
            {children}
            <WhatsAppWidget />
            <Footer />
        </>
    );
}
