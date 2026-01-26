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
        id: 'img1',
        type: 'work',
        title: { AZ: 'Layihə Şəkli 1', RU: 'Фото проекта 1', EN: 'Project Photo 1' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture1.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img2',
        type: 'work',
        title: { AZ: 'Layihə Şəkli 2', RU: 'Фото проекта 2', EN: 'Project Photo 2' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture2.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img3',
        type: 'work',
        title: { AZ: 'Layihə Şəkli 3', RU: 'Фото проекта 3', EN: 'Project Photo 3' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture3.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img4',
        type: 'work',
        title: { AZ: 'Layihə Şəkli 4', RU: 'Фото проекта 4', EN: 'Project Photo 4' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture4.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img5',
        type: 'work',
        title: { AZ: 'Layihə Şəkli 5', RU: 'Фото проекта 5', EN: 'Project Photo 5' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture5.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img6',
        type: 'work',
        title: { AZ: 'Layihə Şəkli 6', RU: 'Фото проекта 6', EN: 'Project Photo 6' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture6.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img7',
        type: 'work',
        title: { AZ: 'Layihə Şəkli 7', RU: 'Фото проекта 7', EN: 'Project Photo 7' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture7.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img8',
        type: 'work',
        title: { AZ: 'Layihə Şəkli 8', RU: 'Фото проекта 8', EN: 'Project Photo 8' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture8.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img9',
        type: 'work',
        title: { AZ: 'Layihə Şəkli 9', RU: 'Фото проекта 9', EN: 'Project Photo 9' },
        description: { AZ: 'Bizim işlərimizdən nümunə.', RU: 'Пример нашей работы.', EN: 'Example of our work.' },
        imageUrl: '/picture9.jpeg',
        videoUrl: '',
        tikTokUrl: '',
        isActive: true
    },
    {
        id: 'img10',
        type: 'work',
        title: { AZ: 'Layihə Şəkli 10', RU: 'Фото проекта 10', EN: 'Project Photo 10' },
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
