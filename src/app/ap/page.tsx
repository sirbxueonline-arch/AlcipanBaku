'use client';

import React from 'react';
import { AdminPanel } from '@/components/AdminPanel';
import { LoginForm } from '@/components/LoginForm';
import { useAdmin } from '@/context/AdminContext';
import Link from 'next/link';

export default function AdminPage() {
    const { isAuthenticated, logout } = useAdmin();

    if (!isAuthenticated) {
        return <LoginForm />;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                    <div className="flex w-full sm:w-auto gap-4">
                        <Link
                            href="/"
                            className="flex-1 sm:flex-none text-center px-4 py-2 bg-slate-200 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-300 transition"
                        >
                            ← View Site
                        </Link>
                        <button
                            onClick={logout}
                            className="flex-1 sm:flex-none text-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition"
                        >
                            Logout
                        </button>
                    </div>
                </header>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                    {/* Admin Panel Component - reusing existing component but wrapping it nicely */}
                    <div className="p-0">
                        <AdminPanel />
                    </div>
                </div>
            </div>
        </div>
    );
}
