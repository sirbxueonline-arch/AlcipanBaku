'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useAdmin } from '@/context/AdminContext';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceDetailPage() {
    const { id } = useParams();
    const { services, language } = useAdmin();

    const service = services.find(s => s.id === id);

    if (!service) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Service Not Found</h2>
                <Link href="/" className="text-blue-600 hover:underline">
                    Return to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header */}
            <div className="relative h-[40vh] md:h-[50vh] bg-gray-900 overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.name[language]}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto">
                    <Link href="/" className="text-white/70 hover:text-white mb-4 text-sm font-medium w-fit flex items-center gap-1 transition-colors">
                        ← {language === 'AZ' ? 'Geri' : language === 'RU' ? 'Назад' : 'Back'}
                    </Link>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 max-w-4xl leading-tight">
                        {service.name[language]}
                    </h1>
                    <div className="h-1 w-24 bg-orange-500 rounded-full mb-8"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="prose prose-lg prose-blue max-w-none text-gray-600">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'AZ' ? 'Xidmət Haqqında' : language === 'RU' ? 'Об услуге' : 'Service Overview'}
                            </h3>
                            <p className="leading-relaxed text-lg">
                                {service.description[language]}
                            </p>
                            {/* Filler content to make it look like a real service page since we only have short descriptions usually */}
                            <p className="mt-4">
                                {language === 'AZ'
                                    ? 'Peşəkar komandamız sizə ən yüksək səviyyədə xidmət göstərməyə hazırdır. Biz işlərimizdə yalnız keyfiyyətli materiallardan istifadə edirik və müştəri məmnuniyyətini hər şeydən üstün tuturuq. Layihələrimizi vaxtında təhvil vermək bizim üçün prioritetdir.'
                                    : 'Our professional team is ready to provide you with the highest level of service. We use only quality materials in our work and prioritize customer satisfaction above all else. Delivering our projects on time is a priority for us.'}
                            </p>
                        </div>

                        {/* Features Grid (Mock) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">
                                            {language === 'AZ' ? 'Zəmanətli İş' : 'Guaranteed Work'}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            {language === 'AZ' ? 'Gördüyümüz işlərə tam zəmanət veririk.' : 'We provide full guarantee for our work.'}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b">
                                {language === 'AZ' ? 'Müraciət Forması' : 'Inquiry Form'}
                            </h3>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" defaultValue={`I am interested in ${service.name[language]}...`}></textarea>
                                </div>

                                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-md">
                                    {language === 'AZ' ? 'Göndər' : 'Submit Inquiry'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
