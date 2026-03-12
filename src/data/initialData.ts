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
        price: 12.00,
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
        image: '/accessory_anchors_wedge.png',
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
        type: 'product',
        name: { AZ: 'Eqreb knauf (12) 0.30 manat', RU: 'Подвес Knauf 12 (0.30)', EN: 'Hanger Knauf 12 (0.30)' },
        price: 0.30,
        currency: 'AZN',
        image: '/accessory_bracket_strip.png',
        description: {
            AZ: 'Knauf Eqreb 12 asqı detalı (Eded).',
            RU: 'Подвес Knauf 12 (Штука).',
            EN: 'Knauf Hanger 12 (Piece).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '26',
        type: 'product',
        name: { AZ: 'Srup knauf goy packa, 1000 ededli', RU: 'Шуруп Knauf Синий, 1000 шт', EN: 'Screw Knauf Blue, 1000 pcs' },
        price: 16,
        currency: 'AZN',
        image: '/accessory_screws_knauf_box.png',
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
        id: '27',
        type: 'product',
        name: { AZ: 'Klips knauf 1 eded 0.25 manat', RU: 'Клипс Knauf 1 шт 0.25', EN: 'Clips Knauf 1 pc 0.25' },
        price: 0.25,
        currency: 'AZN',
        image: '/accessory_anchor_wedge.png',
        description: {
            AZ: 'Knauf tavan klisləri (eded).',
            RU: 'Клипсы для потолка Knauf (шт).',
            EN: 'Knauf ceiling clips (pc).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '28',
        type: 'product',
        name: { AZ: 'Izolyasiya daş yunu knauf', RU: 'Изоляция каменная вата Knauf', EN: 'Stone wool insulation Knauf' },
        price: 40,
        currency: 'AZN',
        image: '/insulation_knauf_wool.png',
        description: {
            AZ: 'Yüksək keyfiyyətli istilik və səs izolyasiyası.',
            RU: 'Высококачественная тепло- и звукоизоляция.',
            EN: 'High quality heat and sound insulation.'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp14',
        type: 'product',
        name: { AZ: 'GP-14 Kölgə profili', RU: 'Теневой профиль GP-14', EN: 'Shadow profile GP-14' },
        price: 10,
        currency: 'AZN',
        image: '/GP-14.png',
        description: { AZ: '10.00 AZN / metr', RU: '10.00 AZN / метр', EN: '10.00 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp15',
        type: 'product',
        name: { AZ: 'GP-15 Gizli işıqlı kölgə profili', RU: 'Теневой профиль с подсветкой GP-15', EN: 'Hidden light shadow profile GP-15' },
        price: 14,
        currency: 'AZN',
        image: '/GP-15.png',
        description: { AZ: '14.00 AZN / metr', RU: '14.00 AZN / метр', EN: '14.00 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp17',
        type: 'product',
        name: { AZ: 'GP-17 Dekor işıqlandırma profili', RU: 'Декоративный профиль GP-17', EN: 'Decorative light profile GP-17' },
        price: 13,
        currency: 'AZN',
        image: '/GP-17.png',
        description: { AZ: '13.00 AZN / metr', RU: '13.00 AZN / метр', EN: '13.00 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp19',
        type: 'product',
        name: { AZ: 'GP-19 Gizli işıqlı kölgə profili', RU: 'Теневой профиль с подсветкой GP-19', EN: 'Hidden light shadow profile GP-19' },
        price: 15.30,
        currency: 'AZN',
        image: '/GP-19.png',
        description: { AZ: '15.30 AZN / metr', RU: '15.30 AZN / метр', EN: '15.30 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp21',
        type: 'product',
        name: { AZ: 'GP-21 Led profili (alçipan altı)', RU: 'Лед профиль GP-21', EN: 'LED profile GP-21' },
        price: 13,
        currency: 'AZN',
        image: '/GP-21.png',
        description: { AZ: '13.00 AZN / metr', RU: '13.00 AZN / метр', EN: '13.00 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp24',
        type: 'product',
        name: { AZ: 'GP-24 Gizli işıqlı Kölgəli plintus', RU: 'Скрытый плинтус GP-24', EN: 'Hidden skirting GP-24' },
        price: 12.50,
        currency: 'AZN',
        image: '/GP-24.png',
        description: { AZ: '12.50 AZN / metr', RU: '12.50 AZN / метр', EN: '12.50 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp25',
        type: 'product',
        name: { AZ: 'GP-25 Gizli işıqlı kölgə profili', RU: 'Теневой профиль GP-25', EN: 'Shadow profile GP-25' },
        price: 17.20,
        currency: 'AZN',
        image: '/GP-25.png',
        description: { AZ: '17.20 AZN / metr', RU: '17.20 AZN / метр', EN: '17.20 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp27',
        type: 'product',
        name: { AZ: 'GP-27 Gizli işıqlı kölgəli plintus', RU: 'Скрытый плинтус GP-27', EN: 'Hidden skirting GP-27' },
        price: 14,
        currency: 'AZN',
        image: '/GP-27.png',
        description: { AZ: '14.00 AZN / metr', RU: '14.00 AZN / метр', EN: '14.00 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },

    {
        id: 'gp31',
        type: 'product',
        name: { AZ: 'GP-31 Led profili (alçipan içi)', RU: 'Лед профиль GP-31', EN: 'LED profile GP-31' },
        price: 14,
        currency: 'AZN',
        image: '/GP-31.png',
        description: { AZ: '14.00 AZN / metr', RU: '14.00 AZN / метр', EN: '14.00 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp35',
        type: 'product',
        name: { AZ: 'GP-35 Kölgəli kontur işıqlandırma profili', RU: 'Контурный профиль GP-35', EN: 'Contour profile GP-35' },
        price: 17.50,
        currency: 'AZN',
        image: '/GP-35.png',
        description: { AZ: '17.50 AZN / metr', RU: '17.50 AZN / метр', EN: '17.50 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp41',
        type: 'product',
        name: { AZ: 'GP-41 Led profili (alçipan altı)', RU: 'Лед профиль GP-41', EN: 'LED profile GP-41' },
        price: 15,
        currency: 'AZN',
        image: '/GP-41.png',
        description: { AZ: '15.00 AZN / metr', RU: '15.00 AZN / метр', EN: '15.00 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp50',
        type: 'product',
        name: { AZ: 'GP-50 Gizli işıqlı kölgə profili', RU: 'Теневой профиль GP-50', EN: 'Shadow profile GP-50' },
        price: 22,
        currency: 'AZN',
        image: '/GP-50.png',
        description: { AZ: '22.00 AZN / metr', RU: '22.00 AZN / метр', EN: '22.00 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp51',
        type: 'product',
        name: { AZ: 'GP-51 Led profili (alçipan içi)', RU: 'Лед профиль GP-51', EN: 'LED profile GP-51' },
        price: 16,
        currency: 'AZN',
        image: '/GP-51.png',
        description: { AZ: '16.00 AZN / metr', RU: '16.00 AZN / метр', EN: '16.00 AZN / meter' },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: 'gp80',
        type: 'product',
        name: { AZ: 'GP-80 Gizli plintus (işıqlı)', RU: 'Скрытый плинтус GP-80', EN: 'Hidden skirting GP-80' },
        price: 15,
        currency: 'AZN',
        image: '/GP-80.png',
        description: { AZ: '15.00 AZN / metr', RU: '15.00 AZN / метр', EN: '15.00 AZN / meter' },
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
        name: { AZ: 'Sadə tavan', RU: 'Простой потолок', EN: 'Simple ceiling' },
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
        name: { AZ: 'Fiqurlu tavan', RU: 'Фигурный потолок', EN: 'Figured ceiling' },
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
        name: { AZ: 'Gizli işıqlı tavan', RU: 'Потолок со скрытой подсветкой', EN: 'Ceiling with hidden lighting' },
        description: {
            AZ: '💰 15 AZN / m²\nGeometrik panellər, gizli LED işıq kanalları.\nMüasir çoxsəviyyəli tavan.',
            RU: '💰 15 AZN / м²\nГеометрические панели, каналы скрытой LED подсветки.\nСовременный многоуровневый потолок.',
            EN: '💰 15 AZN / m²\nGeometric panels, hidden LED lighting channels.\nModern multi-level ceiling.'
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
        name: { AZ: 'TV stend dizaynı', RU: 'Дизайн ТВ стенда', EN: 'TV stand design' },
        description: {
            AZ: '💰 250 AZN\nAy və ulduz dekorativ divar, televizor üçün fon.\nFunksional və estetik görünüş.',
            RU: '💰 250 AZN\nДекор стены (полумесяц и звезда), фон для телевизора.\nФункциональный и эстетичный вид.',
            EN: '💰 250 AZN\nCrescent and star decorative wall, backdrop for TV.\nFunctional and aesthetic look.'
        },
        image: '/picture8.jpeg',
        price: 250,
        isActive: true,
        currency: 'AZN',
        isPriceVisible: true
    },
    {
        id: 'tv-stand',
        type: 'service',
        name: { AZ: 'Yataq otağı dizaynı', RU: 'Дизайн спальни', EN: 'Bedroom design' },
        description: {
            AZ: 'Dalğalı tavan və divar, müasir interyer.\nYataq otağı üçün xüsusi həll.',
            RU: 'Волнообразный потолок и стена, современный интерьер.\nСпециальное решение для спальни.',
            EN: 'Wave ceiling and wall, modern interior.\nCustom solution for bedroom.'
        },
        image: '/picture9.jpeg',
        isActive: true,
        price: 250,
        currency: 'AZN',
        isPriceVisible: true
    },
    {
        id: 'new-service-img',
        type: 'service',
        name: { AZ: 'Divar dekoru', RU: 'Декор стен', EN: 'Wall decor' },
        description: {
            AZ: 'Müasir divar panelləri və üzlüklər.\nDüz və relyefli teksturalar.',
            RU: 'Современные стеновые панели и облицовка.\nГладкие и рельефные текстуры.',
            EN: 'Modern wall panels and cladding.\nSmooth and textured finishes.'
        },
        image: '/image.png',
        isActive: true,
        price: 0,
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
        id: 'img11',
        type: 'work',
        title: { AZ: 'Yeni Layihə', RU: 'Новый Проект', EN: 'New Project' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/image.png',
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
    },
    {
        id: 'img12',
        type: 'work',
        title: { AZ: 'Alçipan İşləri', RU: 'Гипсокартонные Работы', EN: 'Drywall Works' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/works/work_12.png',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img13',
        type: 'work',
        title: { AZ: 'Alçipan İşləri', RU: 'Гипсокартонные Работы', EN: 'Drywall Works' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/works/work_13.png',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img14',
        type: 'work',
        title: { AZ: 'Alçipan İşləri', RU: 'Гипсокартонные Работы', EN: 'Drywall Works' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/works/work_14.png',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img15',
        type: 'work',
        title: { AZ: 'Qonaq Otağı', RU: 'Гостиная', EN: 'Living Room' },
        description: { AZ: 'Müasir qonaq otağı dizaynı.', RU: 'Современный дизайн гостиной.', EN: 'Modern living room design.' },
        imageUrl: '/works/living_room.png',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img16',
        type: 'work',
        title: { AZ: 'Alçipan İşləri', RU: 'Гипсокартонные Работы', EN: 'Drywall Works' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/works/work_15.jpg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img17',
        type: 'work',
        title: { AZ: 'Divar Dekoru', RU: 'Декор Стены', EN: 'Wall Decor' },
        description: { AZ: 'Xüsusi divar dekoru.', RU: 'Особый декор стены.', EN: 'Special wall decor.' },
        imageUrl: '/works/divar_dekoru.png',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    }
];
