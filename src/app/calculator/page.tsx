import React, { Suspense } from 'react';
import { PriceCalculator } from '@/components/PriceCalculator';

export default function CalculatorPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12 pt-24">
                <div className="max-w-3xl mx-auto">
                    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
                        <PriceCalculator />
                    </Suspense>
                </div>
            </main>
        </div>
    );
}
