import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import Analytics from './components/Analytics';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Invitamx - Invitaciones XV Profesionales',
  description: 'Invitaciones XV hermosas y personalizadas, hechas a tu medida. 14 temas elegantes, lista de regalos, confirmación de asistencia. Entrega en 24-48 horas. Comparte por WhatsApp.',
  keywords: 'invitaciones XV, invitaciones quinceañera, invitaciones digitales, diseño XV, personalizado',
  metadataBase: new URL('https://invitamx.app'),
  alternates: {
    canonical: 'https://invitamx.app',
  },
  openGraph: {
    title: 'Invitamx - Invitaciones XV Profesionales',
    description: 'Invitaciones XV hermosas, personalizadas y fáciles de compartir.',
    type: 'website',
    url: 'https://invitamx.app',
    siteName: 'Invitamx',
    images: [
      {
        url: '/images/hero/hero-invitation.jpg',
        width: 1200,
        height: 630,
        alt: 'Ejemplo de invitación digital XV de Invitamx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitamx - Invitaciones XV Profesionales',
    description: 'Invitaciones XV hermosas y personalizadas, entregadas en 24-48 horas',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4A1226" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>" />
      </head>
      <body className={playfairDisplay.variable}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
