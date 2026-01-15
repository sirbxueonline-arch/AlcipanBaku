'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, Service, WorkItem, Language } from '@/types';
import { initialProducts, initialServices, initialWorkItems } from '@/data/initialData';

interface AdminContextType {
    isAuthenticated: boolean;
    login: (email: string, pass: string) => boolean;
    logout: () => void;
    language: Language;
    setLanguage: (lang: Language) => void;
    products: Product[];
    services: Service[];
    workItems: WorkItem[];
    updateProduct: (id: string, updates: Partial<Product>) => void;
    updateService: (id: string, updates: Partial<Service>) => void;
    updateWorkItem: (id: string, updates: Partial<WorkItem>) => void;
    addProduct: () => void;
    addService: () => void;
    addWorkItem: () => void;
    deleteProduct: (id: string) => void;
    deleteService: (id: string) => void;
    deleteWorkItem: (id: string) => void;
    toggleProductStatus: (id: string) => void;
    toggleServiceStatus: (id: string) => void;
    toggleWorkStatus: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Initial data loaded from @/data/initialData

export function AdminProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('AZ');
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [services, setServices] = useState<Service[]>(initialServices);
    const [workItems, setWorkItems] = useState<WorkItem[]>(initialWorkItems);
    const [isLoaded, setIsLoaded] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const storedProducts = localStorage.getItem('alcipan_products');
        const storedServices = localStorage.getItem('alcipan_services');
        const storedWork = localStorage.getItem('alcipan_work');

        // Check for session in localStorage (simple persistence)
        const session = localStorage.getItem('alcipan_admin_session');
        if (session === 'true') {
            setIsAuthenticated(true);
        }

        if (storedProducts) {
            try {
                const parsed = JSON.parse(storedProducts);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setProducts(parsed);
                } else {
                    // Fallback to initial if stored is empty array (fix for empty load)
                    setProducts(initialProducts);
                }
            } catch (e) {
                console.error("Failed to parse stored products", e);
                setProducts(initialProducts);
            }
        } else {
            setProducts(initialProducts);
        }

        if (storedServices) {
            try {
                const parsed = JSON.parse(storedServices);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setServices(parsed);
                } else {
                    setServices(initialServices);
                }
            } catch (e) {
                console.error("Failed to parse stored services", e);
                setServices(initialServices);
            }
        } else {
            setServices(initialServices);
        }

        if (storedWork) {
            try {
                const parsed = JSON.parse(storedWork);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setWorkItems(parsed);
                } else {
                    setWorkItems(initialWorkItems);
                }
            } catch (e) {
                console.error("Failed to parse stored work", e);
                setWorkItems(initialWorkItems);
            }
        } else {
            setWorkItems(initialWorkItems);
        }
        setIsLoaded(true);
    }, []);

    // Save to localStorage whenever data changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('alcipan_products', JSON.stringify(products));
        }
    }, [products, isLoaded]);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('alcipan_services', JSON.stringify(services));
        }
    }, [services, isLoaded]);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('alcipan_work', JSON.stringify(workItems));
        }
    }, [workItems, isLoaded]);

    const login = (email: string, pass: string) => {
        // Simple hardcoded check for client-side demo
        // In a real app, this should call an API
        if (email === 'kaan.guluzada@gmail.com' && pass === 'K20120509') {
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

    const updateProduct = (id: string, updates: Partial<Product>) => {
        setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    };

    const updateService = (id: string, updates: Partial<Service>) => {
        setServices(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
    };

    const updateWorkItem = (id: string, updates: Partial<WorkItem>) => {
        setWorkItems(prev => prev.map(w => w.id === id ? { ...w, ...updates } : w));
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
            isActive: false
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

    const toggleProductStatus = (id: string) => {
        setProducts(prev => prev.map(p => p.id === id ? { ...p, isActive: !p.isActive } : p));
    };

    const toggleServiceStatus = (id: string) => {
        setServices(prev => prev.map(s => s.id === id ? { ...s, isActive: !s.isActive } : s));
    };

    const toggleWorkStatus = (id: string) => {
        setWorkItems(prev => prev.map(w => w.id === id ? { ...w, isActive: !w.isActive } : w));
    };

    return (
        <AdminContext.Provider value={{
            isAuthenticated,
            login,
            logout,
            language,
            setLanguage,
            products,
            services,
            workItems,
            updateProduct,
            updateService,
            updateWorkItem,
            addProduct,
            addService,
            addWorkItem,
            deleteProduct,
            deleteService,
            deleteWorkItem,
            toggleProductStatus,
            toggleServiceStatus,
            toggleWorkStatus
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
