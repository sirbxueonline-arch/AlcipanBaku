import { Product, Service, WorkItem } from '@/types';

// ==========================================
// YOUR PRODUCTS
// ==========================================
// ==========================================
// YOUR PACKAGES (Bundles)
// ==========================================
export const initialPackages: Product[] = [
    {
        id: '1',
        type: 'product',
        name: { AZ: 'Paket 1 — Basic Premium', RU: 'Пакет 1 — Basic Premium', EN: 'Package 1 — Basic Premium' },
        price: 40,
        currency: 'AZN / m²',
        image: '/brain/package_ai_1.png',
        description: {
            AZ: '✔ Standart alçıpan\n✔ Metal profil sistemi\n✔ Peşəkar montaj\n✔ Səliqəli təhvil\n\n👉 Mənzillər üçün uyğundur',
            RU: '✔ Стандартный гипсокартон\n✔ Система металлических профилей\n✔ Профессиональный монтаж\n✔ Аккуратная сдача\n\n👉 Подходит для квартир',
            EN: '✔ Standard drywall\n✔ Metal profile system\n✔ Professional installation\n✔ Clean delivery\n\n👉 Suitable for apartments'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '2',
        type: 'product',
        name: { AZ: 'Paket 2 — Comfort Premium', RU: 'Пакет 2 — Comfort Premium', EN: 'Package 2 — Comfort Premium' },
        price: 55,
        currency: 'AZN / m²',
        image: '/brain/package_ai_2.png',
        description: {
            AZ: '✔ Dizaynlı tavan\n✔ Gizli LED üçün yer\n✔ Keyfiyyətli material\n✔ Usta + material\n\n👉 Ən çox seçilən paket',
            RU: '✔ Дизайнерский потолок\n✔ Место для скрытого LED\n✔ Качественный материал\n✔ Мастер + материал\n\n👉 Самый популярный пакет',
            EN: '✔ Designed ceiling\n✔ Place for hidden LED\n✔ Quality material\n✔ Master + material\n\n👉 Most popular package'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '3',
        type: 'product',
        name: { AZ: 'Paket 3 — Premium Plus', RU: 'Пакет 3 — Premium Plus', EN: 'Package 3 — Premium Plus' },
        price: 50,
        currency: 'AZN / m²',
        image: '/brain/package_ai_3.png',
        description: {
            AZ: '✔ Profil + alçıpan\n✔ İzolyasiya imkanı\n✔ Dəqiq ölçü və montaj\n\n👉 Ofis və yaşayış sahələri üçün',
            RU: '✔ Профиль + гипсокартон\n✔ Возможность изоляции\n✔ Точные замеры и монтаж\n\n👉 Для офисов и жилых помещений',
            EN: '✔ Profile + drywall\n✔ Insulation option\n✔ Precise measurement and installation\n\n👉 For offices and living areas'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '4',
        type: 'product',
        name: { AZ: 'Paket 4 — Exclusive Obyekt', RU: 'Пакет 4 — Exclusive Obyekt', EN: 'Package 4 — Exclusive Obyekt' },
        price: 80,
        currency: 'AZN / m²',
        image: '/brain/package_ai_4.png',
        description: {
            AZ: '✔ Ölçü və planlama\n✔ Material + usta\n✔ Vaxtında və məsuliyyətli təhvil\n\n👉 Statuslu obyektlər üçün (Klinika / Restoran / Ofis)',
            RU: '✔ Замер и планирование\n✔ Материал + мастер\n✔ Своевременная и ответственная сдача\n\n👉 Для статусных объектов (Клиника / Ресторан / Офис)',
            EN: '✔ Measurement and planning\n✔ Material + master\n✔ Timely and responsible delivery\n\n👉 For prestige objects (Clinic / Restaurant / Office)'
        },
        isActive: true,
        isPriceVisible: true
    }
];

// ==========================================
// YOUR PRODUCTS (Materials)
// ==========================================
export const initialProducts: Product[] = [
    {
        id: '4',
        type: 'product',
        name: { AZ: 'Gipskarton Lövhə', RU: 'Гипсокартон', EN: 'Gypsum Board' },
        price: 0,
        currency: 'AZN',
        image: '/brain/prod_gypsum_board_1768927187453.png',
        description: {
            AZ: 'Divar və tavan üçün gipskarton lövhələr.',
            RU: 'Гипсокартонные листы для стен и потолков.',
            EN: 'Gypsum boards / drywall sheets for walls and ceilings.'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '5',
        type: 'product',
        name: { AZ: 'Metal Profillər', RU: 'Металлические Профили', EN: 'Metal Profiles' },
        price: 0,
        currency: 'AZN',
        image: '/brain/prod_metal_profiles_1768927202928.png',
        description: {
            AZ: 'Alçipan sistemləri üçün dayaq və istiqamətverici profillər.',
            RU: 'Стойки и направляющие профили для гипсокартонных систем.',
            EN: 'Metal profiles (studs and tracks for drywall systems).'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '6',
        type: 'product',
        name: { AZ: 'Gips Tozları', RU: 'Гипсовый Порошок', EN: 'Gypsum Powder' },
        price: 0,
        currency: 'AZN',
        image: '/brain/prod_gypsum_powder_1768927224616.png',
        description: {
            AZ: 'Yüksək keyfiyyətli suvaq və gips tozları.',
            RU: 'Высококачественная штукатурка и гипсовый порошок.',
            EN: 'Bags of plaster / gypsum powder.'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '7',
        type: 'product',
        name: { AZ: 'Dərz Dolğusu', RU: 'Шпаклевка', EN: 'Joint Compound' },
        price: 0,
        currency: 'AZN',
        image: '/brain/prod_joint_compound_1768927241575.png',
        description: {
            AZ: 'Təmir və tamamlama işləri üçün dərz dolğusu.',
            RU: 'Шпаклевка для ремонтных и отделочных работ.',
            EN: 'Joint compound / finishing plaster.'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '8',
        type: 'product',
        name: { AZ: 'İzolyasiya Materialları', RU: 'Изоляция', EN: 'Insulation' },
        price: 0,
        currency: 'AZN',
        image: '/brain/prod_insulation_1768927256372.png',
        description: {
            AZ: 'İstilik və səs izolyasiyası üçün rulon və panellər.',
            RU: 'Рулоны и панели для тепло- и звукоизоляции.',
            EN: 'Insulation rolls or panels.'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '9',
        type: 'product',
        name: { AZ: 'Tavan Panelləri', RU: 'Потолочные Панели', EN: 'Ceiling Panels' },
        price: 0,
        currency: 'AZN',
        image: '/brain/prod_ceiling_panels_1768927272094.png',
        description: {
            AZ: 'Asma tavan sistemləri üçün panellər.',
            RU: 'Панели для систем подвесных потолков.',
            EN: 'Ceiling boards / ceiling system panels.'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '10',
        type: 'product',
        name: { AZ: 'Aksesuarlar', RU: 'Аксессуары', EN: 'Accessories' },
        price: 0,
        currency: 'AZN',
        image: '/brain/prod_accessories_1768927295546.png',
        description: {
            AZ: 'Künclük, şrup və birləşdirici detallar.',
            RU: 'Уголки, саморезы и соединительные детали.',
            EN: 'Construction accessories (corner beads, trims, connectors).'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '11',
        type: 'product',
        name: { AZ: 'Tikinti Panelləri', RU: 'Строительные Панели', EN: 'Building Panels' },
        price: 0,
        currency: 'AZN',
        image: '/brain/prod_building_panels_1768927313893.png',
        description: {
            AZ: 'Paletlərdə yığılmış tikinti panelləri.',
            RU: 'Строительные панели, сложенные на поддонах.',
            EN: 'Stacked building panels on pallets.'
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
        id: '1',
        type: 'service',
        name: { AZ: 'Asma Tavan Ustası', RU: 'Мастер навесных потолков', EN: 'Suspended Ceiling Master' },
        description: {
            AZ: 'İstənilən dizaynda asma tavanların yığılması.',
            RU: 'Монтаж навесных потолков любого дизайна.',
            EN: 'Installation of suspended ceilings of any design.'
        },
        image: '/brain/service_suspended_ceiling_master_1768927020516.png',
        isActive: true
    }
];

// ==========================================
// YOUR WORK / PORTFOLIO (VIDEOS GO HERE!)
// ==========================================
export const initialWorkItems: WorkItem[] = [
    {
        id: '1',
        type: 'work',
        title: { AZ: 'Müasir Ofis Təmiri', RU: 'Ремонт современного офиса', EN: 'Modern Office Renovation' },
        description: {
            AZ: 'Bakı Ağ Şəhər ofis layihəsi. Tam alçipan və boya işləri.',
            RU: 'Офисный проект Baku White City. Полные гипсокартонные и покрасочные работы.',
            EN: 'Baku White City office project. Full plasterboard and painting works.'
        },
        imageUrl: '/brain/tiktok_placeholder_bg.png',
        videoUrl: '', // YouTube or other
        tikTokUrl: 'https://www.tiktok.com/@alcipanbaku/video/7450750858331000072?lang=en', // https://www.tiktok.com/@username/video/id
        isActive: true
    },

    {
        id: '3',
        type: 'work',
        title: { AZ: 'Alçipan İşləri', RU: 'Гипсокартонные Работы', EN: 'Drywall Works' },
        description: { AZ: 'TikTok Video', RU: 'TikTok Видео', EN: 'TikTok Video' },
        imageUrl: '/brain/tiktok_placeholder_bg.png',
        videoUrl: '',
        tikTokUrl: 'https://www.tiktok.com/@alcipanbaku/video/7285807537440492801',
        isActive: true
    },
    {
        id: '4',
        type: 'work',
        title: { AZ: 'Alçipan İşləri', RU: 'Гипсокартонные Работы', EN: 'Drywall Works' },
        description: { AZ: 'TikTok Video', RU: 'TikTok Видео', EN: 'TikTok Video' },
        imageUrl: '/brain/tiktok_placeholder_bg.png',
        videoUrl: '',
        tikTokUrl: 'https://www.tiktok.com/@alcipanbaku/video/7194775292777467138',
        isActive: true
    },
    {
        id: '5',
        type: 'work',
        title: { AZ: 'Alçipan İşləri', RU: 'Гипсокартонные Работы', EN: 'Drywall Works' },
        description: { AZ: 'TikTok Video', RU: 'TikTok Видео', EN: 'TikTok Video' },
        imageUrl: '/brain/tiktok_placeholder_bg.png',
        videoUrl: '',
        tikTokUrl: 'https://www.tiktok.com/@alcipanbaku/photo/7159261067879697665',
        isActive: true
    },
    {
        id: '6',
        type: 'work',
        title: { AZ: 'Alçipan İşləri', RU: 'Гипсокартонные Работы', EN: 'Drywall Works' },
        description: { AZ: 'TikTok Video', RU: 'TikTok Видео', EN: 'TikTok Video' },
        imageUrl: '/brain/tiktok_placeholder_bg.png',
        videoUrl: '',
        tikTokUrl: 'https://www.tiktok.com/@alcipanbaku/video/7099480720871148802',
        isActive: true
    },
    {
        id: '7',
        type: 'work',
        title: { AZ: 'Alçipan İşləri', RU: 'Гипсокартонные Работы', EN: 'Drywall Works' },
        description: { AZ: 'TikTok Video', RU: 'TikTok Видео', EN: 'TikTok Video' },
        imageUrl: '/brain/tiktok_placeholder_bg.png',
        videoUrl: '',
        tikTokUrl: 'https://www.tiktok.com/@alcipanbaku/video/7455942085934419218',
        isActive: true
    },
    {
        id: '8',
        type: 'work',
        title: { AZ: 'Alçipan İşləri', RU: 'Гипсокартонные Работы', EN: 'Drywall Works' },
        description: { AZ: 'TikTok Video', RU: 'TikTok Видео', EN: 'TikTok Video' },
        imageUrl: '/brain/tiktok_placeholder_bg.png',
        videoUrl: '',
        tikTokUrl: 'https://www.tiktok.com/@alcipanbaku/video/7391387880217660679',
        isActive: true
    }
];
