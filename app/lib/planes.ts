// Fuente única de verdad para los 3 planes de Invitamx: nombre, precio,
// contenido y el mensaje de WhatsApp que se arma al elegir cada uno.
// Pricing.tsx y FinalCTA.tsx importan de aquí -- no duplicar esta info.
//
// Precios/nombres/secciones vigentes desde 2026-11-18 (rediseño completo
// de la tabla de precios, decisión del dueño del negocio):
//   Básico   $299 -- 4 fotos, 13 secciones, 14 temas
//   Estándar $499 -- 8 fotos, 15 secciones, 14 temas ("El más elegido")
//   Premium  $799 -- 14 fotos, 16 secciones, 14 temas, pases y PDF incluidos

declare global {
  interface Window {
    /** Expuesto por Analytics.tsx: dispara Meta Pixel `Lead` + GA4 `generate_lead`. */
    trackPlanEvent?: (eventName: string, value?: number) => void;
  }
}

export interface Plan {
  id: 'basico' | 'estandar' | 'premium';
  name: string;
  /** Precio en pesos MXN, como número (para tracking/analítica). */
  price: number;
  subtitle: string;
  isPopular?: boolean;
  features: string[];
  seccionesTitulo: string;
  secciones: string[];
  addOn?: string;
}

/** Una sola fuente para esta línea -- se agrega a los 3 planes abajo (ver el .forEach después del
 *  array), en vez de repetir el string a mano en cada plan. */
const FEATURE_DISENO_A_ELEGIR =
  'Diseños de apertura, portada e itinerario a elegir y personalización de colores y fuentes';

export const PLANES: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: 299,
    subtitle: 'Perfecto para empezar',
    features: [
      '4 fotos en galería',
      '14 temas a elegir',
      'Música personalizada',
      'Link compartible por WhatsApp',
    ],
    seccionesTitulo: 'Incluye estas 13 secciones:',
    secciones: [
      'Pantalla de apertura',
      'Portada principal',
      'Cuenta regresiva',
      'Mensaje de bienvenida',
      'Ubicación de ceremonia',
      'Ubicación de recepción',
      'Itinerario del día',
      'Código de vestimenta',
      'Galería de fotos',
      'Confirmación de asistencia (RSVP)',
      'Agregar evento a calendario',
      'Hashtag de Instagram',
      'Mensaje de cierre',
    ],
    addOn:
      'Complementos a la carta: pases digitales por familia +$150 MXN (hasta 10 familias, +$20 MXN por familia extra), ' +
      'una sección suelta (padres y padrinos, o mesa de regalos) +$99 MXN cada una, descarga en PDF +$99 MXN.',
  },
  {
    id: 'estandar',
    name: 'Estándar',
    price: 499,
    subtitle: 'El más elegido',
    isPopular: true,
    features: [
      '8 fotos en galería',
      '14 temas a elegir',
      'Música personalizada',
      'Link compartible por WhatsApp',
    ],
    seccionesTitulo: 'Todo lo del Básico, más:',
    secciones: [
      'Padres y padrinos',
      'Mesa de regalos y datos bancarios',
    ],
    addOn:
      'Complementos a la carta: pases digitales por familia +$180 MXN (hasta 20 familias, +$20 MXN por familia extra), ' +
      'descarga en PDF +$99 MXN.',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 799,
    subtitle: 'Todo incluido',
    features: [
      '14 fotos en galería',
      '14 temas a elegir',
      'Música personalizada',
      'Pases y PDF incluidos sin costo extra',
      'Conteo de aperturas: ve desde tu link cuántas veces abrieron tu invitación',
    ],
    seccionesTitulo: 'Todo lo del Estándar, más:',
    secciones: [
      'Pases digitales personalizados por familia (nombre + número de invitados asignados), incluido sin costo hasta 40 familias',
      'Descarga en PDF incluida sin costo extra',
    ],
  },
];

// La línea de diseños/personalización aplica a los 3 planes por igual (el generador no la limita
// por paquete) -- se agrega aquí, una sola vez, en vez de repetir el string a mano en cada plan.
PLANES.forEach((plan) => plan.features.push(FEATURE_DISENO_A_ELEGIR));

/** Complementos a la carta disponibles en cualquier plan (no son parte de ningún paquete por default). */
export const ADDONS_GENERALES = [
  {
    label: 'Familia extra más allá del tope de pases de tu plan',
    price: '$20 MXN c/u',
  },
  {
    label: 'Control de acceso con QR en la puerta (requiere pases digitales activos)',
    price: '$150 MXN',
  },
  {
    label: 'Ronda de ajustes extra, después de las 2 incluidas',
    price: '$99 MXN',
  },
];

// `contexto`: frase opcional que se agrega al final del mensaje (ej. "para mi invitación de
// boda", usada por /bodas) -- sin ella el mensaje sale exactamente igual que siempre en la home.
export function planWhatsappMessage(plan: Plan, contexto?: string): string {
  return `Hola, quiero el Plan ${plan.name} - $${plan.price}${contexto ? `, ${contexto}` : ''}`;
}

export function findPlan(id: Plan['id']): Plan {
  const plan = PLANES.find((p) => p.id === id);
  if (!plan) throw new Error(`Plan no encontrado: ${id}`);
  return plan;
}
