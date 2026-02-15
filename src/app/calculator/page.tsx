import React, { Suspense } from 'react';
import { PriceCalculator } from '@/components/PriceCalculator';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CalculatorPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12 mt-20">
                <div className="max-w-3xl mx-auto">
                    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
                        <PriceCalculator />
                    </Suspense>
                </div>
            </main>
            <Footer />
        </div>
    );
}
