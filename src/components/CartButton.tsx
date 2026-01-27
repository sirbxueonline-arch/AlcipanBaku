'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

export function CartButton() {
    const { toggleCart, cartCount } = useCart();
    // This state ensures hydration matches
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-all relative">
                <ShoppingBag size={24} />
            </button>
        );
    }

    return (
        <button
            onClick={toggleCart}
            className="p-1 sm:p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-all relative"
            aria-label="Open cart"
        >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 bg-blue-600 text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white transform translate-x-1/4 -translate-y-1/4">
                    {cartCount}
                </span>
            )}
        </button>
    );
}
