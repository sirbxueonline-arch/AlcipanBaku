import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { AdminProvider } from '@/context/AdminContext';
import ClientLayout from './ClientLayout';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Alçipan Baku | Peşəkar Tikinti Xidmətləri',
    template: '%s | Alçipan Baku'
  },
  description: 'Baku\'da ən keyfiyyətli alçipan, asma tavan, boya və təmir işləri. 20 illik təcrübə, peşəkar ustalar və münasib qiymətlər. Gypsum board services in Baku. Гипсокартонные работы в Баку.',
  keywords: [
    'alçipan', 'alcipan baku', 'asma tavan', 'tikinti', 'təmir', 'usta', 'baku', 'azerbaijan',
    'gypsum board', 'drywall', 'ceiling design', 'construction',
    'гипсокартон', 'ремонт', 'баку', 'маляр', 'дизайн потолков'
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
    url: 'https://alcipan-baku.vercel.app',
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
          <ClientLayout>
            {children}
            <WhatsAppWidget />
          </ClientLayout>
        </AdminProvider>
        <Analytics />
      </body>
    </html>
  );
}
