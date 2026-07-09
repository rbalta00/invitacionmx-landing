import type { Metadata } from 'next';
import './globals.css';
import PixelTracker from './components/PixelTracker';

export const metadata: Metadata = {
  title: 'Invitamx - Invitaciones XV Profesionales',
  description: 'Diseña, personaliza y comparte invitaciones XV profesionales en minutos. 12 temas elegantes, fácil de usar.',
  keywords: 'invitaciones XV, quinceañera, digital, personalizado',
  openGraph: {
    title: 'Invitamx - Invitaciones XV Profesionales',
    description: 'Invitaciones XV hermosas y fáciles de hacer.',
    type: 'website',
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
      </head>
      <body>
        <PixelTracker />
        {children}
      </body>
    </html>
  );
}
