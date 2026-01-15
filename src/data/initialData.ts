import { Product, Service, WorkItem } from '@/types';

// ==========================================
// YOUR PRODUCTS
// ==========================================
export const initialProducts: Product[] = [
    {
        id: '1',
        type: 'product',
        name: { AZ: 'Gipskarton Lövhə', RU: 'Гипсокартон', EN: 'Gypsum Board' },
        price: 0,
        currency: 'AZN',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Gipskarton',
        description: {
            AZ: 'Divar və tavan üçün gipskarton lövhələr.',
            RU: 'Гипсокартонные листы для стен и потолков.',
            EN: 'Gypsum boards / drywall sheets for walls and ceilings.'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '2',
        type: 'product',
        name: { AZ: 'Metal Profillər', RU: 'Металлические Профили', EN: 'Metal Profiles' },
        price: 0,
        currency: 'AZN',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Profillar',
        description: {
            AZ: 'Alçipan sistemləri üçün dayaq və istiqamətverici profillər.',
            RU: 'Стойки и направляющие профили для гипсокартонных систем.',
            EN: 'Metal profiles (studs and tracks for drywall systems).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '3',
        type: 'product',
        name: { AZ: 'Gips Tozları', RU: 'Гипсовый Порошок', EN: 'Gypsum Powder' },
        price: 0,
        currency: 'AZN',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Gips+Tozu',
        description: {
            AZ: 'Yüksək keyfiyyətli suvaq və gips tozları.',
            RU: 'Высококачественная штукатурка и гипсовый порошок.',
            EN: 'Bags of plaster / gypsum powder.'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '4',
        type: 'product',
        name: { AZ: 'Dərz Dolğusu', RU: 'Шпаклевка', EN: 'Joint Compound' },
        price: 0,
        currency: 'AZN',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Derz+Dolgusu',
        description: {
            AZ: 'Təmir və tamamlama işləri üçün dərz dolğusu.',
            RU: 'Шпаклевка для ремонтных и отделочных работ.',
            EN: 'Joint compound / finishing plaster.'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '5',
        type: 'product',
        name: { AZ: 'İzolyasiya Materialları', RU: 'Изоляция', EN: 'Insulation' },
        price: 0,
        currency: 'AZN',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Izolyasiya',
        description: {
            AZ: 'İstilik və səs izolyasiyası üçün rulon və panellər.',
            RU: 'Рулоны и панели для тепло- и звукоизоляции.',
            EN: 'Insulation rolls or panels.'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '6',
        type: 'product',
        name: { AZ: 'Tavan Panelləri', RU: 'Потолочные Панели', EN: 'Ceiling Panels' },
        price: 0,
        currency: 'AZN',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Tavan+Panelleri',
        description: {
            AZ: 'Asma tavan sistemləri üçün panellər.',
            RU: 'Панели для систем подвесных потолков.',
            EN: 'Ceiling boards / ceiling system panels.'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '7',
        type: 'product',
        name: { AZ: 'Aksesuarlar', RU: 'Аксессуары', EN: 'Accessories' },
        price: 0,
        currency: 'AZN',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Aksesuarlar',
        description: {
            AZ: 'Künclük, şrup və birləşdirici detallar.',
            RU: 'Уголки, саморезы и соединительные детали.',
            EN: 'Construction accessories (corner beads, trims, connectors).'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '8',
        type: 'product',
        name: { AZ: 'Tikinti Panelləri', RU: 'Строительные Панели', EN: 'Building Panels' },
        price: 0,
        currency: 'AZN',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Paneller',
        description: {
            AZ: 'Paletlərdə yığılmış tikinti panelləri.',
            RU: 'Строительные панели, сложенные на поддонах.',
            EN: 'Stacked building panels on pallets.'
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
        id: '1',
        type: 'service',
        name: { AZ: 'Asma Tavan Ustası', RU: 'Мастер навесных потолков', EN: 'Suspended Ceiling Master' },
        description: {
            AZ: 'İstənilən dizaynda asma tavanların yığılması.',
            RU: 'Монтаж навесных потолков любого дизайна.',
            EN: 'Installation of suspended ceilings of any design.'
        },
        image: 'https://placehold.co/800x600/f1f5f9/475569?text=Asma+Tavan',
        isActive: true
    },
    {
        id: '2',
        type: 'service',
        name: { AZ: 'Alçipan Divar', RU: 'Гипсокартонные стены', EN: 'Plasterboard Walls' },
        description: {
            AZ: 'Otaqların bölünməsi və yeni divarların qurulması.',
            RU: 'Разделение комнат и возведение новых стен.',
            EN: 'Partitioning rooms and constructing new walls.'
        },
        image: 'https://placehold.co/800x600/f1f5f9/475569?text=Divar+Ishleri',
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
        imageUrl: 'https://placehold.co/800x450/1e293b/ffffff?text=Ofis+Layihasi',
        // PASTE YOUR YOUTUBE LINK HERE
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isActive: true
    },
    {
        id: '2',
        type: 'work',
        title: { AZ: 'Villa Tavan Dizaynı', RU: 'Дизайн потолка виллы', EN: 'Villa Ceiling Design' },
        description: {
            AZ: 'Gizli işıqlandırma ilə xüsusi dizayn.',
            RU: 'Особый дизайн со скрытым освещением.',
            EN: 'Special design with hidden lighting.'
        },
        imageUrl: 'https://placehold.co/800x450/1e293b/ffffff?text=Villa+Tavan',
        videoUrl: '', // Leave empty if no video
        isActive: true
    }
];
