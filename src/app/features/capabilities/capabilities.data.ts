export type CapabilityIcon = 'route' | 'map' | 'nlp';

export interface CapabilityItem {
  readonly text: string;
}

export interface Capability {
  readonly icon: CapabilityIcon;
  readonly pill: string;
  readonly title: string;
  readonly description: string;
  readonly items: ReadonlyArray<CapabilityItem>;
}

export interface CapabilitiesContent {
  readonly kicker: string;
  readonly title: string;
  readonly subtitle: string;
  readonly capabilities: ReadonlyArray<Capability>;
}

export const CAPABILITIES_CONTENT: CapabilitiesContent = {
  kicker: 'Tecnología de vanguardia',
  title: 'Funcionalidades del sistema',
  subtitle:
    'Recolecta integra inteligencia artificial, visualización geoespacial y ' +
    'procesamiento de lenguaje natural para transformar la gestión de residuos en Chiapas.',

  capabilities: [
    {
      icon: 'route',
      pill: 'IA · Optimización',
      title: 'Algoritmo Genético para rutas',
      description:
        'Motor evolutivo que calcula las rutas óptimas de recolección minimizando ' +
        'distancias, tiempos y consumo de combustible mediante operadores genéticos ' +
        'de selección, cruce y mutación.',
      items: [
        { text: 'Optimización multiobjetivo: tiempo, distancia' },
        { text: 'Convergencia rápida en espacios de búsqueda grandes' },
        { text: 'Adaptación dinámica ante cambios en el mapa de rutas' },
      ],
    },
    {
      icon: 'map',
      pill: 'GIS · Tiempo real',
      title: 'Mapa de seguimiento del camión',
      description:
        'Interfaz geoespacial que permite a los ciudadanos rastrear en tiempo real ' +
        'el camión recolector y conocer el tiempo estimado de llegada a su domicilio.',
      items: [
        { text: 'Rastreo GPS en tiempo real del vehículo recolector' },
        { text: 'Visualización de zonas y rutas activas en el mapa' },
        { text: 'Alertas de proximidad para el ciudadano' },
      ],
    },
    {
      icon: 'nlp',
      pill: 'PLN · Automatización',
      title: 'Categorización automática de reportes',
      description:
        'Sistema de procesamiento de lenguaje natural que analiza los reportes ' +
        'ciudadanos en texto libre, los clasifica por tipo de residuo y prioriza ' +
        'la atención según nivel de urgencia.',
      items: [
        { text: 'Clasificación automática por tipo y categoría de residuo' },
        { text: 'Asignación de prioridad' },
      ],
    },
  ],
};
