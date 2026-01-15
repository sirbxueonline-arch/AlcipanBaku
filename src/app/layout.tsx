import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AdminProvider } from '@/context/AdminContext';
import ClientLayout from './ClientLayout';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alcipan Baku',
  description: 'Construction Materials and Services',
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
      </body>
    </html>
  );
}
