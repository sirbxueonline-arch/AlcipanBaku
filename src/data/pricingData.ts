
export interface PricingTier {
    id: string;
    title: { AZ: string; RU: string; EN: string };
    pricePerSqm?: number; // Optional if package price is fixed logic
    description: { AZ: string; RU: string; EN: string };
    features: { AZ: string; RU: string; EN: string }[];
    isPopular?: boolean;
    buttonText: { AZ: string; RU: string; EN: string };
}

export const pricingPackages = [
    {
        id: 'material-only',
        title: { AZ: 'Yalnız Material', RU: 'Только Материал', EN: 'Material Only' },
        description: { AZ: 'Montaj daxil deyil', RU: 'Монтаж не включен', EN: 'Installation not included' },
        prices: [
            { area: 20, price: 260 },
            { area: 40, price: 520 },
            { area: 60, price: 780 },
            { area: 80, price: 1040 },
            { area: 100, price: 1300 },
        ],
        currency: '₼',
        features: {
            AZ: [
                'Yalnız Material Qiymətləri',
                'Montaj daxil deyil',
                'Çatdırılma (əlavə ödənişlə)'
            ],
            RU: [
                'Цены только на материал',
                'Монтаж не включен',
                'Доставка (за доп. плату)'
            ],
            EN: [
                'Material Prices Only',
                'Installation not included',
                'Delivery (extra charge)'
            ]
        },
        color: 'blue'
    },
    {
        id: 'standard-ceiling',
        title: { AZ: 'Material + Ustalıq (Sadə)', RU: 'Материал + Мастер (Простой)', EN: 'Material + Master (Simple)' },
        description: { AZ: 'Standart dizayn və montaj', RU: 'Стандартный дизайн и монтаж', EN: 'Standard design and installation' },
        isPopular: true,
        prices: [
            { area: 20, price: 460 },
            { area: 40, price: 920 },
            { area: 60, price: 1380 },
            { area: 80, price: 1840 },
            { area: 100, price: 2300 },
        ],
        currency: '₼',
        features: {
            AZ: [
                'Material + Ustalıq',
                'Sadə Tavan',
                'Standart dizayn',
                'Peşəkar montaj'
            ],
            RU: [
                'Материал + Мастер',
                'Простой Потолок',
                'Стандартный дизайн',
                'Профессиональный монтаж'
            ],
            EN: [
                'Material + Master',
                'Simple Ceiling',
                'Standard design',
                'Professional installation'
            ]
        },
        color: 'yellow' // Gold/Warning
    },
    {
        id: 'figured-ceiling',
        title: { AZ: 'Material + Ustalıq (Fiqurlu)', RU: 'Материал + Мастер (Фигурный)', EN: 'Material + Master (Figured)' },
        description: { AZ: 'Fiqurlu dizayn və karkas', RU: 'Фигурный дизайн и каркас', EN: 'Figured design and frame' },
        prices: [
            { area: 20, price: 660 },
            { area: 40, price: 1320 },
            { area: 60, price: 1980 },
            { area: 80, price: 2640 },
            { area: 100, price: 3300 },
        ],
        currency: '₼',
        features: {
            AZ: [
                'Material + Ustalıq',
                'Fiqurlu Tavan',
                'Karkas montajı',
                'Peşəkar montaj',
                'Özəl dizayn'
            ],
            RU: [
                'Материал + Мастер',
                'Фигурный Потолок',
                'Монтаж каркаса',
                'Профессиональный монтаж',
                'Особый дизайн'
            ],
            EN: [
                'Material + Master',
                'Figured Ceiling',
                'Frame installation',
                'Professional installation',
                'Special design'
            ]
        },
        color: 'purple'
    }
];

export const advantagesData = [
    {
        id: 1,
        title: { AZ: '20+ il təcrübə', RU: '20+ лет опыта', EN: '20+ years experience' },
        desc: { AZ: 'Peşəkar komanda və illərin təcrübəsi.', RU: 'Профессиональная команда и многолетний опыт.', EN: 'Professional team and years of experience.' },
        iconName: 'experience'
    },
    {
        id: 2,
        title: { AZ: 'Keyfiyyətli materiallar', RU: 'Качественные материалы', EN: 'Quality materials' },
        desc: { AZ: 'Yalnız sertifikatlı və davamlı materiallardan istifadə edirik.', RU: 'Используем только сертифицированные и прочные материалы.', EN: 'We use only certified and durable materials.' },
        iconName: 'quality'
    },
    {
        id: 3,
        title: { AZ: 'Səliqəli və vaxtında təhvil', RU: 'Аккуратная и своевременная сдача', EN: 'Neat and timely delivery' },
        desc: { AZ: 'İşlərimizi təmiz və söz verilən vaxtda təhvil veririk.', RU: 'Сдаем работу чисто и в оговоренные сроки.', EN: 'We deliver our work clean and on time.' },
        iconName: 'time'
    },
    {
        id: 4,
        title: { AZ: 'Zəmanətli iş', RU: 'Гарантированная работа', EN: 'Guaranteed work' },
        desc: { AZ: 'Gördüyümüz hər işə tam zəmanət veririk.', RU: 'Мы даем полную гарантию на каждую выполненную работу.', EN: 'We give a full guarantee for every work we do.' },
        iconName: 'guarantee'
    },
    {
        id: 5,
        title: { AZ: 'Münasib qiymətlər', RU: 'Приемлемые цены', EN: 'Affordable prices' },
        desc: { AZ: 'Büdcənizə uyğun ən yaxşı təkliflər.', RU: 'Лучшие предложения под ваш бюджет.', EN: 'Best offers for your budget.' },
        iconName: 'price'
    }
];
