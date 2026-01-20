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
        <section className="container mx-auto px-4 py-16 bg-[var(--bg)]" id="portfolio">
            <h2 className="text-center text-3xl font-bold mb-12 text-white">
                {language === 'AZ' ? 'Bizim İşlər' : language === 'RU' ? 'Наши Работы' : 'Our Work'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeWorks.map((work) => (
                    <div key={work.id} className="group relative flex flex-col bg-[var(--card)] border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-500/30 h-full">
                        {/* Image/Video Container - Aspect Ratio 16:9 */}
                        <div className="relative w-full aspect-[16/9] bg-[var(--card)] overflow-hidden">
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
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Video Play Overlay */}
                                    {work.videoUrl && (
                                        <div
                                            className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100 transition z-10"
                                            onClick={() => setPlayingVideo(work.id)}
                                        >
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                <div className="w-10 h-10 rounded-full bg-white text-[var(--primary)] flex items-center justify-center pl-1 shadow-lg">
                                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-grow p-5">
                            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                                {work.title[language]}
                            </h3>
                            <p className="text-sm text-[var(--muted)] line-clamp-3 leading-relaxed">
                                {work.description[language]}
                            </p>
                            
                             {/* Optional: Add a button if user wants consistent "Action" like Services, 
                                 or just keep it informational. For "Work", typically no button is needed unless it's "View Case Study".
                                 I'll leave it clean but consistent in spacing. 
                             */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
