import Link from 'next/link';
import { XCircle } from 'lucide-react';

export default function PaymentErrorPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <XCircle className="w-10 h-10 text-red-600" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">Ödənişdə Xəta Baş Verdi</h1>
                <p className="text-gray-500 mb-8">
                    Təəssüf ki, əməliyyatı tamamlamaq mümkün olmadı. Zəhmət olmasa yenidən cəhd edin və ya bizimlə əlaqə saxlayın.
                </p>

                <div className="space-y-3">
                    <Link
                        href="/"
                        className="block w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
                    >
                        Ana Səhifəyə Qayıt
                    </Link>
                    <Link
                        href="/#contact"
                        className="block w-full py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-gray-50 transition-all"
                    >
                        Bizimlə Əlaqə
                    </Link>
                </div>
            </div>
        </div>
    );
}
