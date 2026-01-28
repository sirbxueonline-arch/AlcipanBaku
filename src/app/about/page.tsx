'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { BadgeCheck, Users, Clock, Award } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    const { language } = useAdmin();

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://placehold.co/1920x600/1e293b/ffffff?text=About+Us+Hero"
                        alt="About Alcipan Baku"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        {language === 'AZ' ? 'Haqqımızda' : language === 'RU' ? 'О Нас' : 'About Us'}
                    </h1>
                    <p className="text-xl text-gray-300">
                        {language === 'AZ'
                            ? '20 illik peşəkar təcrübə və keyfiyyət zəmanəti'
                            : language === 'RU'
                                ? '20 лет профессионального опыта и гарантия качества'
                                : '20 years of professional experience and quality guarantee'}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                            {language === 'AZ' ? 'Biz Kimik?' : language === 'RU' ? 'Кто Мы?' : 'Who We Are?'}
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-lg text-center">
                            <p>
                                {language === 'AZ'
                                    ? 'AlcipanBaku, Azərbaycanda tikinti və təmir sahəsində ixtisaslaşmış qabaqcıl şirkətlərdən biridir. Bizim əsas missiyamız müştərilərimizə yüksək keyfiyyətli alçipan, asma tavan və boya işlərini təqdim etməkdir.'
                                    : language === 'RU'
                                        ? 'AlcipanBaku - одна из ведущих компаний Азербайджана, специализирующаяся на строительстве и ремонте. Наша главная миссия - предоставлять клиентам высококачественные услуги по гипсокартону, подвесным потолкам и покраске.'
                                        : 'AlcipanBaku is one of the leading companies in Azerbaijan specializing in construction and renovation. Our main mission is to provide high-quality plasterboard, suspended ceiling, and painting services to our customers.'}
                            </p>
                            <p>
                                {language === 'AZ'
                                    ? 'Biz peşəkar komandamızla birlikdə 20 ildən artıqdır ki, bu sahədə fəaliyyət göstəririrk. Bu illər ərzində yüzlərlə uğurlu layihəyə imza atmışıq və müştərilərimizin etibarını qazanmışıq.'
                                    : language === 'RU'
                                        ? 'Мы работаем в этой сфере более 20 лет с нашей профессиональной командой. За эти годы мы успешно завершили сотни проектов и завоевали доверие наших клиентов.'
                                        : 'We have been operating in this field for over 20 years with our professional team. During these years, we have successfully completed hundreds of projects and earned the trust of our customers.'}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center text-center">
                                <Users className="w-8 h-8 text-blue-600 mb-3" />
                                <h3 className="font-bold text-slate-900">
                                    {language === 'AZ' ? 'Peşəkar Komanda' : language === 'RU' ? 'Профессиональная Команда' : 'Professional Team'}
                                </h3>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center text-center">
                                <Clock className="w-8 h-8 text-orange-600 mb-3" />
                                <h3 className="font-bold text-slate-900">
                                    {language === 'AZ' ? 'Vaxtında Təhvil' : language === 'RU' ? 'Сдача в Срок' : 'On-Time Delivery'}
                                </h3>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center text-center">
                                <Award className="w-8 h-8 text-purple-600 mb-3" />
                                <h3 className="font-bold text-slate-900">
                                    {language === 'AZ' ? 'Zəmanətli İş' : language === 'RU' ? 'Гарантированная Работа' : 'Guaranteed Work'}
                                </h3>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center text-center">
                                <BadgeCheck className="w-8 h-8 text-green-600 mb-3" />
                                <h3 className="font-bold text-slate-900">
                                    {language === 'AZ' ? 'Rəsmi Partnyor' : language === 'RU' ? 'Официальный Партнер' : 'Official Partner'}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
