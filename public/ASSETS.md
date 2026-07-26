# Fotos y video de la landing

Coloca tus archivos con estos nombres exactos y aparecerán automáticamente en la página (si falta alguno, se muestra un diseño de respaldo, nada se rompe).

## Hero (sección principal, arriba)
- `public/videos/hero-demo.mp4` — video corto mostrando la invitación (se reproduce en loop, sin sonido). Tiene prioridad sobre la foto.
- `public/images/hero/hero-invitation.jpg` — foto de una invitación XV (se usa si no hay video, y como miniatura mientras carga el video).

## Temas (galería de 12 temas — coinciden con los del generador)
Una foto por tema, en `public/images/themes/` (idealmente una captura real del tema desde el generador):
- `dorado-clasico.jpg` — Dorado Clásico
- `mariposas.jpg` — Vuelo de Mariposas
- `floral-acuarela.jpg` — Floral Acuarela
- `celestial.jpg` — Místico Celestial
- `botanico.jpg` — Eucalipto Botánico
- `glam-rose.jpg` — Glam Rose Oro
- `boho-chic.jpg` — Rustique Boho Chic
- `princesa-elegante.jpg` — Princesa Elegante
- `marmol-oro.jpg` — Mármol & Oro Geométrico
- `neon.jpg` — Ciber Cyber Neon
- `coquette-pink.jpg` — XV Coquette Listones Rose
- `coquette-luxe.jpg` — XV Coquette Luxe

Si agregas o cambias un tema en el generador (`src/data.ts`), actualiza también la lista en `app/components/Themes.tsx` para que coincidan.

## Testimonios (foto de cliente, opcional)
En `public/images/testimonials/`:
- `maria.jpg`
- `sofia.jpg`
- `valentina.jpg`

Formatos aceptados: `.jpg` (cambia la extensión en el componente si usas `.png` o `.webp`).
