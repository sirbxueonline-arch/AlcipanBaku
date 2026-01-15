'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';

export function LoginForm() {
    const { login } = useAdmin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Small artificial delay for simple "loading" feel
            await new Promise(resolve => setTimeout(resolve, 500));

            const success = login(email, password);
            if (!success) {
                setError('Invalid credentials');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-slate-800 p-6 text-center">
                    <h2 className="text-2xl font-bold text-white">Admin Login</h2>
                    <p className="text-slate-400 text-sm mt-1">Alcipan Content Management</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {error && (
                        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md border border-red-200">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 transition-colors"
                            placeholder="admin@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-md transition-colors shadow-sm ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? 'Checking...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}
