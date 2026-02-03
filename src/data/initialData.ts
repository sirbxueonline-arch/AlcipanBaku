import { Product, Service, WorkItem, Package } from '@/types';

// ==========================================
// YOUR PRODUCTS
// ==========================================

// ==========================================
// YOUR PACKAGES (Bundles)
// ==========================================
export const initialPackages: Package[] = [
    {
        id: 'pkg20',
        type: 'package',
        name: { AZ: '20 m² Paket', RU: 'Пакет 20 м²', EN: '20 m² Package' },
        price: 23, // 460 / 20
        currency: 'AZN',
        image: '/picture1.jpeg',
        description: {
            AZ: 'Keyfiyyətli Material\nPeşəkar Montaj\nPulsuz Ölçü\nZəmanətli İş',
            RU: 'Качественный Материал\nПрофессиональный Монтаж\nБесплатный Замер\nГарантия Работы',
            EN: 'Quality Material\nProfessional Installation\nFree Measurement\nGuaranteed Work'
        },
        isActive: true,
        isPriceVisible: true,
        step: 20
    },
    {
        id: 'pkg50',
        type: 'package',
        name: { AZ: '50 m² Paket', RU: 'Пакет 50 м²', EN: '50 m² Package' },
        price: 22, // 1100 / 50
        currency: 'AZN',
        image: '/picture2.jpeg',
        description: {
            AZ: 'Keyfiyyətli Material\nPeşəkar Montaj\nPulsuz Ölçü\nZəmanətli İş',
            RU: 'Качественный Материал\nПрофессиональный Монтаж\nБесплатный Замер\nГарантия Работы',
            EN: 'Quality Material\nProfessional Installation\nFree Measurement\nGuaranteed Work'
        },
        isActive: true,
        isPriceVisible: true,
        step: 50
    },
    {
        id: 'pkg100',
        type: 'package',
        name: { AZ: '100 m² Paket', RU: 'Пакет 100 м²', EN: '100 m² Package' },
        price: 21, // 2100 / 100
        currency: 'AZN',
        image: '/picture4.jpeg',
        description: {
            AZ: 'Keyfiyyətli Material\nPeşəkar Montaj\nPulsuz Ölçü\nZəmanətli İş',
            RU: 'Качественный Материал\nПрофессиональный Монтаж\nБесплатный Замер\nГарантия Работы',
            EN: 'Quality Material\nProfessional Installation\nFree Measurement\nGuaranteed Work'
        },
        isActive: true,
        isPriceVisible: true,
        step: 100
    },
    {
        id: 'pkg150',
        type: 'package',
        name: { AZ: '150 m² Paket', RU: 'Пакет 150 м²', EN: '150 m² Package' },
        price: 21, // 3150 / 150
        currency: 'AZN',
        image: '/picture6.jpeg',
        description: {
            AZ: 'Keyfiyyətli Material\nPeşəkar Montaj\nPulsuz Ölçü\nZəmanətli İş',
            RU: 'Качественный Материал\nПрофессиональный Монтаж\nБесплатный Замер\nГарантия Работы',
            EN: 'Quality Material\nProfessional Installation\nFree Measurement\nGuaranteed Work'
        },
        isActive: true,
        isPriceVisible: true,
        step: 150
    },
    {
        id: 'pkg200',
        type: 'package',
        name: { AZ: '200 m² Paket', RU: 'Пакет 200 м²', EN: '200 m² Package' },
        price: 21, // 4200 / 200
        currency: 'AZN',
        image: '/picture10.jpeg',
        description: {
            AZ: 'Keyfiyyətli Material\nPeşəkar Montaj\nPulsuz Ölçü\nZəmanətli İş',
            RU: 'Качественный Материал\nПрофессиональный Монтаж\nБесплатный Замер\nГарантия Работы',
            EN: 'Quality Material\nProfessional Installation\nFree Measurement\nGuaranteed Work'
        },
        isActive: true,
        isPriceVisible: true,
        step: 200
    }
];

// ==========================================
// YOUR PRODUCTS (Materials)
// ==========================================
export const initialProducts: Product[] = [
    {
        id: '12',
        type: 'product',
        name: { AZ: 'Gilan Standart Alçipan', RU: 'Gilan Стандартный Гипсокартон', EN: 'Gilan Standard Gypsum Board' },
        price: 0,
        currency: 'AZN',
        image: '/material_gypsum_standard.jpg',
        description: {
            AZ: 'Yüksək keyfiyyətli standart gipskarton lövhələr (Gilan).',
            RU: 'Высококачественные стандартные гипсокартонные листы (Gilan).',
            EN: 'High quality standard gypsum boards (Gilan).'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '13',
        type: 'product',
        name: { AZ: 'Gilan Nəmədavamlı Alçipan (12.5mm)', RU: 'Gilan Влагостойкий Гипсокартон (12.5мм)', EN: 'Gilan Moisture Resistant Gypsum (12.5mm)' },
        price: 12,
        currency: 'AZN',
        image: '/material_gypsum_moisture.jpg',
        description: {
            AZ: 'Nəmə davamlı yaşıl gipskarton lövhələr (Gilan & Knauf).',
            RU: 'Влагостойкие зеленые гипсокартонные листы (Gilan & Knauf).',
            EN: 'Moisture resistant green gypsum boards (Gilan & Knauf).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '23',
        type: 'product',
        name: { AZ: 'Gilan Nəmədavamlı Alçipan (9.5mm)', RU: 'Gilan Влагостойкий Гипсокартон (9.5мм)', EN: 'Gilan Moisture Resistant Gypsum (9.5mm)' },
        price: 11,
        currency: 'AZN',
        image: '/material_gypsum_moisture.jpg',
        description: {
            AZ: 'Nəmə davamlı yaşıl gipskarton lövhələr (Gilan & Knauf).',
            RU: 'Влагостойкие зеленые гипсокартонные листы (Gilan & Knauf).',
            EN: 'Moisture resistant green gypsum boards (Gilan & Knauf).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '14',
        type: 'product',
        name: { AZ: 'Divar Profilləri', RU: 'Стеновые Профили', EN: 'Wall Profiles' },
        price: 0,
        currency: 'AZN',
        image: '/material_profile_wall.jpg',
        description: {
            AZ: 'Divar üçün keyfiyyətli metal profillər (CW/UW).',
            RU: 'Качественные металлические профили для стен (CW/UW).',
            EN: 'Quality metal profiles for walls (CW/UW).'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '15',
        type: 'product',
        name: { AZ: 'Tavan Profili CD (Gilan Knauf 4m 0.50)', RU: 'Потолочный Профиль CD', EN: 'Ceiling Profile CD' },
        price: 1.40,
        currency: 'AZN',
        image: '/material_profile_ceiling.jpg',
        description: {
            AZ: 'Tavan üçün möhkəm metal profillər (CD).',
            RU: 'Прочные металлические профили для потолка (CD).',
            EN: 'Strong metal profiles for ceilings (CD).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '24',
        type: 'product',
        name: { AZ: 'Tavan Profili UD (Gilan Knauf 3m 50)', RU: 'Потолочный Профиль UD', EN: 'Ceiling Profile UD' },
        price: 1.20,
        currency: 'AZN',
        image: '/material_profile_ceiling.jpg',
        description: {
            AZ: 'Tavan üçün möhkəm metal profillər (UD).',
            RU: 'Прочные металлические профили для потолка (UD).',
            EN: 'Strong metal profiles for ceilings (UD).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '16',
        type: 'product',
        name: { AZ: 'Knauf İzolyasiya', RU: 'Изоляция Knauf', EN: 'Knauf Insulation' },
        price: 0,
        currency: 'AZN',
        image: '/material_insulation_knauf.jpg',
        description: {
            AZ: 'Yüksək keyfiyyətli Knauf istilik və səs izolyasiyası.',
            RU: 'Высококачественная тепло- и звукоизоляция Knauf.',
            EN: 'High quality Knauf thermal and sound insulation.'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '17',
        type: 'product',
        name: { AZ: 'Sunta Vidası (Meridiyaen 5x50)', RU: 'Шуруп Meridiyaen (5x50)', EN: 'Meridiyaen Screws (5x50)' },
        price: 5,
        currency: 'AZN',
        image: '/accessory_screws_sunta.png',
        description: {
            AZ: 'Keyfiyyətli sunta vidası (5x50).',
            RU: 'Качественные шурупы (5x50).',
            EN: 'Quality drywall screws (Meridiyaen 5x50).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '18',
        type: 'product',
        name: { AZ: 'T-Profil Birləşdirici', RU: 'Т-Соединитель', EN: 'T-Profile Connector' },
        price: 0,
        currency: 'AZN',
        image: '/accessory_bracket_t.png',
        description: {
            AZ: 'Profilləri birləşdirmək üçün T-formalı detal.',
            RU: 'Т-образная деталь для соединения профилей.',
            EN: 'T-shaped connector for profiles.'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '19',
        type: 'product',
        name: { AZ: 'U-Birləşdirici (Eqreb)', RU: 'Прямой Подвес', EN: 'Direct Suspension' },
        price: 0.25,
        currency: 'AZN',
        image: '/accessory_bracket_direct.jpg',
        description: {
            AZ: 'Tavan üçün düz askı (U-birləşdirici/Eqreb).',
            RU: 'Прямой подвес для потолка (U-крепление).',
            EN: 'Direct suspension bracket for ceilings.'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '20',
        type: 'product',
        name: { AZ: 'Knauf Vidası (3.5x11 / 25)', RU: 'Шуруп Knauf (3.5x11 / 25)', EN: 'Knauf Screw (3.5x11 / 25)' },
        price: 16,
        currency: 'AZN',
        image: '/accessory_screws_knauf.jpg',
        description: {
            AZ: 'Orijinal Knauf gipskarton vidaları (1000 ədəd).',
            RU: 'Оригинальные шурупы Knauf для гипсокартона (1000 шт).',
            EN: 'Original Knauf drywall screws (1000 pcs).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '21',
        type: 'product',
        name: { AZ: 'Anker Paz (Celik Dupel)', RU: 'Анкер-клин', EN: 'Ceiling Anchor Wedge' },
        price: 0.15,
        currency: 'AZN',
        image: '/accessory_anchor_wedge.png',
        description: {
            AZ: 'Tavan montajı üçün metal anker paz.',
            RU: 'Металлический анкер-клин для потолочного монтажа.',
            EN: 'Metal wedge anchor for ceiling installation.'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '25',
        type: 'product',
        name: { AZ: 'Probka Qırmızı (7 packa)', RU: 'Дюбель Красный', EN: 'Red Wall Plug' },
        price: 1.20,
        currency: 'AZN',
        image: '/accessory_anchor_wedge.png',
        description: {
            AZ: 'Qırmızı probka.',
            RU: 'Красный дюбель.',
            EN: 'Red wall plug.'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '22',
        type: 'product',
        name: { AZ: 'Knauf İzolyasiya (Rulon)', RU: 'Рулонная Изоляция Knauf', EN: 'Knauf Insulation Roll' },
        price: 0,
        currency: 'AZN',
        image: '/material_insulation_roll_knauf.jpg',
        description: {
            AZ: 'Rulon formasında Knauf istilik izolyasiyası.',
            RU: 'Теплоизоляция Knauf в рулонах.',
            EN: 'Knauf thermal insulation roll.'
        },
        isActive: true,
        isPriceVisible: false
    }
];

// ==========================================
// YOUR SERVICES
// ==========================================
export const initialServices: Service[] = [
    {
        id: 'sade-tavan',
        type: 'service',
        name: { AZ: 'Sadə Tavan', RU: 'Простой Потолок', EN: 'Simple Ceiling' },
        description: {
            AZ: '💰 10 AZN / m²\nSadə düz gipskarton tavan.\nKlassik və minimalist dizayn.',
            RU: '💰 10 AZN / м²\nПростой ровный гипсокартонный потолок.\nКлассический и минималистичный дизайн.',
            EN: '💰 10 AZN / m²\nSimple flat drywall ceiling.\nClassic and minimalist design.'
        },
        image: '/service_simple_ceiling_new.png',
        isActive: true,
        price: 10,
        currency: 'AZN',
        isPriceVisible: true
    },
    {
        id: 'fiqurlu-tavan',
        type: 'service',
        name: { AZ: 'Fiqurlu Tavan', RU: 'Фигурный Потолок', EN: 'Figured Ceiling' },
        description: {
            AZ: '💰 20 AZN / m²\nŞəxsi dizayn əsasında fiqurlu tavanlar.\nPremium və özəl görünüş.',
            RU: '💰 20 AZN / м²\nФигурные потолки по индивидуальному дизайну.\nПремиальный вид.',
            EN: '💰 20 AZN / m²\nFigured ceilings based on custom design.\nPremium and unique look.'
        },
        image: '/picture2.jpeg',
        isActive: true,
        price: 20,
        currency: 'AZN',
        isPriceVisible: true
    },
    {
        id: 'arakesme',
        type: 'service',
        name: { AZ: 'Arakəsmə', RU: 'Перегородка', EN: 'Partition' },
        description: {
            AZ: '💰 15 AZN / m²\nOtaqları bölmək üçün keyfiyyətli arakəsmələr.\nSəs izolyasiyası və möhkəmlik.',
            RU: '💰 15 AZN / м²\nКачественные перегородки для зонирования.\nЗвукоизоляция и прочность.',
            EN: '💰 15 AZN / m²\nQuality partitions for room dividing.\nSound insulation and durability.'
        },
        image: '/picture3.jpeg',
        isActive: true,
        price: 15,
        currency: 'AZN',
        isPriceVisible: true
    },
    {
        id: 'gizli-isiq',
        type: 'service',
        name: { AZ: 'Gizli İşıq', RU: 'Скрытый Свет', EN: 'Hidden Lighting' },
        description: {
            AZ: '💰 12 AZN / m²\nMüasir LED işıqlandırma sistemləri.\nİnteryerə xüsusi aura qatır.',
            RU: '💰 12 AZN / м²\nСовременные системы LED освещения.\nСоздает особую ауру в интерьере.',
            EN: '💰 12 AZN / m²\nModern LED lighting systems.\nAdds a special aura to the interior.'
        },
        image: '/picture8.jpeg',
        isActive: true,
        price: 12,
        currency: 'AZN',
        isPriceVisible: true
    },
    {
        id: 'tv-stand',
        type: 'service',
        name: { AZ: 'TV Dizayn', RU: 'ТВ Дизайн', EN: 'TV Design' },
        description: {
            AZ: '💰 250 AZN\nTelevizor üçün xüsusi yığılmış stendlər.\nFunksional və estetik görünüş.',
            RU: '💰 250 AZN\nСпециальные стенды для телевизоров.\nФункциональный и эстетичный вид.',
            EN: '💰 250 AZN\nCustom built stands for TVs.\nFunctional and aesthetic look.'
        },
        image: '/picture9.jpeg',
        isActive: true,
        price: 250,
        currency: 'AZN',
        isPriceVisible: true
    },
];

// ==========================================
// YOUR WORK / PORTFOLIO (VIDEOS GO HERE!)
// ==========================================
export const initialWorkItems: WorkItem[] = [
    {
        id: 'img1',
        type: 'work',
        title: { AZ: 'Alcipanbaku dekorativ tavan layihəsi Bakı', RU: 'Декоративный потолок Alcipanbaku Баку', EN: 'Alcipanbaku decorative ceiling project Baku' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture1.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img2',
        type: 'work',
        title: { AZ: 'Alcipanbaku alçipan tavan montajı', RU: 'Монтаж гипсокартонного потолка Alcipanbaku', EN: 'Alcipanbaku drywall ceiling installation' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture2.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img3',
        type: 'work',
        title: { AZ: 'Alcipanbaku divar arakesməsi', RU: 'Перегородка из гипсокартона Alcipanbaku', EN: 'Alcipanbaku wall partition' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture3.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img4',
        type: 'work',
        title: { AZ: 'Alcipanbaku knauf alçipan işləri', RU: 'Работы Knauf Alcipanbaku', EN: 'Alcipanbaku Knauf drywall works' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture4.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img5',
        type: 'work',
        title: { AZ: 'Alcipanbaku restoran tavan dizaynı', RU: 'Дизайн потолка ресторана Alcipanbaku', EN: 'Alcipanbaku restaurant ceiling design' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture5.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img6',
        type: 'work',
        title: { AZ: 'Alcipanbaku ofis alçipan layihəsi', RU: 'Офисный проект Alcipanbaku', EN: 'Alcipanbaku office drywall project' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture6.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img7',
        type: 'work',
        title: { AZ: 'Alcipanbaku mənzil tavan təmiri', RU: 'Ремонт потолка квартиры Alcipanbaku', EN: 'Alcipanbaku apartment ceiling renovation' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture7.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img8',
        type: 'work',
        title: { AZ: 'Alcipanbaku gizli işıqlandırma', RU: 'Скрытое освещение Alcipanbaku', EN: 'Alcipanbaku hidden lighting' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture8.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img9',
        type: 'work',
        title: { AZ: 'Alcipanbaku tv stend dizaynı', RU: 'Дизайн ТВ стенда Alcipanbaku', EN: 'Alcipanbaku TV stand design' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture9.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img10',
        type: 'work',
        title: { AZ: 'Alcipanbaku müasir tavanlar', RU: 'Современные потолки Alcipanbaku', EN: 'Alcipanbaku modern ceilings' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture10.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: '20',
        type: 'work',
        title: { AZ: 'Video İcmal 1', RU: 'Видео Обзор 1', EN: 'Video Review 1' },
        description: { AZ: 'İş prosesindən video icmal.', RU: 'Видеообзор рабочего процесса.', EN: 'Video review of the work process.' },
        imageUrl: '/brain/poster_final.png',
        videoUrl: '/video1.mp4',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: '21',
        type: 'work',
        title: { AZ: 'Video İcmal 2', RU: 'Видео Обзор 2', EN: 'Video Review 2' },
        description: { AZ: 'İş prosesindən video icmal.', RU: 'Видеообзор рабочего процесса.', EN: 'Video review of the work process.' },
        imageUrl: '/brain/poster_final.png',
        videoUrl: '/video2.mp4',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: '22',
        type: 'work',
        title: { AZ: 'Video İcmal 3', RU: 'Видео Обзор 3', EN: 'Video Review 3' },
        description: { AZ: 'İş prosesindən video icmal.', RU: 'Видеообзор рабочего процесса.', EN: 'Video review of the work process.' },
        imageUrl: '/brain/poster_final.png',
        videoUrl: '/video3.mp4',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: '23',
        type: 'work',
        title: { AZ: 'Video İcmal 4', RU: 'Видео Обзор 4', EN: 'Video Review 4' },
        description: { AZ: 'İş prosesindən video icmal.', RU: 'Видеообзор рабочего процесса.', EN: 'Video review of the work process.' },
        imageUrl: '/brain/poster_final.png',
        videoUrl: '/video4.mp4',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: '24',
        type: 'work',
        title: { AZ: 'Video İcmal 5', RU: 'Видео Обзор 5', EN: 'Video Review 5' },
        description: { AZ: 'İş prosesindən video icmal.', RU: 'Видеообзор рабочего процесса.', EN: 'Video review of the work process.' },
        imageUrl: '/brain/poster_final.png',
        videoUrl: '/video5.mp4',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: '25',
        type: 'work',
        title: { AZ: 'Video İcmal 6', RU: 'Видео Обзор 6', EN: 'Video Review 6' },
        description: { AZ: 'İş prosesindən video icmal.', RU: 'Видеообзор рабочего процесса.', EN: 'Video review of the work process.' },
        imageUrl: '/brain/poster_final.png',
        videoUrl: '/video6.mp4',
        tikTokUrl: '',
        isActive: true
    }
];
