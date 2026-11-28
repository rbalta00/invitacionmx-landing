// Mensaje prellenado de WhatsApp compartido por todos los botones de "muestra
// gratis" (hero, cierre y flotante) -- una sola fuente para no desincronizar
// el texto entre los 3 lugares que lo usan.
export const MUESTRA_GRATIS_MENSAJE =
  'Hola, quiero mi muestra gratis de invitación XV. Festejada: ___ · Fecha del evento: ___ · Tema que me gustó: ___';

// Mismo mensaje de "muestra gratis" de arriba, variante para /bodas (2026-11-25) -- nunca debe
// decir "XV". Usado por los botones de muestra de esa página (hero, cierre y flotante), que
// reciben este texto por prop en vez de tener uno propio hardcodeado -- la constante de XV
// queda intacta, sin tocar la home.
export const MUESTRA_BODA_MENSAJE =
  'Hola, quiero mi muestra gratis de invitación de boda. Novios: ___ · Fecha de la boda: ___ · Tema que me gustó: ___';

// Mismo mensaje de "muestra gratis", variante para /cumpleanos -- nunca debe
// decir "XV" ni "boda". Usado por los botones de muestra de esa página (hero,
// cierre y flotante), que reciben este texto por prop.
export const MUESTRA_CUMPLEANOS_MENSAJE =
  'Hola, quiero mi muestra gratis de invitación de cumpleaños. Festejado/a: ___ · Fecha del cumpleaños: ___ · Tema que me gustó: ___';

// Mismo mensaje de "muestra gratis", variante para /bautizo -- nunca debe decir "XV", "boda"
// ni "cumpleaños". Usado por los botones de muestra de esa página (hero, cierre y flotante).
export const MUESTRA_BAUTIZO_MENSAJE =
  "Hola, quiero mi muestra gratis de invitación de bautizo 🕊️. El nombre de mi bebé es: ____. La fecha del bautizo es: ____. El tema que me gustó es: ____.";

// Mismo mensaje de "muestra gratis", variante para /primera-comunion -- nunca debe decir "XV",
// "boda", "cumpleaños" ni "bautizo". Usado por los botones de muestra de esa página (hero, cierre
// y flotante).
export const MUESTRA_PRIMERA_COMUNION_MENSAJE =
  "Hola, quiero mi muestra gratis de invitación de primera comunión 🕊️. El nombre es: ____. La fecha de la primera comunión es: ____. El tema que me gustó es: ____.";

// Mismo mensaje de "muestra gratis", variante para /graduacion -- nunca debe decir "XV", "boda",
// "cumpleaños", "bautizo" ni "primera comunión". Usado por los botones de muestra de esa página
// (hero, cierre y flotante).
export const MUESTRA_GRADUACION_MENSAJE =
  "Hola, quiero mi muestra gratis de invitación de graduación 🎓. Mi nombre es: ____. La fecha de la graduación es: ____. El tema que me gustó es: ____.";

// Mismo mensaje de "muestra gratis", variante para /baby-shower -- nunca debe decir "XV", "boda",
// "cumpleaños", "bautizo", "primera comunión" ni "graduación". Usado por los botones de muestra de
// esa página (hero, cierre y flotante).
export const MUESTRA_BABY_SHOWER_MENSAJE =
  "Hola, quiero mi muestra gratis de invitación de baby shower 🍼. El nombre de mi bebé es: ____. La fecha del baby shower es: ____. El tema que me gustó es: ____.";

// Mismo mensaje de "muestra gratis", variante para /aniversario -- nunca debe decir "XV", "boda",
// "cumpleaños", "bautizo", "primera comunión", "graduación" ni "baby shower". Usado por los botones
// de muestra de esa página (hero, cierre y flotante).
export const MUESTRA_ANIVERSARIO_MENSAJE =
  "Hola, quiero mi muestra gratis de invitación de aniversario 💛. Nuestros nombres son: ____. La fecha del aniversario es: ____. El tema que me gustó es: ____.";

// Normaliza el número de WhatsApp a formato internacional completo (52 + 10 dígitos), sin
// importar cómo esté capturada la variable de entorno en Vercel (2026-11-22) -- hoy
// NEXT_PUBLIC_WHATSAPP_NUMBER está guardada sin el 52, y WhatsApp lo rescata, pero el formato
// correcto es el internacional completo para que el link nunca falle (ej. fuera de México).
// Acepta 10 dígitos (le antepone 52), 13 dígitos ya con "521" (formato viejo con el 1 de
// celular, lo normaliza a "52" sin el 1), o lo que venga si no calza ninguno de los dos casos.
export function normalizarNumeroWhatsApp(crudo: string | undefined): string {
  const digitos = (crudo || '').replace(/\D/g, '');
  if (digitos.length === 10) return '52' + digitos;
  if (digitos.length === 13 && digitos.startsWith('521')) return '52' + digitos.slice(3);
  return digitos;
}

export const WHATSAPP_NUMERO = normalizarNumeroWhatsApp(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);
