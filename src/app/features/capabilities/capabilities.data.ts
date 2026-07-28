export type CapabilityIcon =
  | 'reports'
  | 'ml'
  | 'classifier'
  | 'map'
  | 'citizen'
  | 'route';

export interface CapabilityItem {
  readonly text: string;
}

export interface Capability {
  readonly icon: CapabilityIcon;
  readonly pill: string;
  readonly title: string;
  readonly description: string;
  readonly items: ReadonlyArray<CapabilityItem>;
  readonly status?: 'ready' | 'pending';
}

export interface WorkflowStep {
  readonly number: number;
  readonly title: string;
  readonly description: string;
}

export interface WorkflowContent {
  readonly kicker: string;
  readonly title: string;
  readonly intro: string;
  readonly highlight: string;
  readonly diagramSrc: string;
  readonly diagramAlt: string;
  readonly stepsTitle: string;
  readonly steps: ReadonlyArray<WorkflowStep>;
}

export interface CapabilitiesContent {
  readonly kicker: string;
  readonly title: string;
  readonly subtitle: string;
  readonly capabilities: ReadonlyArray<Capability>;
  readonly workflow: WorkflowContent;
  readonly footerNote: string;
}

export const CAPABILITIES_CONTENT: CapabilitiesContent = {
  kicker: 'Lo que ya está en marcha',
  title: 'Implementaciones del sistema',
  subtitle:
    'Recolecta orquesta un pipeline de reportes con minería de datos: un filtro de riesgo ' +
    'por aprendizaje no supervisado y un clasificador de lenguaje natural basado en reglas, ' +
    'más seguimiento en tiempo real y participación ciudadana.',

  capabilities: [
    {
      icon: 'reports',
      pill: 'Pipeline · Operación',
      title: 'Reportes y anomalías',
      description:
        'El backend guarda el reporte al instante y, en segundo plano, orquesta el análisis ' +
        'automático hasta dejarlo clasificado, rechazado o en error para revisión manual.',
      items: [
        { text: 'Estados: pendiente, procesando, clasificado, rechazado, error' },
        { text: 'Reintentos en segundo plano sin bloquear la app' },
        { text: 'Historial visible para supervisión en el panel web' },
      ],
    },
    {
      icon: 'ml',
      pill: 'ML · No supervisado',
      title: 'Filtro de riesgo (K-Means + Isolation Forest)',
      description:
        'Microservicio modelo_reportes: mide qué tan atípico es un reporte (spam o abuso) ' +
        'antes de clasificarlo, sin decidir todavía de qué trata el incidente.',
      items: [
        { text: 'K-Means: rareza respecto al grupo típico' },
        { text: 'Isolation Forest: anomalías globales en el conjunto' },
        { text: 'Nivel de riesgo final: bajo, medio o alto' },
      ],
    },
    {
      icon: 'classifier',
      pill: 'PLN · Reglas',
      title: 'Clasificador simbólico de reportes',
      description:
        'Microservicio clasificador_reportes: sistema experto por reglas (no LLM). ' +
        'Normaliza el texto, detecta señales de dominio y propone una acción auditable ' +
        'sobre el grafo vial.',
      items: [
        { text: 'Categorías: calle tapada, basura, daño a vehículo/contenedor u otro' },
        { text: 'Traza explicable de señales y regla aplicada' },
        { text: 'Acciones: bloquear arista, encarecer peso o derivar a mantenimiento' },
      ],
    },
    {
      icon: 'map',
      pill: 'GPS · Tiempo real',
      title: 'Rutas en tiempo real',
      description:
        'Ciudadanos y operación ven el avance del camión recolector y las rutas activas ' +
        'mediante mapa y canal de seguimiento en vivo.',
      items: [
        { text: 'Seguimiento GPS de unidades en mapa' },
        { text: 'Rutas activas con estado operativo' },
        { text: 'Actualización en vivo vía WebSocket' },
      ],
    },
    {
      icon: 'citizen',
      pill: 'Ciudadanía · App',
      title: 'Reportes de ciudadanos',
      description:
        'Desde la app móvil, la ciudadanía envía el texto del reporte autenticado al backend; ' +
        'los modelos de minería no corren en el teléfono.',
      items: [
        { text: 'Captura de incidencias desde la app ciudadana' },
        { text: 'Análisis automático de riesgo y categoría en servidor' },
        { text: 'Reflejo en el panel operativo del ayuntamiento' },
      ],
    },
    {
      icon: 'route',
      pill: 'Pendiente · AG',
      title: 'Optimización de rutas (algoritmo genético)',
      description:
        'Documentado como trabajo futuro: consumir las acciones block_edge e inflate_weight ' +
        'del clasificador para recalcular el trayecto óptimo. El grafo ya modela ese nodo; ' +
        'la integración real aún no está conectada.',
      items: [
        { text: 'Recálculo ante bloqueos o pesos inflados' },
        { text: 'Orquestación prevista desde el pipeline de anomalías' },
        { text: 'Estado actual: pendiente de integración' },
      ],
      status: 'pending',
    },
  ],

  workflow: {
    kicker: 'Orquestación en tiempo real',
    title: 'Flujo de trabajo',
    intro:
      'Cuando se detecta una anomalía (calle bloqueada, incidencia en ruta u otro evento), ' +
      'el sistema verifica si afecta una ruta en curso, avisa al conductor y solicita un ' +
      'recálculo al motor de algoritmo genético.',
    highlight:
      'Una vez recibida la anomalía, se comprueba si impacta una ruta en progreso; si es así, ' +
      'se notifica al conductor por WebSocket y la app pide una ruta nueva al AG.',
    diagramSrc: 'assets/flujo-anomalia-ruta.webp',
    diagramAlt:
      'Diagrama del flujo: anomalía creada, verificación en API de rutas, notificación WebSocket, ' +
      'solicitud al AG y entrega de la nueva ruta a la app del conductor',
    stepsTitle: 'Qué sucede en cada paso',
    steps: [
      {
        number: 1,
        title: 'Anomalía creada',
        description:
          'El proveedor de anomalías (FORK API) publica el evento vía POST /anomalía_creada ' +
          'hacia la API de rutas, tras el análisis de reportes y el grafo de inferencia.',
      },
      {
        number: 2,
        title: 'Verificación de impacto',
        description:
          'La API de rutas comprueba si la anomalía cruza alguna ruta activa. Solo si hay ' +
          'afectación se continúa el flujo hacia el conductor.',
      },
      {
        number: 3,
        title: 'Notificación en vivo',
        description:
          'El servidor WebSocket avisa a la app del conductor que existe una anomalía y que ' +
          'la ruta se va a recalcular.',
      },
      {
        number: 4,
        title: 'Solicitud al AG',
        description:
          'La app del conductor solicita una nueva ruta al motor de algoritmo genético (AG).',
      },
      {
        number: 5,
        title: 'Nueva ruta',
        description:
          'El AG calcula el trayecto alterno y lo regresa a la app para que el conductor ' +
          'continúe el servicio sin el tramo bloqueado.',
      },
      {
        number: 6,
        title: 'Nuevos reportes',
        description:
          'Desde la misma app, el conductor puede reportar nuevas anomalías (POST /anomalías) ' +
          'y reiniciar el ciclo.',
      },
    ],
  },

  footerNote:
    'Minería de datos e implementaciones según el Informe Técnico Recolecta · IT2iD · 2026',
};
