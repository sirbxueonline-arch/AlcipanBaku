'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
    const { language } = useAdmin();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-slate-900 text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-black mb-4">
                    {language === 'AZ' ? 'Bizimlə Əlaqə' : language === 'RU' ? 'Связаться с Нами' : 'Contact Us'}
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    {language === 'AZ'
                        ? 'Suallarınız var? Biz sizə kömək etməyə hazırıq.'
                        : language === 'RU'
                            ? 'У вас есть вопросы? Мы готовы вам помочь.'
                            : 'Have questions? We are ready to help you.'}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Phone className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {language === 'AZ' ? 'Zəng Edin' : language === 'RU' ? 'Позвоните Нам' : 'Call Us'}
                        </h3>
                        <p className="text-gray-500 mb-4">
                            {language === 'AZ' ? 'Həftəiçi: 09:00 - 18:00' : language === 'RU' ? 'Будни: 09:00 - 18:00' : 'Weekdays: 09:00 - 18:00'}
                        </p>
                        <a href="tel:+994506368731" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                            +994 50 636 87 31
                        </a>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                        <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {language === 'AZ' ? 'Email Yazın' : language === 'RU' ? 'Напишите Нам' : 'Email Us'}
                        </h3>
                        <p className="text-gray-500 mb-4">
                            {language === 'AZ' ? '24 saat ərzində cavablandırılır' : language === 'RU' ? 'Отвечаем в течение 24 часов' : 'Responded within 24 hours'}
                        </p>
                        <a href="mailto:info@alcipan.az" className="text-xl font-bold text-orange-600 hover:text-orange-700">
                            info@alcipan.az
                        </a>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {language === 'AZ' ? 'Ünvan' : language === 'RU' ? 'Адрес' : 'Address'}
                        </h3>
                        <p className="text-gray-500 mb-4">
                            {language === 'AZ' ? 'Ofis və Anbarımız' : language === 'RU' ? 'Наш Офис и Склад' : 'Our Office and Warehouse'}
                        </p>
                        <a href="#" className="text-lg font-bold text-green-600 hover:text-green-700">
                            Baku, Azerbaijan
                        </a>
                    </div>
                </div>

                {/* Map or Additional Content */}
                <div className="mt-16 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[400px] relative flex items-center justify-center bg-slate-100">
                    <div className="text-center p-8">
                        <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-500 font-medium">Map Integration Placeholder</p>
                        <p className="text-slate-400 text-sm">(Google Maps API or Embed will go here)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
