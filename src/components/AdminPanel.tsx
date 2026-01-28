'use client';

import React, { useCallback } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Product, Service, WorkItem } from '@/types';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, X, Copy, Languages } from 'lucide-react';
import { translateText } from '@/actions/translate';

// Helper component for Image Upload
const ImageUpload = ({
    currentImage,
    onImageChange
}: {
    currentImage: string,
    onImageChange: (base64: string) => void
}) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    onImageChange(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    }, [onImageChange]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false
    });

    if (currentImage && !currentImage.startsWith('http')) {
        // Show preview if it's likely a base64 or local path (simple check)
        // actually checking length is not robust but for base64 it's usually long.
        // Let's just trusting it if it's there.
    }

    return (
        <div className="space-y-2">
            <label className="block text-xs text-gray-500 mb-1">Image</label>

            {currentImage ? (
                <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 group">
                    <img src={currentImage} alt="Preview" className="w-full h-full object-cover" />
                    <button
                        onClick={() => onImageChange('')}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <X size={12} />
                    </button>
                </div>
            ) : (
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
                        }`}
                >
                    <input {...getInputProps()} />
                    <UploadCloud className="w-6 h-6 mx-auto text-gray-400 mb-2" />
                    <p className="text-[10px] text-gray-500">
                        {isDragActive ? 'Drop image here...' : 'Drag & drop or click to upload'}
                    </p>
                </div>
            )}
        </div>
    );
};

export function AdminPanel() {
    const {
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
        toggleWorkStatus,
        language,
        // Duplicate
        duplicateProduct,
        duplicateService,
        duplicateWorkItem
    } = useAdmin();

    const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    return (
        <div className="bg-slate-50 border-r border-gray-200 w-full md:max-w-md h-full overflow-y-auto p-4 flex flex-col gap-8 pb-20">
            <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-xl font-bold text-slate-800">Admin Dashboard</h2>
                <span className="text-xs text-gray-400">v1.2</span>
            </div>

            {/* Products Control */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Products</h3>
                    <button
                        onClick={addProduct}
                        className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded hover:bg-blue-700 transition"
                    >
                        + Add Product
                    </button>
                </div>

                <div className="space-y-3">
                    {products.map(product => (
                        <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            {/* Header */}
                            <div className="p-3 flex items-center justify-between bg-gray-50/50 cursor-pointer hover:bg-gray-50 transition" onClick={() => toggleExpand(product.id)}>
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${product.isActive ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                    <span className="font-medium text-sm text-gray-900 truncate">{product.name[language]}</span>
                                </div>
                                <span className="text-gray-400 text-xs transform transition-transform duration-200" style={{ transform: expandedItem === product.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                            </div>

                            {/* Details */}
                            {expandedItem === product.id && (
                                <div className="p-3 border-t border-gray-100 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-medium text-gray-500">Status</span>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); toggleProductStatus(product.id); }}
                                                className={`px-2 py-0.5 rounded text-xs font-bold border ${product.isActive ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}
                                            >
                                                {product.isActive ? 'Active' : 'Draft'}
                                            </button>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); duplicateProduct(product.id); }}
                                            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded hover:bg-blue-100 transition"
                                        >
                                            <Copy size={12} /> Duplicate
                                        </button>
                                    </div>

                                    {/* Image Upload */}
                                    <ImageUpload
                                        currentImage={product.image}
                                        onImageChange={(base64) => updateProduct(product.id, { image: base64 })}
                                    />

                                    <div className="grid grid-cols-1 gap-2">
                                        <div className="flex justify-between items-end">
                                            <label className="block text-[10px] text-gray-400 uppercase">Name (AZ)</label>
                                            <button 
                                                onClick={async (e) => {
                                                    e.stopPropagation();
                                                    if (!product.name.AZ) return;
                                                    const [ru, en] = await Promise.all([
                                                        translateText(product.name.AZ, 'ru'),
                                                        translateText(product.name.AZ, 'en')
                                                    ]);
                                                    updateProduct(product.id, { 
                                                        name: { ...product.name, RU: ru, EN: en } 
                                                    });
                                                }}
                                                className="text-[10px] flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                            >
                                                <Languages size={10} /> Auto-Translate
                                            </button>
                                        </div>
                                        {['AZ', 'RU', 'EN'].map((lang) => (
                                            <div key={lang}>
                                                <label className="block text-[10px] text-gray-400 uppercase">{lang} Name</label>
                                                <input
                                                    type="text"
                                                    value={product.name[lang as keyof typeof product.name]}
                                                    onChange={(e) => updateProduct(product.id, { name: { ...product.name, [lang]: e.target.value } })}
                                                    className="w-full text-xs border border-gray-300 rounded px-2 py-1.5 focus:ring-1 focus:ring-blue-500 outline-none"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-1 gap-2">
                                        <div className="flex justify-between items-end">
                                            <label className="block text-[10px] text-gray-400 uppercase">Description (AZ)</label>
                                            <button 
                                                onClick={async (e) => {
                                                    e.stopPropagation();
                                                    if (!product.description.AZ) return;
                                                    const [ru, en] = await Promise.all([
                                                        translateText(product.description.AZ, 'ru'),
                                                        translateText(product.description.AZ, 'en')
                                                    ]);
                                                    updateProduct(product.id, { 
                                                        description: { ...product.description, RU: ru, EN: en } 
                                                    });
                                                }}
                                                className="text-[10px] flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                            >
                                                <Languages size={10} /> Auto-Translate
                                            </button>
                                        </div>
                                        {['AZ', 'RU', 'EN'].map((lang) => (
                                            <div key={lang}>
                                                <label className="block text-[10px] text-gray-400 uppercase">{lang} Description</label>
                                                <textarea
                                                    value={product.description[lang as keyof typeof product.description]}
                                                    onChange={(e) => updateProduct(product.id, { description: { ...product.description, [lang]: e.target.value } })}
                                                    className="w-full text-xs border border-gray-300 rounded px-2 py-1.5 focus:ring-1 focus:ring-blue-500 outline-none"
                                                    rows={2}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="w-1/2">
                                            <label className="block text-xs text-gray-500 mb-1">Price</label>
                                            <input
                                                type="number"
                                                value={product.price}
                                                onChange={(e) => updateProduct(product.id, { price: parseFloat(e.target.value) })}
                                                className="w-full text-xs border border-gray-300 rounded px-2 py-1.5"
                                            />
                                        </div>
                                        <div className="w-1/2 flex items-end">
                                            <button
                                                onClick={() => updateProduct(product.id, { isPriceVisible: !product.isPriceVisible })}
                                                className={`w-full text-xs border rounded px-1 py-1.5 ${product.isPriceVisible ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 text-gray-500'}`}
                                            >
                                                {product.isPriceVisible ? 'Price Visible' : 'Price Hidden'}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pt-2 flex justify-end">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteProduct(product.id); }}
                                            className="text-xs text-red-500 hover:text-red-700 underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Services Control */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Services</h3>
                    <button
                        onClick={addService}
                        className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded hover:bg-orange-700 transition"
                    >
                        + Add Service
                    </button>
                </div>
                <div className="space-y-3">
                    {services.map(service => (
                        <div key={service.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-3 flex items-center justify-between bg-gray-50/50 cursor-pointer hover:bg-gray-50 transition" onClick={() => toggleExpand(service.id)}>
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${service.isActive ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                    <span className="font-medium text-sm text-gray-900 truncate">{service.name[language]}</span>
                                </div>
                                <span className="text-gray-400 text-xs transform transition-transform duration-200" style={{ transform: expandedItem === service.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                            </div>

                            {expandedItem === service.id && (
                                <div className="p-3 border-t border-gray-100 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-medium text-gray-500">Status</span>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); toggleServiceStatus(service.id); }}
                                                className={`px-2 py-0.5 rounded text-xs font-bold border ${service.isActive ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}
                                            >
                                                {service.isActive ? 'Active' : 'Draft'}
                                            </button>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); duplicateService(service.id); }}
                                            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-orange-600 bg-orange-50 rounded hover:bg-orange-100 transition"
                                        >
                                            <Copy size={12} /> Duplicate
                                        </button>
                                    </div>

                                    {/* Image Upload */}
                                    <ImageUpload
                                        currentImage={service.image}
                                        onImageChange={(base64) => updateService(service.id, { image: base64 })}
                                    />

                                    <div className="grid grid-cols-1 gap-2">
                                        <div className="flex justify-between items-end">
                                            <label className="block text-[10px] text-gray-400 uppercase">Name (AZ)</label>
                                            <button 
                                                onClick={async (e) => {
                                                    e.stopPropagation();
                                                    if (!service.name.AZ) return;
                                                    const [ru, en] = await Promise.all([
                                                        translateText(service.name.AZ, 'ru'),
                                                        translateText(service.name.AZ, 'en')
                                                    ]);
                                                    updateService(service.id, { 
                                                        name: { ...service.name, RU: ru, EN: en } 
                                                    });
                                                }}
                                                className="text-[10px] flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                            >
                                                <Languages size={10} /> Auto-Translate
                                            </button>
                                        </div>
                                        {['AZ', 'RU', 'EN'].map((lang) => (
                                            <div key={lang}>
                                                <label className="block text-[10px] text-gray-400 uppercase">{lang} Name</label>
                                                <input
                                                    type="text"
                                                    value={service.name[lang as keyof typeof service.name]}
                                                    onChange={(e) => updateService(service.id, { name: { ...service.name, [lang]: e.target.value } })}
                                                    className="w-full text-xs border border-gray-300 rounded px-2 py-1.5 focus:ring-1 focus:ring-blue-500 outline-none"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-1 gap-2">
                                        <div className="flex justify-between items-end">
                                            <label className="block text-[10px] text-gray-400 uppercase">Description (AZ)</label>
                                            <button 
                                                onClick={async (e) => {
                                                    e.stopPropagation();
                                                    if (!service.description.AZ) return;
                                                    const [ru, en] = await Promise.all([
                                                        translateText(service.description.AZ, 'ru'),
                                                        translateText(service.description.AZ, 'en')
                                                    ]);
                                                    updateService(service.id, { 
                                                        description: { ...service.description, RU: ru, EN: en } 
                                                    });
                                                }}
                                                className="text-[10px] flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                            >
                                                <Languages size={10} /> Auto-Translate
                                            </button>
                                        </div>
                                        {['AZ', 'RU', 'EN'].map((lang) => (
                                            <div key={lang}>
                                                <label className="block text-[10px] text-gray-400 uppercase">{lang} Description</label>
                                                <textarea
                                                    value={service.description[lang as keyof typeof service.description]}
                                                    onChange={(e) => updateService(service.id, { description: { ...service.description, [lang]: e.target.value } })}
                                                    className="w-full text-xs border border-gray-300 rounded px-2 py-1.5 focus:ring-1 focus:ring-blue-500 outline-none"
                                                    rows={3}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-2 flex justify-end">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteService(service.id); }}
                                            className="text-xs text-red-500 hover:text-red-700 underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Portfolio/Work Control */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Our Work</h3>
                    <button
                        onClick={addWorkItem}
                        className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded hover:bg-purple-700 transition"
                    >
                        + Add Project
                    </button>
                </div>
                <div className="space-y-3">
                    {workItems.map(work => (
                        <div key={work.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-3 flex items-center justify-between bg-gray-50/50 cursor-pointer hover:bg-gray-50 transition" onClick={() => toggleExpand(work.id)}>
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${work.isActive ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                    <span className="font-medium text-sm text-gray-900 truncate">{work.title[language]}</span>
                                </div>
                                <span className="text-gray-400 text-xs transform transition-transform duration-200" style={{ transform: expandedItem === work.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                            </div>

                            {expandedItem === work.id && (
                                <div className="p-3 border-t border-gray-100 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-medium text-gray-500">Status</span>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); toggleWorkStatus(work.id); }}
                                                className={`px-2 py-0.5 rounded text-xs font-bold border ${work.isActive ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}
                                            >
                                                {work.isActive ? 'Active' : 'Draft'}
                                            </button>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); duplicateWorkItem(work.id); }}
                                            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded hover:bg-purple-100 transition"
                                        >
                                            <Copy size={12} /> Duplicate
                                        </button>
                                    </div>

                                    {/* Image Upload for Work Items */}
                                    <ImageUpload
                                        currentImage={work.imageUrl}
                                        onImageChange={(base64) => updateWorkItem(work.id, { imageUrl: base64 })}
                                    />

                                    <div>
                                        <label className="block text-xs text-gray-500 mb-1">Video URL (Optional)</label>
                                        <input
                                            type="text"
                                            value={work.videoUrl || ''}
                                            onChange={(e) => updateWorkItem(work.id, { videoUrl: e.target.value })}
                                            className="w-full text-xs border border-gray-300 rounded px-2 py-1.5 focus:ring-1 focus:ring-blue-500 outline-none"
                                            placeholder="https://youtube.com/..."
                                        />
                                        <p className="text-[10px] text-gray-400 mt-1">Supports YouTube links or direct MP4 URLs.</p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2">
                                        <div className="flex justify-between items-end">
                                            <label className="block text-[10px] text-gray-400 uppercase">Title (AZ)</label>
                                            <button 
                                                onClick={async (e) => {
                                                    e.stopPropagation();
                                                    if (!work.title.AZ) return;
                                                    const [ru, en] = await Promise.all([
                                                        translateText(work.title.AZ, 'ru'),
                                                        translateText(work.title.AZ, 'en')
                                                    ]);
                                                    updateWorkItem(work.id, { 
                                                        title: { ...work.title, RU: ru, EN: en } 
                                                    });
                                                }}
                                                className="text-[10px] flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                            >
                                                <Languages size={10} /> Auto-Translate
                                            </button>
                                        </div>
                                        {['AZ', 'RU', 'EN'].map((lang) => (
                                            <div key={lang}>
                                                <label className="block text-[10px] text-gray-400 uppercase">{lang} Title</label>
                                                <input
                                                    type="text"
                                                    value={work.title[lang as keyof typeof work.title]}
                                                    onChange={(e) => updateWorkItem(work.id, { title: { ...work.title, [lang]: e.target.value } })}
                                                    className="w-full text-xs border border-gray-300 rounded px-2 py-1.5 focus:ring-1 focus:ring-blue-500 outline-none"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-1 gap-2">
                                        <div className="flex justify-between items-end">
                                            <label className="block text-[10px] text-gray-400 uppercase">Description (AZ)</label>
                                            <button 
                                                onClick={async (e) => {
                                                    e.stopPropagation();
                                                    if (!work.description.AZ) return;
                                                    const [ru, en] = await Promise.all([
                                                        translateText(work.description.AZ, 'ru'),
                                                        translateText(work.description.AZ, 'en')
                                                    ]);
                                                    updateWorkItem(work.id, { 
                                                        description: { ...work.description, RU: ru, EN: en } 
                                                    });
                                                }}
                                                className="text-[10px] flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                            >
                                                <Languages size={10} /> Auto-Translate
                                            </button>
                                        </div>
                                        {['AZ', 'RU', 'EN'].map((lang) => (
                                            <div key={lang}>
                                                <label className="block text-[10px] text-gray-400 uppercase">{lang} Description</label>
                                                <textarea
                                                    value={work.description[lang as keyof typeof work.description]}
                                                    onChange={(e) => updateWorkItem(work.id, { description: { ...work.description, [lang]: e.target.value } })}
                                                    className="w-full text-xs border border-gray-300 rounded px-2 py-1.5 focus:ring-1 focus:ring-blue-500 outline-none"
                                                    rows={2}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-2 flex justify-end">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteWorkItem(work.id); }}
                                            className="text-xs text-red-500 hover:text-red-700 underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
