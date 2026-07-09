import type { Metadata } from 'next';
import './globals.css';
import Analytics from './components/Analytics';

export const metadata: Metadata = {
  title: 'Invitamx - Invitaciones XV Profesionales | Diseña en Minutos',
  description: 'Crea invitaciones XV hermosas y personalizadas en minutos. 12 temas elegantes, lista de regalos, confirmación de asistencia. Comparte por WhatsApp.',
  keywords: 'invitaciones XV, invitaciones quinceañera, invitaciones digitales, diseño XV, personalizado',
  metadataBase: new URL('https://invitamx.online'),
  alternates: {
    canonical: 'https://invitamx.online',
  },
  openGraph: {
    title: 'Invitamx - Invitaciones XV Profesionales',
    description: 'Invitaciones XV hermosas, personalizadas y fáciles de compartir.',
    type: 'website',
    url: 'https://invitamx.online',
    siteName: 'Invitamx',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitamx - Invitaciones XV Profesionales',
    description: 'Diseña tu invitación XV en minutos',
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
        <meta name="theme-color" content="#7F77DD" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>" />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
