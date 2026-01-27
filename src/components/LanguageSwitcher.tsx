'use client';

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Language } from '@/types';

export function LanguageSwitcher() {
    const { language, setLanguage } = useAdmin();

    const languages: Language[] = ['AZ', 'RU', 'EN'];

    return (
        <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-100 p-0.5 sm:p-1 rounded-md">
            {languages.map((lang) => (
                <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 sm:px-3 text-xs font-semibold rounded ${language === lang
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-900'
                        } transition-all`}
                >
                    {lang}
                </button>
            ))}
        </div>
    );
}
