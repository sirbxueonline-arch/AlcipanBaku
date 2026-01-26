import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function PaymentSuccessPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">Ödəniş Uğurlu Oldu!</h1>
                <p className="text-gray-500 mb-8">
                    Sifarişiniz qəbul edildi. Tezliklə sizinlə əlaqə saxlayacağıq.
                </p>

                <Link
                    href="/"
                    className="block w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                    Ana Səhifəyə Qayıt
                </Link>
            </div>
        </div>
    );
}
