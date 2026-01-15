'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';

export function WorkGallery() {
    const { workItems, language } = useAdmin();
    const activeWorks = workItems.filter(w => w.isActive);
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);

    const getEmbedUrl = (url: string) => {
        if (!url) return '';
        // Simple Youtube ID extraction
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        if (match && match[2].length === 11) {
            return `https://www.youtube.com/embed/${match[2]}?autoplay=1`;
        }
        return url; // Return original if not matched (e.g. direct mp4)
    };

    if (activeWorks.length === 0) return null;

    return (
        <section className="mb-16 scroll-mt-24" id="portfolio">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">
                    {language === 'AZ' ? 'Bizim İşlər' : language === 'RU' ? 'Наши Работы' : 'Our Work'}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeWorks.map((work) => (
                    <div key={work.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                        <div className="relative aspect-video bg-gray-100 overflow-hidden">
                            {playingVideo === work.id && work.videoUrl ? (
                                <iframe
                                    className="w-full h-full"
                                    src={getEmbedUrl(work.videoUrl)}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <>
                                    <Image
                                        src={work.imageUrl}
                                        alt={work.title[language]}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        unoptimized // Allow external images
                                    />
                                    {/* Video Play Overlay */}
                                    {work.videoUrl && (
                                        <div
                                            className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100 transition"
                                            onClick={() => setPlayingVideo(work.id)}
                                        >
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                <div className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center pl-1 shadow-lg">
                                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{work.title[language]}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {work.description[language]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
