import './globals.css';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import BackgroundOrbs from '@/components/BackgroundOrbs';

export const metadata: Metadata = {
  title: 'Tools-CL — Des outils simples, puissants, gratuits',
  description: "Une suite d'outils gratuits pour les créateurs YouTube.",
  openGraph: {
    title: 'Tools-CL — Des outils simples, puissants, gratuits',
    description: "Une suite d'outils gratuits pour les créateurs YouTube.",
    url: 'https://tools-cl.com',
    images: [{ url: '/og-image.png' }],
    siteName: 'Tools-CL',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth bg-[#06060f] text-[#f0efff]">
      <head />
      <body className="relative min-h-screen flex flex-col">
        {/* Background Orbs & Grid Overlay */}
        <BackgroundOrbs />
        <div className="bg-grid fixed inset-0 pointer-events-none -z-10" />

        {/* Navigation & Content */}
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
          {children}
        </main>
        <Footer />

        {/* Analytics & AdSense init */}
        <Analytics />
      </body>
    </html>
  );
}
