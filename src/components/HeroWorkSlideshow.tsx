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
      {/* Continuous scroll wrapper */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="h-[45vh] min-h-[280px] w-full overflow-hidden">
          <div className="hero-slideshow-track flex h-full items-stretch gap-3 md:gap-4">
            {/* First set */}
            {images.map((img) => (
              <div
                key={`a-${img.id}`}
                className="relative h-full w-[75vw] min-w-[280px] max-w-[420px] shrink-0 overflow-hidden rounded-lg shadow-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 420px"
                  unoptimized={img.src.startsWith('/works/') || img.src.includes('brain/')}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((img) => (
              <div
                key={`b-${img.id}`}
                className="relative h-full w-[75vw] min-w-[280px] max-w-[420px] shrink-0 overflow-hidden rounded-lg shadow-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 420px"
                  unoptimized={img.src.startsWith('/works/') || img.src.includes('brain/')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a192f]/92 via-[#0a192f]/85 to-[#0a192f]"
        aria-hidden
      />
    </div>
  );
}
