# Fotos y video de la landing

Coloca tus archivos con estos nombres exactos y aparecerán automáticamente en la página (si falta alguno, se muestra un diseño de respaldo, nada se rompe).

## Hero (sección principal, arriba)
- `public/videos/hero-demo.mp4` — video corto mostrando la invitación (se reproduce en loop, sin sonido), **todavía no existe** (2026-11-18: `Hero.tsx` no lo referencia mientras no se produzca uno real, para no generar un 404). Si se agrega este archivo en el futuro, hay que volver a conectar el componente para que lo use con prioridad sobre la foto.
- `public/images/hero/hero-invitation.jpg` — foto de una invitación XV (se usa siempre mientras no exista el video de arriba).

## Temas
El catálogo de temas ya NO vive en fotos sueltas de este repo — `Themes.tsx` embebe el catálogo real en vivo (`administradorinvitamx.vercel.app/?catalog=true`) en un iframe, así nunca queda desactualizado. La carpeta `public/images/themes/` (fotos estáticas de 12 temas, desactualizada frente a los 14 temas reales) se eliminó el 2026-11-18 por no tener ninguna referencia en el código.

## Testimonios (foto de cliente, opcional)
En `public/images/testimonials/`:
- `maria.jpg`
- `sofia.jpg`
- `valentina.jpg`

Formatos aceptados: `.jpg` (cambia la extensión en el componente si usas `.png` o `.webp`).
