'use client';

import React, { useState, useEffect } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

type PackageType = 'material' | 'simple' | 'figured';

interface PricingConfig {
    pricePerSqm: number; 
    tiers?: { min: number; rate: number }[]; // Optional tiered pricing
    name: { [key: string]: string };
    image: string;
}

const PRICING: Record<PackageType, PricingConfig> = {
    material: {
        pricePerSqm: 13, 
        name: { AZ: 'Yalnız Material', RU: 'Только Материал', EN: 'Material Only' },
        image: '/material_gypsum_moisture.jpg'
    },
    simple: {
        pricePerSqm: 23,
        // Tiered pricing derived from user request: 
        // <50m²: 23/m² | 50-99m²: 22/m² | >100m²: 21/m²
        tiers: [
             { min: 100, rate: 21 },
             { min: 50, rate: 22 },
             { min: 0, rate: 23 } 
        ],
        name: { AZ: 'Material + Ustalıq (Sadə)', RU: 'Материал + Работа (Простой)', EN: 'Material + Labor (Simple)' },
        image: '/service_simple_ceiling_new.png'
    },
    figured: {
        pricePerSqm: 33, 
        name: { AZ: 'Material + Ustalıq (Fiqurlu)', RU: 'Материал + Работа (Фигурный)', EN: 'Material + Labor (Figured)' },
        image: '/picture2.jpeg'
    }
};

export function PriceCalculator() {
    const { language } = useAdmin();
    const { addToCart } = useCart();
    const searchParams = useSearchParams();
    
    // Get initial type and area from URL
    const initialType = (searchParams.get('package') as PackageType) || 'simple';
    const initialArea = Number(searchParams.get('area')) || 25;
    
    const [area, setArea] = useState<number | string>(initialArea);
    const [selectedType, setSelectedType] = useState<PackageType>(
        ['material', 'simple', 'figured'].includes(initialType) ? initialType : 'simple'
    );
    const [price, setPrice] = useState<number>(0);
    const [currentRate, setCurrentRate] = useState<number>(0);

    // Update state if URL changes
    useEffect(() => {
        const typeFromUrl = searchParams.get('package') as PackageType;
        const areaFromUrl = Number(searchParams.get('area'));
        
        if (typeFromUrl && ['material', 'simple', 'figured'].includes(typeFromUrl)) {
            setSelectedType(typeFromUrl);
        }
        if (areaFromUrl && !isNaN(areaFromUrl)) {
            setArea(areaFromUrl);
        }
    }, [searchParams]);

    /* Calculation Logic */
    useEffect(() => {
        const config = PRICING[selectedType];
        const numArea = typeof area === 'string' ? (area === '' ? 0 : Number(area)) : area;
        // Ensure minimum 20m2 for calculation base
        const calcArea = Math.max(20, numArea);
        
        let rate = config.pricePerSqm;
        
        // Apply tiered pricing if available
        if (config.tiers) {
            // Find the highest applicable tier (tiers are sorted desc in definition or we find first match)
            const tier = config.tiers.find(t => calcArea >= t.min);
            if (tier) {
                rate = tier.rate;
            }
        }
        
        setCurrentRate(rate);
        const calculatedPrice = calcArea * rate;
        setPrice(calculatedPrice);
    }, [area, selectedType]);

    const handleAddToCart = () => {
        const config = PRICING[selectedType];
        
        // Create a custom item for the cart
        const cartItem = {
            id: `calc-${selectedType}-${Date.now()}`,
            type: 'package', // Using package type to fit existing logic
            name: {
                AZ: `${config.name.AZ} (${area} m²)`,
                RU: `${config.name.RU} (${area} м²)`,
                EN: `${config.name.EN} (${area} m²)`
            },
            price: price, // Total price calculated
            currency: 'AZN',
            image: config.image,
            quantity: 1, // 1 unit of this calculated package
            step: 1
        };
        
        addToCart(cartItem as any);
        alert(language === 'AZ' ? 'Səbətə əlavə olundu!' : language === 'RU' ? 'Добавлено в корзину!' : 'Added to cart!');
    };

    const handleWhatsApp = () => {
        const config = PRICING[selectedType];
        const text = `Salam, mən ${config.name.AZ} paketi üçün qiymət hesabladım. Otaq sahəsi: ${area} m², Qiymət: ${price} AZN. Sifariş etmək istəyirəm.`;
        window.open(`https://wa.me/994506368731?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-4 md:p-6 my-6">
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
                    {language === 'AZ' ? 'QİYMƏT KALKULYATORU' : language === 'RU' ? 'КАЛЬКУЛЯТОР ЦЕН' : 'PRICE CALCULATOR'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                    {language === 'AZ' ? 'Otağınızın ölçüsünü seçin, qiyməti hesablayın:' : language === 'RU' ? 'Выберите размер комнаты, рассчитайте цену:' : 'Select room size, calculate price:'}
                </p>
            </div>

            {/* Input Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Area Input */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {language === 'AZ' ? 'Otağın Sahəsi:' : language === 'RU' ? 'Площадь комнаты:' : 'Room Area:'}
                    </label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            inputMode="numeric"
                            value={area}
                            onChange={(e) => {
                                const val = e.target.value;
                                if (val === '' || /^\d*$/.test(val)) {
                                    setArea(val);
                                }
                            }}
                            className="w-full text-3xl font-bold text-slate-900 bg-transparent outline-none border-b-2 border-slate-200 focus:border-blue-500 transition-colors pb-1"
                        />
                        <span className="text-xl font-medium text-slate-400 ml-2">m²</span>
                    </div>
                    {/* Rate Display */}
                     <p className="text-[10px] text-blue-600 font-bold mt-2 text-right">
                        {language === 'AZ' ? `Cari Tarif: ${currentRate} ₼/m²` : `Current Rate: ${currentRate} ₼/m²`}
                    </p>
                </div>

                {/* Package Selection - Material Only (Mini Card) */}
                <div 
                    onClick={() => setSelectedType('material')}
                    className={`relative cursor-pointer rounded-xl p-3 border-2 transition-all flex items-center gap-3 ${selectedType === 'material' ? 'border-blue-500 bg-blue-50/50' : 'border-gray-100 hover:border-blue-200 bg-white'}`}
                >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image src={PRICING.material.image} alt="Material" fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">{PRICING.material.name[language]}</h4>
                        <p className="text-lg font-bold text-blue-600 mt-0.5">
                           {Math.max(20, typeof area === 'string' ? (area === '' ? 0 : Number(area)) : area) * PRICING.material.pricePerSqm} ₼
                        </p>
                    </div>
                    {selectedType === 'material' && (
                        <div className="bg-blue-500 text-white p-1 rounded-full">
                            <Check size={14} strokeWidth={3} />
                        </div>
                    )}
                </div>
            </div>

            {/* Main Package Selection */}
            <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                    {language === 'AZ' ? 'Paket Seçin:' : language === 'RU' ? 'Выберите пакет:' : 'Select Package:'}
                </label>
                <div className="grid grid-cols-2 gap-4">
                    {['simple', 'figured'].map((type) => {
                        const t = type as PackageType;
                        const config = PRICING[t];
                        const isSelected = selectedType === t;
                        
                         // Calculate display price for this card based on current area
                        let rate = config.pricePerSqm;
                        if (config.tiers) {
                             const tier = config.tiers.find(t => Math.max(20, typeof area === 'string' ? (area === '' ? 0 : Number(area)) : area) >= t.min);
                             if (tier) rate = tier.rate;
                        }
                        const numAreaForCard = typeof area === 'string' ? (area === '' ? 0 : Number(area)) : area;
                        const currentPrice = Math.max(20, numAreaForCard) * rate;

                        return (
                            <motion.div
                                key={type}
                                onClick={() => setSelectedType(t)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className={`cursor-pointer rounded-xl border-2 overflow-hidden transition-all ${isSelected ? 'border-blue-600 shadow-md ring-1 ring-blue-600' : 'border-gray-100 hover:border-blue-300'}`}
                            >
                                <div className={`p-3 text-center ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-50 text-slate-700'}`}>
                                    <h4 className="text-xs md:text-sm font-bold leading-tight">{config.name[language]}</h4>
                                    <p className={`text-lg md:text-xl font-black mt-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                                        {currentPrice} ₼
                                    </p>
                                </div>
                                <div className="relative h-24 bg-gray-200">
                                    <Image src={config.image} alt={config.name[language]} fill className="object-cover" />
                                    {isSelected && (
                                        <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center">
                                            <div className="bg-white/90 backdrop-blur text-blue-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                {language === 'AZ' ? 'Seçildi' : 'Selected'}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Result & Actions */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-slate-500 font-medium mb-1">
                            {language === 'AZ' ? 'Nəticə:' : language === 'RU' ? 'Результат:' : 'Result:'}
                        </p>
                        <div className="flex items-baseline gap-2">
                             <span className="text-3xl font-black text-slate-900">{price} ₼</span>
                        </div>
                    </div>

                    <div className="bg-green-50/80 border border-green-100 rounded-lg px-4 py-2 text-right">
                         <div className="flex items-center gap-2 justify-end mb-1">
                            <h4 className="text-lg font-bold text-green-800">
                                {language === 'AZ' ? 'Qiymət:' : language === 'RU' ? 'Цена:' : 'Price:'} {price} ₼
                            </h4>
                         </div>
                         <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                            <Info size={12} />
                            {language === 'AZ' ? `Hər 1 m² üçün ${currentRate} ₼` : `Per 1 m²: ${currentRate} ₼`}
                         </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                        onClick={handleAddToCart}
                        className="py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold shadow-lg shadow-orange-200 active:scale-[0.98] transition-all"
                    >
                        {language === 'AZ' ? 'Səbətə At' : language === 'RU' ? 'В корзину' : 'Add to Cart'}
                    </button>
                    <button
                        onClick={handleWhatsApp}
                        className="py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold shadow-lg shadow-green-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                        <Image src="/whatsapp-logo.png" width={20} height={20} alt="WhatsApp" className="brightness-0 invert" />
                        WhatsApp
                    </button>
                </div>
                
                 <div className="text-center mt-4 pt-4 border-t border-gray-200/60">
                    <p className="text-[10px] text-gray-400">
                        {language === 'AZ' 
                            ? `Qeyd: Minimum sifariş 20 m². Bir m² qiyməti: ${currentRate}₼.`
                            : `Note: Minimum order 20 m². Price per m²: ${currentRate}₼.`}
                    </p>
                </div>
            </div>
        </div>
    );
}
