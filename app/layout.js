import './globals.css';

import { Playfair_Display, Inter } from 'next/font/google';

import Header from '../components/Header';
import Footer from '../components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: 'Open Horizon | Infinite Possibilities',
    template: '%s | Open Horizon',
  },
  description:
    'Open Horizon is an integrated corporate enterprise offering event management, photography, visual production, corporate travel and MICE services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Header />

        <main id="main-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}