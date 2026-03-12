'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { ceilingDesigns } from '@/data/packageSystem';
import { Ruler, Circle } from 'lucide-react';
import Link from 'next/link';

export function CeilingDesignSection() {
  const { language } = useAdmin();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const t = {
    header: {
      AZ: 'Tavan dizaynını seç – AI ilə önizləmə al',
      RU: 'Выберите дизайн потолка – получите превью',
      EN: 'Select ceiling design – get AI preview',
    },
    subtitle: {
      AZ: 'Hazır dizaynlardan birini seçin, otağınızın şəklini yükləyin və realistik önizləmə əldə edin.',
      RU: 'Выберите один из готовых дизайнов, загрузите фото комнаты и получите реалистичное превью.',
      EN: 'Pick a ready design, upload a photo of your room and get a realistic preview.',
    },
    selectBtn: {
      AZ: 'Bu dizaynı seç',
      RU: 'Выбрать этот дизайн',
      EN: 'Select this design',
    },
    selected: {
      AZ: 'Seçildi',
      RU: 'Выбрано',
      EN: 'Selected',
    },
  };

  return (
    <section className="py-14 md:py-20 bg-[#112240]/50" id="ceiling-design">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block w-14 h-1 bg-[#fbbf24] rounded-full mb-4" aria-hidden />
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{t.header[language]}</h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ceilingDesigns.map((design) => {
            const isSelected = selectedId === design.id;
            return (
              <div
                key={design.id}
                className={`group relative flex flex-col rounded-2xl border overflow-hidden bg-[#0a192f] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 ${
                  isSelected ? 'border-[#fbbf24] ring-2 ring-[#fbbf24]/30' : 'border-white/10 hover:border-[#fbbf24]/40'
                }`}
              >
                <div className="w-full h-44 sm:h-52 shrink-0 bg-[#112240] flex items-center justify-center border-b border-white/10 overflow-hidden">
                  {design.image ? (
                    <img
                      src={design.image}
                      alt={design.title[language]}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="text-white/30 text-4xl font-bold">{design.id.toUpperCase()}</div>
                  )}
                </div>
                <div className="flex flex-col flex-grow p-5">
                  <h3 className="text-lg font-bold text-white mb-1">{design.title[language]}</h3>
                  <p className="text-white/70 text-sm mb-3">{design.description[language]}</p>
                  <div className="flex items-center gap-2 text-white/60 text-xs mb-4">
                    <Ruler className="w-4 h-4 text-[#fbbf24] shrink-0" />
                    <span>{design.spec[language]}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedId(isSelected ? null : design.id)}
                    className={`mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                      isSelected
                        ? 'bg-[#fbbf24] text-[#0a192f]'
                        : 'bg-white/10 text-white hover:bg-[#fbbf24] hover:text-[#0a192f]'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Circle className="w-4 h-4 fill-current" />
                        {t.selected[language]}
                      </>
                    ) : (
                      <>
                        <Circle className="w-4 h-4" />
                        {t.selectBtn[language]}
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {selectedId && (
          <div className="mt-8 text-center">
            <Link
              href={`/room-preview?design=${encodeURIComponent(selectedId)}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a192f] font-bold rounded-xl transition-colors"
            >
              {language === 'AZ' ? 'Önizləməyə keç' : language === 'RU' ? 'Перейти к превью' : 'Continue to preview'}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
