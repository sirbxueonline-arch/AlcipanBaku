'use client';

import React, { useEffect, useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'Elvin C.',
        rating: 5,
        text: {
            AZ: 'Evimin bütün alçipan işlərini AlcipanBaku komandasına həvalə etdim. Nəticə möhtəşəmdir! Çox səliqəli və vaxtında təhvil verdilər.',
            RU: 'Я доверил все работы по гипсокартону в своем доме команде AlcipanBaku. Результат отличный! Сделали очень аккуратно и сдали вовремя.',
            EN: 'I entrusted all the drywall work in my house to the AlcipanBaku team. The result is spectacular! Very neat and delivered on time.'
        }
    },
    {
        id: 2,
        name: 'Aydan M.',
        rating: 5,
        text: {
            AZ: 'Tavan dizaynı üçün müraciət etdik, fərqli ideyalar təklif etdilər. İş prosesində dəqiqlik və peşəkarlıq hiss olunurdu.',
            RU: 'Обратились за дизайном потолка, предложили разные идеи. В процессе работы чувствовалась точность и профессионализм.',
            EN: 'We applied for ceiling design, they offered different ideas. Precision and professionalism were felt during the work process.'
        }
    },
    {
        id: 3,
        name: 'Samir R.',
        rating: 5,
        text: {
            AZ: 'Materialların keyfiyyəti dedikləri kimi superdir. Ustalar da çox nəzakətli və işini bilən idilər. Təşəkkürlər!',
            RU: 'Качество материалов супер, как и говорили. Мастера тоже были очень вежливы и знали свое дело. Спасибо!',
            EN: 'The quality of the materials is super, just as they said. The masters were also very polite and knew their job. Thanks!'
        }
    }
];

export function Testimonials() {
    const { language } = useAdmin();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 bg-[#f8fafc] overflow-hidden relative" id="testimonials">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0a192f] uppercase tracking-wide">
                        {language === 'AZ' ? 'Müştəri Rəyləri' : language === 'RU' ? 'Отзывы Клиентов' : 'Client Reviews'}
                    </h2>
                    <div className="h-1 w-16 bg-[#fbbf24] mx-auto rounded-full mt-3"></div>
                </div>

                <div className="max-w-4xl mx-auto relative h-[250px] md:h-[200px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                        >
                            <div className="mb-4 flex gap-1 justify-center">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <svg key={i} className="w-6 h-6 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-lg md:text-xl italic text-gray-700 font-medium mb-6 px-4 md:px-12">
                                "{testimonials[currentIndex].text[language]}"
                            </p>
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#fbbf24] to-[#f59e0b] shadow-md text-white flex items-center justify-center font-bold text-lg">
                                    {testimonials[currentIndex].name.charAt(0)}
                                </div>
                                <h4 className="font-bold text-[#0a192f]">{testimonials[currentIndex].name}</h4>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-[#fbbf24] w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
