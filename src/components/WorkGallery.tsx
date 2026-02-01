'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';
import { TikTokEmbed } from 'react-social-media-embed';

export function WorkGallery() {
    const { workItems, language } = useAdmin();
    const activeWorks = workItems.filter(w => w.isActive);
    const [viewingItem, setViewingItem] = useState<{ url: string, type: 'video' | 'tiktok' | 'image' } | null>(null);

    // Separate items
    // Videos are items with a videoUrl OR tikTokUrl
    // Photos are items without either
    const videos = activeWorks.filter(w => (w.videoUrl && w.videoUrl.length > 0) || (w.tikTokUrl && w.tikTokUrl.length > 0));
    const photos = activeWorks.filter(w => (!w.videoUrl || w.videoUrl.length === 0) && (!w.tikTokUrl || w.tikTokUrl.length === 0));

    const hasPhotos = photos.length > 0;
    const hasVideos = videos.length > 0;

    if (!hasPhotos && !hasVideos) return null;

    const handleVideoClick = (item: any) => {
        if (item.videoUrl) setViewingItem({ url: item.videoUrl, type: 'video' });
        else if (item.tikTokUrl) setViewingItem({ url: item.tikTokUrl, type: 'tiktok' });
    };

    const handlePhotoClick = (item: any) => {
        if (item.imageUrl) setViewingItem({ url: item.imageUrl, type: 'image' });
    };

    return (
        <section className="container mx-auto px-4 py-16 bg-[var(--bg)]" id="portfolio">
            <h2 className="text-center text-3xl font-bold mb-12 text-white">
                {language === 'AZ' ? 'Bizim İşlər' : language === 'RU' ? 'Наши Работы' : 'Our Work'}
            </h2>

            {/* PHOTOS SECTION */}
            {hasPhotos && (
                <div className="mb-16">
                    <h3 className="text-xl font-semibold mb-6 text-white/80 px-4 border-l-4 border-teal-500">
                        {language === 'AZ' ? 'Fotoqalereya' : language === 'RU' ? 'Фотогалерея' : 'Photo Gallery'}
                    </h3>
                    <WorkCarousel
                        items={photos}
                        onItemClick={handlePhotoClick}
                        language={language}
                    />
                </div>
            )}

            {/* VIDEOS SECTION */}
            {hasVideos && (
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-white/80 px-4 border-l-4 border-teal-500">
                        {language === 'AZ' ? 'Video İcmallar' : language === 'RU' ? 'Видео Обзоры' : 'Video Reviews'}
                    </h3>
                    <WorkCarousel
                        items={videos}
                        onItemClick={handleVideoClick}
                        isVideo={true}
                        language={language}
                    />
                </div>
            )}

            {/* MODAL OVERLAY */}
            {viewingItem && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setViewingItem(null)} // Close on backdrop click
                >
                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Prevent close on content click
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setViewingItem(null)}
                            className="absolute -top-12 right-0 z-50 p-2 text-white hover:text-gray-300 transition"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="overflow-hidden rounded-xl w-full flex justify-center items-center">
                            {viewingItem.type === 'tiktok' ? (
                                <div className="bg-black rounded-xl overflow-hidden">
                                    <TikTokEmbed url={viewingItem.url} width={325} />
                                </div>
                            ) : viewingItem.type === 'video' ? (
                                <video
                                    src={viewingItem.url}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl"
                                />
                            ) : (
                                // Image
                                <div className="relative w-auto h-auto max-h-[85vh] max-w-full">
                                    <img
                                        src={viewingItem.url}
                                        alt="Full view"
                                        className="max-h-[85vh] max-w-full object-contain rounded-sm shadow-2xl"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

// Reusable Carousel Component
function WorkCarousel({ items, onItemClick, isVideo = false, language }: { items: any[], onItemClick: (item: any) => void, isVideo?: boolean, language: any }) {
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

    return (
        <div className="relative group/carousel">
            {/* Navigation Buttons */}
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
                {items.map((work) => (
                    <div
                        key={work.id}
                        className={`flex-none snap-center ${isVideo ? 'w-[160px] sm:w-[200px]' : 'w-[280px] sm:w-[350px]'} group relative flex flex-col rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-black/40`}
                        onClick={() => onItemClick(work)}
                    >
                        {/* Image/Video Container */}
                        <div className={`relative w-full ${isVideo ? 'aspect-[9/16]' : 'aspect-[4/3]'} bg-black overflow-hidden flex items-center justify-center`}>
                            {isVideo ? (
                                <>
                                    <video
                                        src={work.videoUrl}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                        muted
                                        playsInline
                                        loop
                                        onMouseEnter={(e) => e.currentTarget.play()}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.pause();
                                            e.currentTarget.currentTime = 0;
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </>
                            ) : (
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
    );
}
