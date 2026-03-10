'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';

export function HeroWorkSlideshow() {
  const { workItems } = useAdmin();
  const activeWorks = workItems.filter((w) => w.isActive);
  const photosOnly = activeWorks.filter(
    (w) => (!w.videoUrl || w.videoUrl.length === 0) && (!w.tikTokUrl || w.tikTokUrl.length === 0)
  );
  const images = photosOnly.map((w) => ({ id: w.id, src: w.imageUrl, alt: w.title.AZ }));

  if (images.length === 0) return null;

  const trackContent = (
    <>
      {images.map((img) => (
        <SlideImage key={`a-${img.id}`} src={img.src} alt={img.alt} />
      ))}
      {images.map((img) => (
        <SlideImage key={`b-${img.id}`} src={img.src} alt={img.alt} />
      ))}
    </>
  );

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Two stacked rows filling the whole hero */}
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 min-h-0 w-full overflow-hidden">
          <div className="hero-slideshow-track flex h-full items-stretch gap-2 sm:gap-3 md:gap-4">
            {trackContent}
          </div>
        </div>
        <div className="flex-1 min-h-0 w-full overflow-hidden">
          <div className="hero-slideshow-track-right flex h-full items-stretch gap-2 sm:gap-3 md:gap-4">
            {trackContent}
          </div>
        </div>
      </div>
      {/* Lighter overlay so images are more visible; still keeps text readable */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#0a192f]/75 via-[#0a192f]/45 to-[#0a192f]/25"
        aria-hidden
      />
    </div>
  );
}

function SlideImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <div className="relative h-full w-[75vw] min-w-[260px] max-w-[380px] shrink-0 overflow-hidden rounded-lg shadow-2xl border border-white/10 bg-[#0a192f]/80">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setError(true)}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
