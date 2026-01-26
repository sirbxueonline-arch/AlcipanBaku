'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';

export default function PrivacyPage() {
    const { language } = useAdmin();

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-slate lg:prose-lg">
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 border-b pb-8">
                    {language === 'AZ' ? 'Məxfilik Siyasəti' : language === 'RU' ? 'Политика Конфиденциальности' : 'Privacy Policy'}
                </h1>

                {language === 'AZ' && (
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Məlumatların Toplanması</h2>
                            <p className="text-slate-600">
                                AlcipanBaku olaraq sizin məxfiliyinizə hörmət edirik. Bu saytdan istifadə edərkən könüllü olaraq təqdim etdiyiniz məlumatlar (ad, email, telefon nömrəsi) xidmət keyfiyyətini artırmaq məqsədilə istifadə olunur.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Məlumatların İstifadəsi</h2>
                            <p className="text-slate-600">
                                Toplanan məlumatlar yalnız aşağıdakı məqsədlər üçün istifadə edilir:
                            </p>
                            <ul className="list-disc pl-5 text-slate-600 mt-2 space-y-1">
                                <li>Sifarişlərin emalı və çatdırılması</li>
                                <li>Müştəri dəstəyinin təmin edilməsi</li>
                                <li>Yeni xidmətlər və kampaniyalar haqqında məlumatlandırma</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Təhlükəsizlik</h2>
                            <p className="text-slate-600">
                                Biz sizin fərdi məlumatlarınızın təhlükəsizliyini qorumaq üçün lazımi texniki və təşkilati tədbirləri görürük. Məlumatlarınız üçüncü tərəflərə ötürülmür (qanunvericiliklə nəzərdə tutulan hallar istisna olmaqla).
                            </p>
                        </section>
                    </div>
                )}

                {language === 'RU' && (
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Сбор информации</h2>
                            <p className="text-slate-600">
                                Как AlcipanBaku, мы уважаем вашу конфиденциальность. Информация, которую вы добровольно предоставляете при использовании этого сайта (имя, электронная почта, номер телефона), используется для улучшения качества обслуживания.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Использование информации</h2>
                            <p className="text-slate-600">
                                Собранная информация используется только для следующих целей:
                            </p>
                            <ul className="list-disc pl-5 text-slate-600 mt-2 space-y-1">
                                <li>Обработка и доставка заказов</li>
                                <li>Обеспечение поддержки клиентов</li>
                                <li>Информирование о новых услугах и кампаниях</li>
                            </ul>
                        </section>
                    </div>
                )}

                {language === 'EN' && (
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Information Collection</h2>
                            <p className="text-slate-600">
                                At AlcipanBaku, we respect your privacy. Information voluntarily provided by you while using this site (name, email, phone number) is used to improve service quality.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Use of Information</h2>
                            <p className="text-slate-600">
                                The collected information is used only for the following purposes:
                            </p>
                            <ul className="list-disc pl-5 text-slate-600 mt-2 space-y-1">
                                <li>Processing and delivery of orders</li>
                                <li>Providing customer support</li>
                                <li>Informing about new services and campaigns</li>
                            </ul>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}
