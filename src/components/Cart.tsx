'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { useAdmin } from '@/context/AdminContext';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';


export function Cart() {
    const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const { language } = useAdmin();
    const router = useRouter();

    const handleCheckout = async () => {
        try {
            // Create order and get redirect URL
            const response = await fetch('/api/payment/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cartItems,
                    language,
                    amount: cartTotal
                }),
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('No redirect URL found', data);
                alert('Payment initialization failed.');
            }
        } catch (error) {
            console.error('Checkout error:', error);
            alert('An error occurred during checkout.');
        }
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black z-[100]"
                    />

                    {/* Cart Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-[101] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5 text-slate-800" />
                                <h2 className="text-lg font-bold text-slate-900">
                                    {language === 'AZ' ? 'Səbətiniz' : language === 'RU' ? 'Корзина' : 'Your Cart'}
                                </h2>
                                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
                                    {cartItems.length}
                                </span>
                            </div>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                                        <ShoppingBag className="w-8 h-8 text-gray-300" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium">
                                            {language === 'AZ' ? 'Səbətiniz boşdur' : language === 'RU' ? 'Корзина пуста' : 'Your cart is empty'}
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1">
                                            {language === 'AZ' ? 'Məhsul əlavə etmək üçün ana səhifəyə qayıdın' : language === 'RU' ? 'Вернитесь на главную страницу, чтобы добавить товар' : 'Return to home to add products'}
                                        </p>
                                    </div>
                                    <button
                                        onClick={toggleCart}
                                        className="px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                                    >
                                        {language === 'AZ' ? 'Alış-verişə Davam Et' : language === 'RU' ? 'Продолжить покупки' : 'Continue Shopping'}
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4 p-3 border border-gray-100 rounded-xl hover:border-blue-100 transition-colors bg-white">
                                        {/* Image */}
                                        <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name[language]}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-medium text-slate-900 line-clamp-1">{item.name[language]}</h3>
                                                <p className="text-sm text-blue-600 font-semibold mt-1">
                                                    {(item.price * item.quantity).toFixed(2)} {item.currency}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between mt-2">
                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                                    <button
                                                        onClick={() => {
                                                            const step = item.type === 'package' ? (item.step || 20) : 1;
                                                            updateQuantity(item.id, item.quantity - step);
                                                        }}
                                                        className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-blue-600 disabled:opacity-50"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-sm font-bold min-w-[3rem] text-center text-gray-900">
                                                        {item.quantity}{item.type === 'package' ? ' m²' : ''}
                                                    </span>
                                                    <button
                                                        onClick={() => {
                                                            const step = item.type === 'package' ? (item.step || 20) : 1;
                                                            updateQuantity(item.id, item.quantity + step);
                                                        }}
                                                        className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-blue-600"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>

                                                {/* Remove Button */}
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                            
                            
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between items-center text-slate-600">
                                        <span>{language === 'AZ' ? 'Ara cəm' : language === 'RU' ? 'Подытог' : 'Subtotal'}</span>
                                        <span>{cartTotal.toFixed(2)} AZN</span>
                                    </div>
                                    <div className="flex justify-between items-center text-lg font-bold text-slate-900">
                                        <span>{language === 'AZ' ? 'Cəmi' : language === 'RU' ? 'Итого' : 'Total'}</span>
                                        <span>{cartTotal.toFixed(2)} AZN</span>
                                    </div>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-[0.98]"
                                >
                                    {language === 'AZ' ? 'Sifarişi Rəsmiləşdir' : language === 'RU' ? 'Оформить заказ' : 'Checkout'}
                                </button>

                                <div className="flex items-center justify-center mt-4">
                                    <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg px-3 py-2 shadow-sm text-xs text-slate-500">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                            <span>Secured by <strong>EPoint</strong></span>
                                        </div>
                                        <div className="w-px h-3 bg-gray-200"></div>
                                        <div className="flex gap-2 opacity-80 grayscale hover:grayscale-0 transition-all">
                                            <Image src="/visa.png" alt="Visa" width={28} height={18} className="object-contain" />
                                            <Image src="/mastercard.png" alt="Mastercard" width={28} height={18} className="object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
