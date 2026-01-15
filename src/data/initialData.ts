import { Product, Service, WorkItem } from '@/types';

// ==========================================
// YOUR PRODUCTS
// ==========================================
export const initialProducts: Product[] = [
    {
        id: '1',
        type: 'product',
        name: { AZ: 'Gipskarton Lövhə (Adi)', RU: 'Гипсокартон (Обычный)', EN: 'Gypsum Board (Regular)' },
        price: 8.50,
        currency: 'AZN',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Gipskarton',
        description: {
            AZ: 'Divar və tavan üçün yüksək keyfiyyətli standart gipskarton.',
            RU: 'Высококачественный стандартный гипсокартон для стен и потолков.',
            EN: 'High quality standard gypsum board for walls and ceilings.'
        },
        isActive: true,
        isPriceVisible: true
    },
    {
        id: '2',
        type: 'product',
        name: { AZ: 'Profil (CD-60)', RU: 'Профиль (CD-60)', EN: 'Profile (CD-60)' },
        price: 3.20,
        currency: 'AZN',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Profil+CD-60',
        description: {
            AZ: 'Tavan və divar karkasları üçün metal profil.',
            RU: 'Металлический профиль для каркасов потолков и стен.',
            EN: 'Metal profile for ceiling and wall frameworks.'
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
