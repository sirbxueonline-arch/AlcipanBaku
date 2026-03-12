'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { roomPreviewDesignOptions } from '@/data/roomPreviewDesigns';
import { designTypeFromParam } from '@/lib/designPrompts';
import type { DesignType } from '@/lib/designPrompts';
import { Upload, Loader2, ImageIcon, AlertCircle, Sparkles, Camera, CameraOff, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

const API_ENDPOINT = '/api/generate-design';

interface RoomPreviewGeneratorProps {
  /** When coming from ceiling design section, design is passed as query (ceiling id or designType) */
  initialDesignParam?: string;
}

export function RoomPreviewGenerator({ initialDesignParam }: RoomPreviewGeneratorProps) {
  const { language } = useAdmin();
  const initialDesign = designTypeFromParam(initialDesignParam ?? null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<DesignType | null>(initialDesign);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (initialDesign) setSelectedDesign(initialDesign);
  }, [initialDesign]);

  useEffect(() => {
    if (!cameraActive) return;
    let stream: MediaStream | null = null;
    (async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch {
        setError(language === 'AZ' ? 'Kamera icazəsi lazımdır' : language === 'RU' ? 'Требуется доступ к камере' : 'Camera access required');
        setCameraActive(false);
      }
    })();
    return () => {
      stream?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      if (videoRef.current) videoRef.current.srcObject = null;
    };
  }, [cameraActive, language]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.files?.[0];
      setError(null);
      setGeneratedUrl(null);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      if (!next) {
        setFile(null);
        setPreviewUrl(null);
        return;
      }
      if (!next.type.startsWith('image/')) {
        setError(
          language === 'AZ' ? 'Şəkil faylı seçin' : language === 'RU' ? 'Выберите файл изображения' : 'Please select an image file'
        );
        setFile(null);
        setPreviewUrl(null);
        return;
      }
      setFile(next);
      setPreviewUrl(URL.createObjectURL(next));
      setCameraActive(false);
    },
    [language, previewUrl]
  );

  const handleCapture = useCallback(() => {
    const video = videoRef.current;
    if (!video || !streamRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(video, 0, 0);
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const f = new File([blob], 'room-capture.jpg', { type: 'image/jpeg' });
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setFile(f);
        setPreviewUrl(URL.createObjectURL(blob));
        setCameraActive(false);
        setError(null);
        setGeneratedUrl(null);
      },
      'image/jpeg',
      0.9
    );
  }, [previewUrl]);

  const handleGenerate = useCallback(async () => {
    if (!file || !selectedDesign) {
      setError(
        language === 'AZ' ? 'Şəkil və dizayn seçin' : language === 'RU' ? 'Выберите фото и дизайн' : 'Please select a photo and a design'
      );
      return;
    }
    setError(null);
    setLoading(true);
    setGeneratedUrl(null);
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('designType', selectedDesign);
      const res = await fetch(API_ENDPOINT, { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Generation failed');
      if (data.imageUrl) setGeneratedUrl(data.imageUrl);
      else throw new Error('No image in response');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed');
    } finally {
      setLoading(false);
    }
  }, [file, selectedDesign, language]);

  const t = {
    title: { AZ: 'Otağın AI önizləməsi', RU: 'AI-превью комнаты', EN: 'AI room preview' },
    subtitle: {
      AZ: 'Otaq şəklini yükləyin və ya çəkin – seçdiyiniz dizayn tətbiq olunacaq.',
      RU: 'Загрузите или сделайте фото комнаты – будет применён выбранный дизайн.',
      EN: 'Upload or take a room photo – your selected design will be applied.',
    },
    subtitleNoDesign: {
      AZ: 'Otaq şəklini yükləyin və gips dizaynı seçin – realistik önizləmə alın.',
      RU: 'Загрузите фото комнаты и выберите дизайн гипса – получите реалистичное превью.',
      EN: 'Upload a room photo and select a gypsum design – get a realistic preview.',
    },
    upload: { AZ: 'Şəkil yüklə', RU: 'Загрузить фото', EN: 'Upload photo' },
    takePhoto: { AZ: 'Şəkil çək', RU: 'Сделать фото', EN: 'Take photo' },
    capture: { AZ: 'Çək', RU: 'Снять', EN: 'Capture' },
    cancelCamera: { AZ: 'Ləğv et', RU: 'Отмена', EN: 'Cancel' },
    selectDesign: { AZ: 'Dizayn növünü seçin', RU: 'Выберите тип дизайна', EN: 'Select design type' },
    selectedDesign: { AZ: 'Seçilmiş dizayn', RU: 'Выбранный дизайн', EN: 'Selected design' },
    changeDesign: { AZ: 'Dizaynı dəyiş', RU: 'Изменить дизайн', EN: 'Change design' },
    generate: { AZ: 'Önizləmə yarat', RU: 'Создать превью', EN: 'Generate preview' },
    before: { AZ: 'Əvvəl', RU: 'До', EN: 'Before' },
    after: { AZ: 'Sonra', RU: 'После', EN: 'After' },
  };

  const canGenerate = Boolean(file && selectedDesign && !loading);
  const designFromUrl = Boolean(initialDesignParam && selectedDesign);
  const selectedOption = selectedDesign ? roomPreviewDesignOptions.find((o) => o.id === selectedDesign) : null;
  const designSectionTitle = designFromUrl
    ? (language === 'AZ' ? 'Dizaynı dəyişmək istəyirsiniz? Aşağıdan seçin' : language === 'RU' ? 'Хотите изменить дизайн? Выберите ниже' : 'Want to change design? Pick one below')
    : t.selectDesign[language];

  return (
    <section className="py-6 md:py-14 lg:py-20 bg-[#0a192f]" id="room-preview">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-5 md:mb-10">
          <span className="inline-flex items-center gap-1.5 text-[#fbbf24] mb-1.5 md:mb-2 text-sm">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            {language === 'AZ' ? 'AI ilə' : language === 'RU' ? 'С ИИ' : 'With AI'}
          </span>
          <h2 className="text-xl md:text-4xl font-bold text-white mb-1.5 md:mb-2">{t.title[language]}</h2>
          <p className="text-white/70 text-xs md:text-base max-w-xl mx-auto px-1">
            {selectedDesign ? t.subtitle[language] : t.subtitleNoDesign[language]}
          </p>
        </div>

        <div className="space-y-4 md:space-y-8">
          {/* Step 1: Design selector – always visible at the top */}
          <div className="rounded-xl md:rounded-2xl border border-white/10 bg-[#112240]/50 p-3 md:p-6">
            <p className="text-xs md:text-sm font-medium text-white/80 mb-2 md:mb-3">{designSectionTitle}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {roomPreviewDesignOptions.map((opt) => {
                const isSelected = selectedDesign === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSelectedDesign(opt.id);
                      setError(null);
                    }}
                    className={`rounded-lg md:rounded-xl border-2 overflow-hidden transition-all text-left ${
                      isSelected ? 'border-[#fbbf24] ring-2 ring-[#fbbf24]/30' : 'border-white/10 hover:border-[#fbbf24]/40'
                    }`}
                  >
                    <div className="aspect-[4/3] bg-[#112240] relative">
                      <img src={opt.image} alt={opt.title[language]} className="w-full h-full object-cover" />
                      {isSelected && (
                        <div className="absolute inset-0 bg-[#fbbf24]/20 flex items-center justify-center">
                          <span className="bg-[#fbbf24] text-[#0a192f] text-[10px] md:text-xs font-semibold px-1.5 md:px-2 py-0.5 rounded">
                            {language === 'AZ' ? 'Seçildi' : language === 'RU' ? 'Выбрано' : 'Selected'}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="p-1.5 md:p-2 text-[11px] md:text-xs font-medium text-white truncate">{opt.title[language]}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* When design was chosen on previous page: show selected design chip + link to change */}
          {designFromUrl && selectedOption && (
            <div className="rounded-xl md:rounded-2xl border border-[#fbbf24]/40 bg-[#112240]/50 p-3 md:p-4 flex flex-wrap items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={selectedOption.image}
                  alt={selectedOption.title[language]}
                  className="w-11 h-11 md:w-14 md:h-14 rounded-lg object-cover border border-white/10"
                />
                <div>
                  <p className="text-[10px] md:text-xs text-white/60 font-medium">{t.selectedDesign[language]}</p>
                  <p className="text-white font-semibold text-sm md:text-base">{selectedOption.title[language]}</p>
                </div>
              </div>
              <Link
                href="/#ceiling-design"
                className="inline-flex items-center gap-1.5 text-[#fbbf24] hover:text-[#f59e0b] text-sm font-medium"
              >
                <LinkIcon className="w-4 h-4" />
                {t.changeDesign[language]}
              </Link>
            </div>
          )}

          {/* Step 2: Upload or camera */}
          <div className="rounded-xl md:rounded-2xl border border-white/10 bg-[#112240]/50 p-3 md:p-6">
            <p className="text-xs md:text-sm font-medium text-white/80 mb-2 md:mb-3">
              {language === 'AZ' ? 'Otaq şəklini yükləyin və ya kameradan çəkin' : language === 'RU' ? 'Загрузите или сфотографируйте комнату' : 'Upload or take a photo of your room'}
            </p>
            {!cameraActive ? (
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <label className="flex-1 flex flex-col items-center justify-center min-h-[140px] md:min-h-[200px] rounded-lg md:rounded-xl border-2 border-dashed border-white/20 hover:border-[#fbbf24]/50 bg-[#0a192f]/80 cursor-pointer transition-colors">
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                  {previewUrl ? (
                    <img src={previewUrl} alt="Room" className="w-full h-full min-h-[140px] md:min-h-[200px] object-contain rounded-lg" />
                  ) : (
                    <>
                      <Upload className="w-9 h-9 md:w-12 md:h-12 text-white/40 mb-1 md:mb-2" />
                      <span className="text-white/60 text-xs md:text-sm">{t.upload[language]}</span>
                    </>
                  )}
                </label>
                <button
                  type="button"
                  onClick={() => setCameraActive(true)}
                  className="inline-flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl border-2 border-white/20 hover:border-[#fbbf24]/50 text-white font-medium text-sm md:text-base transition-colors"
                >
                  <Camera className="w-4 h-4 md:w-5 md:h-5" />
                  {t.takePhoto[language]}
                </button>
              </div>
            ) : (
              <div className="space-y-2 md:space-y-3">
                <div className="relative rounded-lg md:rounded-xl overflow-hidden bg-black aspect-video">
                  <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-2 md:gap-3">
                  <button
                    type="button"
                    onClick={handleCapture}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-[#fbbf24] text-[#0a192f] font-semibold text-sm"
                  >
                    <Camera className="w-4 h-4 md:w-5 md:h-5" />
                    {t.capture[language]}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCameraActive(false)}
                    className="inline-flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-white/20 text-white font-medium text-sm"
                  >
                    <CameraOff className="w-4 h-4 md:w-5 md:h-5" />
                    {t.cancelCamera[language]}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Generate button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="inline-flex items-center gap-1.5 md:gap-2 px-5 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base text-[#0a192f] bg-[#fbbf24] hover:bg-[#fbbf24]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {language === 'AZ' ? 'Yaradılır...' : language === 'RU' ? 'Создаётся...' : 'Generating...'}
                </>
              ) : (
                <>
                  <ImageIcon className="w-5 h-5" />
                  {t.generate[language]}
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="flex items-center gap-2 rounded-lg md:rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 px-3 md:px-4 py-2.5 md:py-3 text-sm">
              <AlertCircle className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Result: before / after */}
          {(previewUrl || generatedUrl) && (
            <div className="rounded-xl md:rounded-2xl border border-white/10 bg-[#112240]/50 p-3 md:p-6">
              <p className="text-xs md:text-sm font-medium text-white/80 mb-2 md:mb-4">
                {generatedUrl
                  ? language === 'AZ'
                    ? 'Önizləmə nəticəsi'
                    : language === 'RU'
                      ? 'Результат превью'
                      : 'Preview result'
                  : language === 'AZ'
                    ? 'Şəkil və dizayn seçildikdən sonra nəticə burada görünəcək'
                    : language === 'RU'
                      ? 'Результат появится здесь после выбора фото и дизайна'
                      : 'Result will appear here after you generate'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                {previewUrl && (
                  <div>
                    <p className="text-[10px] md:text-xs font-medium text-[#fbbf24] mb-1 md:mb-2">{t.before[language]}</p>
                    <img
                      src={previewUrl}
                      alt="Before"
                      className="w-full rounded-lg border border-white/10 aspect-video object-cover"
                    />
                  </div>
                )}
                {generatedUrl && (
                  <div>
                    <p className="text-[10px] md:text-xs font-medium text-[#fbbf24] mb-1 md:mb-2">{t.after[language]}</p>
                    <img
                      src={generatedUrl}
                      alt="After"
                      className="w-full rounded-lg border border-white/10 aspect-video object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
