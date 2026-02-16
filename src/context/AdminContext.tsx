'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, Service, WorkItem, Language, Package } from '@/types';
import { initialProducts, initialServices, initialWorkItems, initialPackages } from '@/data/initialData';

interface AdminContextType {
    isAuthenticated: boolean;
    login: (email: string, pass: string) => boolean;
    logout: () => void;
    language: Language;
    setLanguage: (lang: Language) => void;

    // Data arrays
    packages: Package[];
    products: Product[];
    services: Service[];
    workItems: WorkItem[];

    // Update methods
    updatePackage: (id: string, updates: Partial<Package>) => void;
    updateProduct: (id: string, updates: Partial<Product>) => void;
    updateService: (id: string, updates: Partial<Service>) => void;
    updateWorkItem: (id: string, updates: Partial<WorkItem>) => void;

    // Add methods
    addPackage: () => void;
    addProduct: () => void;
    addService: () => void;
    addWorkItem: () => void;

    // Delete methods
    deletePackage: (id: string) => void;
    deleteProduct: (id: string) => void;
    deleteService: (id: string) => void;
    deleteWorkItem: (id: string) => void;

    // Toggle methods
    togglePackageStatus: (id: string) => void;
    toggleProductStatus: (id: string) => void;
    toggleServiceStatus: (id: string) => void;
    toggleWorkStatus: (id: string) => void;

    // Duplicate methods
    duplicatePackage: (id: string) => void;
    duplicateProduct: (id: string) => void;
    duplicateService: (id: string) => void;
    duplicateWorkItem: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('AZ');

    // Initialize State
    const [packages, setPackages] = useState<Package[]>(initialPackages);
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [services, setServices] = useState<Service[]>(initialServices);
    const [workItems, setWorkItems] = useState<WorkItem[]>(initialWorkItems);

    const [isLoaded, setIsLoaded] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        // DATA VERSIONING to force update when we change initial structures
        const DATA_VERSION = 'v7.9_add_image_png';
        const storedVersion = localStorage.getItem('alcipan_data_version');
        const isVersionMatch = storedVersion === DATA_VERSION;

        const storedPackages = localStorage.getItem('alcipan_packages');
        const storedProducts = localStorage.getItem('alcipan_products');
        const storedServices = localStorage.getItem('alcipan_services');
        const storedWork = localStorage.getItem('alcipan_work');

        // Check session
        const session = localStorage.getItem('alcipan_admin_session');
        if (session === 'true') {
            setIsAuthenticated(true);
        }

        // LOAD PACKAGES
        if (isVersionMatch && storedPackages) {
            try {
                const parsed = JSON.parse(storedPackages);
                if (Array.isArray(parsed) && parsed.length > 0) setPackages(parsed);
                else setPackages(initialPackages);
            } catch (e) {
                console.error("Failed to parse stored packages", e);
                setPackages(initialPackages);
            }
        } else {
            setPackages(initialPackages);
        }

        // LOAD PRODUCTS
        if (isVersionMatch && storedProducts) {
            try {
                const parsed = JSON.parse(storedProducts);
                if (Array.isArray(parsed) && parsed.length > 0) setProducts(parsed);
                else setProducts(initialProducts);
            } catch (e) {
                console.error("Failed to parse stored products", e);
                setProducts(initialProducts);
            }
        } else {
            setProducts(initialProducts);
        }

        // LOAD SERVICES
        if (isVersionMatch && storedServices) {
            try {
                const parsed = JSON.parse(storedServices);
                if (Array.isArray(parsed) && parsed.length > 0) setServices(parsed);
                else setServices(initialServices);
            } catch (e) {
                console.error("Failed to parse stored services", e);
                setServices(initialServices);
            }
        } else {
            setServices(initialServices);
        }

        // LOAD WORK ITEMS
        if (isVersionMatch && storedWork) {
            try {
                const parsed = JSON.parse(storedWork);
                if (Array.isArray(parsed) && parsed.length > 0) setWorkItems(parsed);
                else setWorkItems(initialWorkItems);
            } catch (e) {
                console.error("Failed to parse stored work", e);
                setWorkItems(initialWorkItems);
            }
        } else {
            setWorkItems(initialWorkItems);
        }

        // Update version in storage if needed
        if (!isVersionMatch) {
            localStorage.setItem('alcipan_data_version', DATA_VERSION);
            localStorage.setItem('alcipan_packages', JSON.stringify(initialPackages));
            localStorage.setItem('alcipan_products', JSON.stringify(initialProducts));
            localStorage.setItem('alcipan_services', JSON.stringify(initialServices));
            localStorage.setItem('alcipan_work', JSON.stringify(initialWorkItems));
        }

        setIsLoaded(true);
    }, []);

    // Effect to save changes
    useEffect(() => { if (isLoaded) localStorage.setItem('alcipan_packages', JSON.stringify(packages)); }, [packages, isLoaded]);
    useEffect(() => { if (isLoaded) localStorage.setItem('alcipan_products', JSON.stringify(products)); }, [products, isLoaded]);
    useEffect(() => { if (isLoaded) localStorage.setItem('alcipan_services', JSON.stringify(services)); }, [services, isLoaded]);
    useEffect(() => { if (isLoaded) localStorage.setItem('alcipan_work', JSON.stringify(workItems)); }, [workItems, isLoaded]);

    const login = (email: string, pass: string) => {
        if ((email === 'kaan.guluzada@gmail.com' && pass === 'K20120509') ||
            (email === 'alcipanusta123@gmail.com' && pass === 'Alcipan123123')) {
            setIsAuthenticated(true);
            localStorage.setItem('alcipan_admin_session', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('alcipan_admin_session');
    };

    // UPDATE METHODS
    const updatePackage = (id: string, updates: Partial<Package>) => {
        setPackages(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    };
    const updateProduct = (id: string, updates: Partial<Product>) => {
        setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    };
    const updateService = (id: string, updates: Partial<Service>) => {
        setServices(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
    };
    const updateWorkItem = (id: string, updates: Partial<WorkItem>) => {
        setWorkItems(prev => prev.map(w => w.id === id ? { ...w, ...updates } : w));
    };

    // ADD METHODS
    const addPackage = () => {
        const newPackage: Package = {
            id: `pkg${Date.now()}`,
            type: 'package',
            image: 'https://placehold.co/400x300?text=New+Package',
            name: { AZ: 'Yeni Paket', RU: 'Новый Пакет', EN: 'New Package' },
            description: { AZ: 'Paket detalları...', RU: 'Детали пакета...', EN: 'Package details...' },
            price: 0,
            currency: 'AZN',
            isActive: false,
            isPriceVisible: true,
            step: 20
        };
        setPackages(prev => [...prev, newPackage]);
    };

    const addProduct = () => {
        const newProduct: Product = {
            id: `p${Date.now()}`,
            type: 'product',
            image: 'https://placehold.co/400x300?text=New+Product',
            name: { AZ: 'Yeni Məhsul', RU: 'Новый продукт', EN: 'New Product' },
            description: { AZ: 'Təsvir əlavə edin...', RU: 'Добавить описание...', EN: 'Add description...' },
            price: 0,
            currency: 'AZN',
            isActive: false,
            isPriceVisible: true
        };
        setProducts(prev => [...prev, newProduct]);
    };

    const addService = () => {
        const newService: Service = {
            id: `s${Date.now()}`,
            type: 'service',
            image: 'https://placehold.co/600x337?text=New+Service',
            name: { AZ: 'Yeni Xidmət', RU: 'Новая услуга', EN: 'New Service' },
            description: { AZ: 'Xidmət haqqında məlumat...', RU: 'Информация об услуге...', EN: 'Service information...' },
            isActive: false,
            price: 0,
            currency: 'AZN',
            isPriceVisible: true
        };
        setServices(prev => [...prev, newService]);
    };

    const addWorkItem = () => {
        const newWork: WorkItem = {
            id: `w${Date.now()}`,
            type: 'work',
            imageUrl: 'https://placehold.co/600x400?text=Project+Photo',
            title: { AZ: 'Yeni Layihə', RU: 'Новый проект', EN: 'New Project' },
            description: { AZ: 'Layihə təsviri...', RU: 'Описание проекта...', EN: 'Project description...' },
            isActive: false
        };
        setWorkItems(prev => [...prev, newWork]);
    };

    // DELETE METHODS
    const deletePackage = (id: string) => {
        if (confirm('Are you sure you want to delete this package?')) {
            setPackages(prev => prev.filter(p => p.id !== id));
        }
    };
    const deleteProduct = (id: string) => {
        if (confirm('Are you sure you want to delete this product?')) {
            setProducts(prev => prev.filter(p => p.id !== id));
        }
    };
    const deleteService = (id: string) => {
        if (confirm('Are you sure you want to delete this service?')) {
            setServices(prev => prev.filter(s => s.id !== id));
        }
    };
    const deleteWorkItem = (id: string) => {
        if (confirm('Are you sure you want to delete this project?')) {
            setWorkItems(prev => prev.filter(w => w.id !== id));
        }
    };

    // TOGGLE METHODS
    const togglePackageStatus = (id: string) => {
        setPackages(prev => prev.map(p => p.id === id ? { ...p, isActive: !p.isActive } : p));
    };
    const toggleProductStatus = (id: string) => {
        setProducts(prev => prev.map(p => p.id === id ? { ...p, isActive: !p.isActive } : p));
    };
    const toggleServiceStatus = (id: string) => {
        setServices(prev => prev.map(s => s.id === id ? { ...s, isActive: !s.isActive } : s));
    };
    const toggleWorkStatus = (id: string) => {
        setWorkItems(prev => prev.map(w => w.id === id ? { ...w, isActive: !w.isActive } : w));
    };

    // DUPLICATE METHODS
    const duplicatePackage = (id: string) => {
        const itemToClone = packages.find(p => p.id === id);
        if (itemToClone) {
            const newItem: Package = {
                ...itemToClone,
                id: `pkg${Date.now()}`,
                name: {
                    AZ: `${itemToClone.name.AZ} (Copy)`,
                    RU: `${itemToClone.name.RU} (Copy)`,
                    EN: `${itemToClone.name.EN} (Copy)`
                }
            };
            setPackages(prev => [...prev, newItem]);
        }
    };

    const duplicateProduct = (id: string) => {
        const itemToClone = products.find(p => p.id === id);
        if (itemToClone) {
            const newItem: Product = {
                ...itemToClone,
                id: `p${Date.now()}`,
                name: {
                    AZ: `${itemToClone.name.AZ} (Copy)`,
                    RU: `${itemToClone.name.RU} (Copy)`,
                    EN: `${itemToClone.name.EN} (Copy)`
                }
            };
            setProducts(prev => [...prev, newItem]);
        }
    };

    const duplicateService = (id: string) => {
        const itemToClone = services.find(s => s.id === id);
        if (itemToClone) {
            const newItem: Service = {
                ...itemToClone,
                id: `s${Date.now()}`,
                name: {
                    AZ: `${itemToClone.name.AZ} (Copy)`,
                    RU: `${itemToClone.name.RU} (Copy)`,
                    EN: `${itemToClone.name.EN} (Copy)`
                }
            };
            setServices(prev => [...prev, newItem]);
        }
    };

    const duplicateWorkItem = (id: string) => {
        const itemToClone = workItems.find(w => w.id === id);
        if (itemToClone) {
            const newItem: WorkItem = {
                ...itemToClone,
                id: `w${Date.now()}`,
                title: {
                    AZ: `${itemToClone.title.AZ} (Copy)`,
                    RU: `${itemToClone.title.RU} (Copy)`,
                    EN: `${itemToClone.title.EN} (Copy)`
                }
            };
            setWorkItems(prev => [...prev, newItem]);
        }
    };

    return (
        <AdminContext.Provider value={{
            isAuthenticated,
            login,
            logout,
            language,
            setLanguage,
            // Data
            packages, products, services, workItems,
            // Update
            updatePackage, updateProduct, updateService, updateWorkItem,
            // Add
            addPackage, addProduct, addService, addWorkItem,
            // Delete
            deletePackage, deleteProduct, deleteService, deleteWorkItem,
            // Toggle
            togglePackageStatus, toggleProductStatus, toggleServiceStatus, toggleWorkStatus,
            // Duplicate
            duplicatePackage, duplicateProduct, duplicateService, duplicateWorkItem
        }}>
            {children}
        </AdminContext.Provider>
    );
}

export function useAdmin() {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
}
