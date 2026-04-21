import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://superboosted.design'),
  title: 'Superboosted — Websites for small Kiwi businesses',
  description:
    'A professional, fast website for your trade, shop or club — designed, built, hosted, and maintained from $49/month. Wellington-based.',
  openGraph: {
    title: 'Superboosted — Websites for small Kiwi businesses',
    description:
      'A professional website for your trade, shop or club — from $49/month. Wellington-based.',
    url: 'https://superboosted.design',
    siteName: 'Superboosted',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Superboosted — Websites for small Kiwi businesses',
    description:
      'A professional website for your trade, shop or club — from $49/month. Wellington-based.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
