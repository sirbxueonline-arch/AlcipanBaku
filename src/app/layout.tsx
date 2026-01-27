import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { AdminProvider } from '@/context/AdminContext';
import { CartProvider } from '@/context/CartContext';
import ClientLayout from './ClientLayout';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Alcipanbaku – Bakı alçipan ustası, dekorativ tavan və divar işləri',
    template: '%s | Alçipan Baku'
  },
  description: 'Alcipanbaku – 20 illik təcrübə ilə alçipan montajı, dekorativ tavan və divar arakesməsi. Usta + material + zəmanət. Zəng et: 050 636 87 31',
  keywords: [
    'alçipan', 'alcipan baku', 'asma tavan', 'tikinti', 'təmir', 'usta', 'baku', 'azerbaijan',
    'gypsum board', 'drywall', 'ceiling design', 'construction',
    'гипсокартон', 'ремонт', 'баку', 'маляр', 'дизайн потолков',
    'alçipan ustası Bakı', 'alçipan tavan dizaynı', 'dekorativ tavan Bakı',
    'alçipan montajı', 'alçipan materialları', 'knauf alçipan', 'gilan alçipan', 'alcipanbaku'
  ],
  authors: [{ name: 'Alçipan Baku Team' }],
  creator: 'Alçipan Baku',
  publisher: 'Alçipan Baku',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Alçipan Baku | Peşəkar Tikinti və Təmir',
    description: 'Baku\'da premium səviyyəli alçipan və asma tavan xidmətləri. Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın.',
    url: 'https://alcipanbaku.com',
    siteName: 'Alçipan Baku',
    locale: 'az_AZ',
    type: 'website',
  },
  category: 'construction',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AdminProvider>
          <CartProvider>
            <ClientLayout>
              {children}
              <WhatsAppWidget />
            </ClientLayout>
          </CartProvider>
        </AdminProvider>
        <Analytics />
      </body>
    </html>
  );
}
