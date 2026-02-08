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
        price: 23, // 460 / 20 = 23
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
        price: 22, // 1100 / 50 = 22
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
        id: '13',
        type: 'product',
        name: { AZ: 'Alcipan yasil gilan knauf, 12.5mm', RU: 'Гипсокартон Гилан Зеленый, 12.5mm', EN: 'Gypsum Board Green Gilan, 12.5mm' },
        price: 12.50,
        currency: 'AZN',
        image: '/material_gypsum_moisture.jpg',
        description: {
            AZ: 'Nəmə davamlı yaşıl gipskarton lövhələr.',
            RU: 'Влагостойкие зеленые гипсокартонные листы.',
            EN: 'Moisture resistant green gypsum boards.'
        },
        isActive: true,
        isPriceVisible: true
    },

    {
        id: '15',
        type: 'product',
        name: { AZ: 'Tavan profili C knauf, 0.50mm', RU: 'Потолочный Профиль C Knauf, 0.50mm', EN: 'Ceiling Profile C Knauf, 0.50mm' },
        price: 1.90,
        currency: 'AZN',
        image: '/material_profile_ceiling.jpg',
        description: {
            AZ: 'Tavan üçün möhkəm metal profillər (CD). Qalınlıq: 0.50mm',
            RU: 'Прочные металлические профили для потолка (CD). Толщина: 0.50мм',
            EN: 'Strong metal profiles for ceilings (CD). Thickness: 0.50mm'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '24',
        type: 'product',
        name: { AZ: 'Tavan u profilili gilan knauf , 1.20', RU: 'Потолочный Профиль U Gilan Knauf, 1.20', EN: 'Ceiling Profile U Gilan Knauf, 1.20' },
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
        id: '21',
        type: 'product',
        name: { AZ: 'Celik dupel 0.20 qepik 1 eded', RU: 'Стальной Дюбель 0.20', EN: 'Steel Anchor 0.20' },
        price: 0.20,
        currency: 'AZN',
        image: '/accessory_anchor_wedge.png',
        description: {
            AZ: 'Tavan montajı üçün metal anker paz (eded).',
            RU: 'Металлический анкер-клин для потолочного монтажа (шт).',
            EN: 'Metal wedge anchor for ceiling installation (pc).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '19',
        type: 'product', // Mapping "Qozb mıraq? (12)" -> Likely "Eqreb" (hanger) box or similar. User said 25 manat. I will assume it is a pack or specific heavy duty item.
        name: { AZ: 'Eqreb knauf (12) 0.30 manat', RU: 'Подвес Knauf 12 (0.30)', EN: 'Hanger Knauf 12 (0.30)' }, 
        price: 0.30, 
        currency: 'AZN',
        image: '/accessory_bracket_direct.jpg',
        description: {
            AZ: 'Knauf Eqreb 12 asqı detalı (Eded).',
            RU: 'Подвес Knauf 12 (Штука).',
            EN: 'Knauf Hanger 12 (Piece).'
        },
        isActive: true,
        isPriceVisible: true
    },

    {
        id: '26', // New Item
        type: 'product',
        name: { AZ: 'Srup knauf goy packa, 1000 ededli', RU: 'Шуруп Knauf Синий, 1000 шт', EN: 'Screw Knauf Blue, 1000 pcs' },
        price: 16,
        currency: 'AZN',
        image: '/accessory_screws_knauf.jpg', // Reusing screw image
        description: {
            AZ: 'Knauf 25mm göy/boz vidaları (qutu - 1000 əd).',
            RU: 'Шурупы Knauf 25мм синие (коробка - 1000 шт).',
            EN: 'Knauf 25mm blue screws (box - 1000 pcs).'
        },
        isActive: true,
        isPriceVisible: true
    },


    {
        id: '17',
        type: 'product',
        name: { AZ: 'Srup meridian 5x50 , 6 manat', RU: 'Шуруп Meridian 5x50, 6', EN: 'Screw Meridian 5x50, 6' },
        price: 6,
        currency: 'AZN',
        image: '/accessory_screws_sunta.png',
        description: {
            AZ: 'Meridian sunta vidası (qutu).',
            RU: 'Шуруп Meridian (коробка).',
            EN: 'Meridian screw (box).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '27', // New Item - Klips
        type: 'product',
        name: { AZ: 'Klips knauf 1 eded 0.25 manat', RU: 'Клипс Knauf 1 шт 0.25', EN: 'Clips Knauf 1 pc 0.25' },
        price: 0.25,
        currency: 'AZN',
        image: '/accessory_bracket_direct.jpg', // Placeholder
        description: {
            AZ: 'Knauf tavan klisləri (eded).',
            RU: 'Клипсы для потолка Knauf (шт).',
            EN: 'Knauf ceiling clips (pc).'
        },
        isActive: true,
        isPriceVisible: true
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
