'use client';

import React from 'react';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';

export function HeroWorkSlideshow() {
  const { workItems } = useAdmin();
  const activeWorks = workItems.filter((w) => w.isActive);
  const photosOnly = activeWorks.filter(
    (w) => (!w.videoUrl || w.videoUrl.length === 0) && (!w.tikTokUrl || w.tikTokUrl.length === 0)
  );
  const images = photosOnly.map((w) => ({ id: w.id, src: w.imageUrl, alt: w.title.AZ }));

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Full-area slideshow band – sits behind hero text, visible underneath */}
      <div className="absolute inset-0 flex flex-col justify-end pb-0">
        <div className="h-[50vh] min-h-[240px] w-full overflow-hidden">
          <div className="hero-slideshow-track flex h-full items-stretch gap-3 md:gap-4">
            {images.map((img) => (
              <div
                key={`a-${img.id}`}
                className="relative h-full w-[75vw] min-w-[260px] max-w-[380px] shrink-0 overflow-hidden rounded-lg shadow-2xl border border-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 380px"
                  unoptimized={img.src.startsWith('/works/') || img.src.includes('brain/')}
                />
              </div>
            ))}
            {images.map((img) => (
              <div
                key={`b-${img.id}`}
                className="relative h-full w-[75vw] min-w-[260px] max-w-[380px] shrink-0 overflow-hidden rounded-lg shadow-2xl border border-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 380px"
                  unoptimized={img.src.startsWith('/works/') || img.src.includes('brain/')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Gradient: dark at top (behind text) so text is readable, lighter at bottom so slideshow is visible under text */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#0a192f]/95 via-[#0a192f]/75 to-[#0a192f]/50"
        aria-hidden
      />
    </div>
  );
}
