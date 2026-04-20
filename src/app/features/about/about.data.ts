export interface AboutContent {
  readonly kicker: string;
  readonly quote: string;
  readonly quoteAttribution: string;
  readonly title: string;
  readonly badge: string;
  readonly description: string;
  readonly bullets: readonly string[];
}

export const ABOUT_CONTENT: AboutContent = {
  kicker: 'Quiénes somos',
  quote:
    'La tecnología, bien aplicada, puede transformar positivamente el entorno y la calidad de vida de los chiapanecos.',
  quoteAttribution: '— Equipo IT2iD · Chiapas, 2026',
  title: 'IT2iD',
  badge: 'Desarrollo en TI e Innovación Digital',
  description:
    'Somos estudiantes y docentes de IT2iD (Desarrollo en Tecnologías de la Información e Innovación Digital) impulsando soluciones digitales con impacto real en la gestión de residuos y en la comunidad.',
  bullets: [
    'Universidad Politécnica de Chiapas',
    'Carrera IT2iD · talento local',
    'Proyecto académico con enfoque social',
  ],
};
