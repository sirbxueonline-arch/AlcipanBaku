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
  icons: {
    icon: '/brand-logo.jpg',
    shortcut: '/brand-logo.jpg',
    apple: '/brand-logo.jpg',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Alçipan Baku',
              image: 'https://alcipanbaku.com/brand-logo.jpg',
              '@id': 'https://alcipanbaku.com',
              url: 'https://alcipanbaku.com',
              telephone: '+994506368731',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Baku, Azerbaijan',
                addressLocality: 'Baku',
                addressCountry: 'AZ'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 40.4093,
                longitude: 49.8671
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday'
                ],
                opens: '09:00',
                closes: '20:00'
              },
              priceRange: '$$'
            })
          }}
        />
      </body>
    </html>
  );
}
