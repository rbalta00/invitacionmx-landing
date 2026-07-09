# Invitamx Landing Page

Landing page para captar clientes y dirigirlos a WhatsApp para comprar invitaciones XV.

## Tech Stack

- **Next.js 14** - App Router, React 18
- **TypeScript** - Full type safety
- **Vercel** - Hosting & deployment
- **CSS-in-JS** - Inline styles with CSS variables

## Project Overview

Single-page landing focused on conversion to WhatsApp leads. All CTAs route through WhatsApp with pre-formatted messages by plan.

### Structure

```
app/
├── components/          # 13 modular sections
│   ├── Header.tsx      # Sticky nav
│   ├── Hero.tsx        # Main CTA
│   ├── SocialProof.tsx # Trust signals
│   ├── HowItWorks.tsx  # 4-step process
│   ├── Themes.tsx      # 12 theme gallery
│   ├── Features.tsx    # 9 features
│   ├── Pricing.tsx     # 3 plans + WhatsApp
│   ├── Testimonials.tsx # 3 social proof
│   ├── FAQ.tsx         # 6 Q&A
│   ├── Guarantee.tsx   # Money-back guarantee
│   ├── FinalCTA.tsx    # 4 WhatsApp buttons
│   ├── Footer.tsx      # Branding
│   └── Analytics.tsx   # Pixel + GA tracking
├── page.tsx            # Main page composition
├── layout.tsx          # Root layout + metadata
└── globals.css         # CSS variables + base styles
```

## Key Features

✅ WhatsApp integration on every CTA
✅ Facebook Pixel + Google Analytics ready (add IDs in .env.local)
✅ 12 beautiful themes with gradients
✅ Responsive mobile-first design
✅ SEO optimized (metadata, og:tags, canonical)
✅ TypeScript for safety
✅ No external UI libraries (custom CSS-in-JS)

## Environment Variables

`.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=2217445410
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_id_here
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_id_here
```

## Commands

- `npm run dev` — dev server on :3000
- `npm run build` — production build
- `npm run start` — production server
- `npm run type-check` — TypeScript check

## Deployment

### Vercel
1. Push to GitHub
2. Connect repo in Vercel
3. Set env vars in Vercel project settings
4. Auto-deploy on git push

### Domain Setup
- DNS: Point `invitamx.online` to Vercel
- Vercel: Settings → Domains → `invitamx.online`

## Customization

**Colors**: Edit CSS variables in `app/globals.css`:
```css
--primary: #7F77DD
--primary-dark: #3C3489
--accent: #D85A30
```

**WhatsApp Number**: Update in `.env.local` + re-deploy

**Content**: Edit component JSX directly (no CMS)

**Plans**: Update `Pricing.tsx` array

## Tracking

**Facebook Pixel**: Tracks `PageView` + `Lead` events
**Google Analytics**: Tracks `PageView` + `generate_lead` events
**Event**: Fired when plan button clicked → wrap with `window.trackPlanEvent()`

## Performance

- Zero external fonts (system fonts)
- No image optimization needed (CSS gradients)
- Lazy component loading ready (can wrap components in `React.lazy`)
- ~14KB gzipped initial JS

## SEO

- Metadata in `layout.tsx`
- Open Graph tags
- Twitter card
- Canonical URL
- Structured data ready (add Schema.org if needed)

## Future Enhancements

- [ ] Add form for email capture (before WhatsApp redirect)
- [ ] Newsletter signup
- [ ] Case studies / portfolio section
- [ ] Blog for XV planning tips
- [ ] Schema.org structured data
- [ ] Video testimonials
- [ ] Live chat widget
