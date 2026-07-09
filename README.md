# Invitamx Landing

Landing page para Invitamx - Invitaciones XV profesionales.

## Tecnología

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Vercel** - Hosting y deployment

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build

```bash
npm run build
npm run start
```

## Variables de Entorno

Copia `.env.example` a `.env.local`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=2217445410
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=tu_pixel_id
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=tu_ga_id
```

## Estructura

```
app/
├── components/          # Componentes de la landing
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Themes.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── Guarantee.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── PixelTracker.tsx
├── layout.tsx           # Layout principal
├── page.tsx            # Página principal
└── globals.css         # Estilos globales
```

## Features

- ✨ 100% responsive
- 📱 Mobile-first design
- 🎨 Temas personalizados
- 💬 Integración WhatsApp
- 📊 Pixel tracking (Facebook/Google)
- ⚡ Optimizado para SEO
- 🔒 Type-safe con TypeScript

## Deployment en Vercel

1. Push a GitHub
2. Conecta el repo en Vercel
3. Configura variables de entorno en Vercel
4. Deploy automático en push a main

## Contacto

WhatsApp: +2217445410
