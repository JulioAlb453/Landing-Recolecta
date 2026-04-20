export type IconName = 'shield' | 'clock' | 'users';
export type CtaVariant = 'primary' | 'secondary';

export interface TitlePart {
  readonly text: string;
  readonly highlight?: boolean;
}

export interface CtaButton {
  readonly label: string;
  readonly variant: CtaVariant;
  readonly href: string;
  readonly external?: boolean;
}

export interface HighlightCard {
  readonly icon: IconName;
  readonly title: string;
  readonly subtitle: string;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
  readonly accent?: boolean;
}

export interface HomeContent {
  readonly badge: string;
  readonly title: ReadonlyArray<TitlePart>;
  readonly description: string;
  readonly ctas: ReadonlyArray<CtaButton>;
  readonly highlights: ReadonlyArray<HighlightCard>;
  readonly stats: ReadonlyArray<StatItem>;
}

export const HOME_CONTENT: HomeContent = {
  badge: 'Proyecto en desarrollo · 2026',

  title: [
    { text: 'Innovación digital para un ' },
    { text: 'Chiapas', highlight: true },
    { text: ' más limpio.' },
  ],

  description:
    'El Gobierno de Chiapas y estudiantes de IT2iD construyen una plataforma ' +
    'para optimizar la recolección de residuos en todo el estado.',

  ctas: [
    { label: 'Conoce la plataforma', variant: 'primary', href: '#proyecto', external: true },
    { label: 'Cómo participar', variant: 'secondary', href: '#participar' },
  ],

  highlights: [
    {
      icon: 'shield',
      title: 'Fase de desarrollo',
      subtitle: 'Piloto en zonas clave',
    },
    {
      icon: 'clock',
      title: 'App y web en construcción',
      subtitle: 'IT2iD · talento local',
    },
    {
      icon: 'users',
      title: 'Gobierno + IT2iD',
      subtitle: 'Colaboración activa',
    },
  ],

  stats: [
    { value: '2026', label: 'Año de desarrollo' },
    { value: 'IT2iD', label: 'Carrera desarrolladora' },
    { value: 'Chiapas', label: 'Cobertura estatal' },
    { value: '100%', label: '', accent: true },
  ],
};
