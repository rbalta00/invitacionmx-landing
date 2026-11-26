export interface Testimonio {
  nombre: string; // nombre real de la clienta, con su autorización
  evento: string; // p. ej. "XV años — Puebla"
  texto: string; // sus palabras, sin editar el sentido
}

// SOLO testimonios REALES de clientas que autorizaron publicarlos.
// Prohibido agregar textos de relleno, nombres inventados o ejemplos:
// mientras esta lista esté vacía, la sección no se muestra en la landing.
export const TESTIMONIOS: Testimonio[] = [];
