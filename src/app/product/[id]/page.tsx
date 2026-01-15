'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAdmin } from '@/context/AdminContext';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const { products, language } = useAdmin();

    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
                <Link href="/" className="text-blue-600 hover:underline">
                    Return to Catalog
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <nav className="flex mb-8 text-sm text-gray-500">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/#products" className="hover:text-blue-600 transition-colors">Products</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium line-clamp-1">{product.name[language]}</span>
                </nav>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Image Section */}
                        <div className="p-8 lg:p-12 bg-gray-50 flex items-center justify-center relative">
                            <div className="relative w-full aspect-square max-w-lg shadow-2xl rounded-lg overflow-hidden ring-1 ring-gray-900/5">
                                <Image
                                    src={product.image}
                                    alt={product.name[language]}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6 w-fit">
                                {language === 'AZ' ? 'Stokda var' : language === 'RU' ? 'В наличии' : 'In Stock'}
                            </span>

                            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                                {product.name[language]}
                            </h1>

                            <div className="mb-8">
                                {product.isPriceVisible ? (
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-blue-600">
                                            {product.price.toFixed(2)}
                                        </span>
                                        <span className="text-xl font-medium text-gray-500">{product.currency}</span>
                                    </div>
                                ) : (
                                    <span className="text-xl text-gray-400 italic font-medium">
                                        {language === 'AZ' ? 'Qiymət razılaşma yolu ilə' : language === 'RU' ? 'Цена договорная' : 'Price on request'}
                                    </span>
                                )}
                            </div>

                            <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed">
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">
                                    {language === 'AZ' ? 'Məhsul Haqqında' : language === 'RU' ? 'О продукте' : 'About Product'}
                                </h3>
                                <p>{product.description[language]}</p>
                                <p className="mt-4 text-xs text-gray-400">
                                    Product ID: {product.id}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95">
                                    {language === 'AZ' ? 'İndi Sifariş Edin' : language === 'RU' ? 'Заказать сейчас' : 'Order Now'}
                                </button>
                                <a
                                    href={`https://wa.me/994506368731?text=Salam, ${product.name[language]} haqqında məlumat almaq istəyirəm.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-8 py-4 bg-white text-gray-700 font-bold border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm hover:border-gray-300 flex items-center justify-center"
                                >
                                    {language === 'AZ' ? 'Whatsapp ilə Əlaqə' : language === 'RU' ? 'Связаться по Whatsapp' : 'Contact via Whatsapp'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar items (stub for now, just visual) */}
                <div className="mt-16">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                        {language === 'AZ' ? 'Digər Məhsullar' : language === 'RU' ? 'Другие продукты' : 'Other Products'}
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {products.filter(p => p.id !== product.id).slice(0, 4).map(p => (
                            <Link key={p.id} href={`/product/${p.id}`} className="group block bg-white rounded-lg p-3 border border-gray-100 hover:shadow-md transition-all">
                                <div className="relative aspect-video rounded overflow-hidden mb-3">
                                    <Image src={p.image} alt={p.name[language]} fill className="object-cover" />
                                </div>
                                <h3 className="font-semibold text-sm text-gray-900 truncate">{p.name[language]}</h3>
                                <span className="text-xs text-blue-600 font-bold">{p.isPriceVisible ? `${p.price} ${p.currency}` : '---'}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
