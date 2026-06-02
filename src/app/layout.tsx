import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Kynetra Tech — Smart Systems for Australian Business',
    template: '%s | Kynetra Tech',
  },
  description: 'Kynetra Tech builds CRM systems, email infrastructure and workflow automation for Australian businesses. Based in Melbourne.',
  keywords: ['CRM automation', 'workflow systems', 'Australian business', 'business operations', 'Melbourne'],
  authors: [{ name: 'Kynetra Tech' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://kynetratech.com',
    siteName: 'Kynetra Tech',
    title: 'Kynetra Tech — Smart Systems for Australian Business',
    description: 'We engineer end-to-end operations for Australian businesses — from first enquiry to paid invoice.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kynetra Tech — Smart Systems for Australian Business',
    description: 'We engineer end-to-end operations for Australian businesses.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <Navbar />
        <main style={{ paddingTop: '72px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
