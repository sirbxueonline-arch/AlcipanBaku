import { Product, Service, WorkItem } from '@/types';

// ==========================================
// YOUR PRODUCTS
// ==========================================
export const initialProducts: Product[] = [
    // --- PACKAGES (New) ---
    {
        id: '1',
        type: 'product',
        name: { AZ: 'Standart Tavan Paketi', RU: 'Стандартный Потолочный Пакет', EN: 'Standard Ceiling Package' },
        price: 0,
        currency: 'AZN',
        image: '/brain/standard_ceiling_package_1768926750907.png',
        description: {
            AZ: 'Alçıpan tavan + material + usta işi. Ölçüyə görə hesablanır, sürpriz yoxdur.',
            RU: 'Гипсокартонный потолок + материал + работа мастера. Рассчитывается по размеру, без сюрпризов.',
            EN: 'Drywall ceiling + material + master work. Calculated by size, no surprises.'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '2',
        type: 'product',
        name: { AZ: 'Divar Arakəsmə Paketi', RU: 'Пакет Стен и Перегородок', EN: 'Wall Partition Package' },
        price: 0,
        currency: 'AZN',
        image: '/brain/wall_partition_package_1768926767868.png',
        description: {
            AZ: 'Divar arakəsmə + material + usta. Səliqəli montaj və vaxtında təhvil.',
            RU: 'Стены и перегородки + материал + мастер. Аккуратный монтаж и сдача в срок.',
            EN: 'Wall partition + material + master. Clean installation and timely delivery.'
        },
        isActive: true,
        isPriceVisible: false
    },
    {
        id: '3',
        type: 'product',
        name: { AZ: 'Obyekt Paketi', RU: 'Объектный Пакет', EN: 'Commercial Project Package' },
        price: 0,
        currency: 'AZN',
        image: '/brain/commercial_project_package_1768926785310.png',
        description: {
            AZ: 'Klinika, restoran, ofis və iri layihələr. Layihə əsaslı və tam paket həll.',
            RU: 'Клиники, рестораны, офисы и крупные проекты. Проектные решения и полный пакет.',
            EN: 'Clinics, restaurants, offices and large projects. Project-based full package solutions.'
        },
        isActive: true,
        isPriceVisible: false
    },
    // --- MATERIALS (Restored) ---
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
        isPriceVisible: true
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
        isPriceVisible: true
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
        isPriceVisible: true
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
        isPriceVisible: true
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
        isPriceVisible: true
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
        isPriceVisible: true
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
        isPriceVisible: true
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
        image: '/brain/service_suspended_ceiling_master_1768927020516.png',
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
        image: '/brain/service_drywall_partition_1768927039333.png',
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
        imageUrl: '/brain/work_office_renovation_1768927355854.png',
        // PASTE YOUR YOUTUBE LINK HERE
        videoUrl: '',
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
        imageUrl: '/brain/work_villa_ceiling_1768927377672.png',
        videoUrl: '', // Leave empty if no video
        isActive: true
    }
];
