'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import { TikTokEmbed } from 'react-social-media-embed';

export function WorkGallery() {
    const { workItems, language } = useAdmin();
    const activeWorks = workItems.filter(w => w.isActive);
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 220; // Card width + gap
            const targetScroll = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    if (activeWorks.length === 0) return null;

    return (
        <section className="container mx-auto px-4 py-16 bg-[var(--bg)]" id="portfolio">
            <h2 className="text-center text-3xl font-bold mb-8 text-white">
                {language === 'AZ' ? 'Bizim İşlər' : language === 'RU' ? 'Наши Работы' : 'Our Work'}
            </h2>

            <div className="relative group/carousel mt-4">
                {/* Navigation Buttons - Hidden on mobile, visible on hover/desktop */}
                <button 
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/80 hidden sm:block backdrop-blur-sm -ml-4"
                    aria-label="Scroll Left"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/80 hidden sm:block backdrop-blur-sm -mr-4"
                    aria-label="Scroll Right"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>

                {/* Carousel Container */}
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto pb-4 pt-4 px-4 snap-x snap-mandatory scrollbar-hide -mx-4 sm:mx-0"
                >
                    {activeWorks.map((work) => (
                        <div 
                            key={work.id} 
                            className="flex-none snap-center w-[160px] sm:w-[200px] group relative flex flex-col rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-black/40"
                            onClick={() => work.tikTokUrl ? setPlayingVideo(work.tikTokUrl) : null}
                        >
                            {/* Image/Video Container - TikTok Aspect Ratio */}
                            <div className={`relative w-full ${work.tikTokUrl ? 'aspect-[9/16]' : 'aspect-[16/9]'} bg-black overflow-hidden flex items-center justify-center`}>
                                {/* IF TIKTOK -> Show Image + Play Trigger */}
                                {work.tikTokUrl ? (
                                    <>
                                        <Image
                                            src={work.imageUrl}
                                            alt={work.title[language]}
                                            fill
                                            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                            unoptimized
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    // Fallback for non-TikTok (though we expect all TikToks now)
                                    <Image
                                        src={work.imageUrl}
                                        alt={work.title[language]}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* TIKTOK MODAL OVERLAY */}
            {playingVideo && playingVideo.includes('tiktok.com') && (
                <div 
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setPlayingVideo(null)} // Close on backdrop click
                >
                    <div 
                        className="relative w-[325px] rounded-xl shadow-2xl bg-black"
                        onClick={(e) => e.stopPropagation()} // Prevent close on content click
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setPlayingVideo(null)}
                            className="absolute -top-12 right-0 md:-right-12 z-50 p-2 text-white hover:text-gray-300 transition"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="overflow-hidden rounded-xl">
                            <TikTokEmbed 
                                url={playingVideo} 
                                width={325} 
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
