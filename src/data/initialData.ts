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
        name: { AZ: '20 m² Paket', RU: 'Пакет 20 м²', EN: '20 m² Package' },
        price: 200,
        currency: 'AZN',
        image: '/picture1.jpeg',
        description: {
            AZ: '✔ 20 m² üçün tam təmir paketi\n✔ Material + Usta\n✔ Sərfəli qiymət\n\n👉 Kiçik otaqlar üçün idealdır',
            RU: '✔ Полный пакет ремонта для 20 м²\n✔ Материал + Мастер\n✔ Выгодная цена\n\n👉 Идеально для небольших комнат',
            EN: '✔ Full renovation package for 20 m²\n✔ Material + Master\n✔ Affordable price\n\n👉 Ideal for small rooms'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '2',
        type: 'product',
        name: { AZ: '40 m² Paket', RU: 'Пакет 40 м²', EN: '40 m² Package' },
        price: 400,
        currency: 'AZN',
        image: '/picture2.jpeg',
        description: {
            AZ: '✔ 40 m² üçün tam təmir paketi\n✔ Material + Usta\n✔ Standart mənzillər üçün\n\n👉 Ən çox seçilən ölçü',
            RU: '✔ Полный пакет ремонта для 40 м²\n✔ Материал + Мастер\n✔ Для стандартных квартир\n\n👉 Самый популярный размер',
            EN: '✔ Full renovation package for 40 m²\n✔ Material + Master\n✔ For standard apartments\n\n👉 Most popular size'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '3',
        type: 'product',
        name: { AZ: '60 m² Paket', RU: 'Пакет 60 м²', EN: '60 m² Package' },
        price: 600,
        currency: 'AZN',
        image: '/picture3.jpeg',
        description: {
            AZ: '✔ 60 m² üçün tam təmir paketi\n✔ Material + Usta\n✔ Geniş mənzillər üçün\n\n👉 Böyük sahələr üçün sərfəli',
            RU: '✔ Полный пакет ремонта для 60 м²\n✔ Материал + Мастер\n✔ Для просторных квартир\n\n👉 Выгодно для больших площадей',
            EN: '✔ Full renovation package for 60 m²\n✔ Material + Master\n✔ For spacious apartments\n\n👉 Profitable for large areas'
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
        name: { AZ: 'Asma Tavanlar', RU: 'Подвесные Потолки', EN: 'Suspended Ceilings' },
        description: {
            AZ: 'Sadə və fiqurlu asma tavanların peşəkar montajı.',
            RU: 'Профессиональный монтаж простых и фигурных подвесных потолков.',
            EN: 'Professional installation of simple and figured suspended ceilings.'
        },
        image: '/picture2.jpeg',
        isActive: true
    },
    {
        id: '2',
        type: 'service',
        name: { AZ: 'Dekorativ Dizayn', RU: 'Декоративный Дизайн', EN: 'Decorative Design' },
        description: {
            AZ: 'İnteryerə özəl dekorativ tavan və divar həlləri.',
            RU: 'Декоративные решения для потолков и стен под интерьер.',
            EN: 'Custom decorative ceiling and wall solutions for interiors.'
        },
        image: '/picture1.jpeg',
        isActive: true
    },
    {
        id: '3',
        type: 'service',
        name: { AZ: 'Divar Arakəsmələri', RU: 'Стеновые Перегородки', EN: 'Wall Partitions' },
        description: {
            AZ: 'Məkanın bölünməsi üçün gipskarton arakəsmələr.',
            RU: 'Гипсокартонные перегородки для зонирования пространства.',
            EN: 'Drywall partitions for space zoning.'
        },
        image: '/picture3.jpeg',
        isActive: true
    },
    {
        id: '4',
        type: 'service',
        name: { AZ: 'Gizli İşıqlandırma', RU: 'Скрытое Освещение', EN: 'Hidden Lighting' },
        description: {
            AZ: 'Tavan və divarlarda gizli LED işıqlandırma sistemləri.',
            RU: 'Системы скрытого светодиодного освещения на потолках и стенах.',
            EN: 'Hidden LED lighting systems on ceilings and walls.'
        },
        image: '/picture8.jpeg',
        isActive: true
    },
    {
        id: '5',
        type: 'service',
        name: { AZ: 'TV Stend və Fiqurlar', RU: 'ТВ Стенды и Фигуры', EN: 'TV Stands & Figures' },
        description: {
            AZ: 'Gipskartondan yığılan TV stendlər və dekorativ fiqurlar.',
            RU: 'ТВ-стенды и декоративные фигуры из гипсокартона.',
            EN: 'Gypsum TV stands and decorative figures.'
        },
        image: '/picture9.jpeg',
        isActive: true
    },
    {
        id: '6',
        type: 'service',
        name: { AZ: 'Ofis və Obyekt Təmiri', RU: 'Ремонт Офисов и Объектов', EN: 'Office & Object Renovation' },
        description: {
            AZ: 'Ofis və kommersiya obyektlərində alçipan işləri.',
            RU: 'Гипсокартонные работы в офисах и коммерческих объектах.',
            EN: 'Drywall works in offices and commercial objects.'
        },
        image: '/picture6.jpeg',
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
