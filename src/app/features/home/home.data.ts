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
  readonly metric: string;
  readonly metricLabel: string;
}

export interface BannerContent {
  readonly title: string;
  readonly highlight: string;
  readonly description: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
}

export interface HomeContent {
  readonly badge: string;
  readonly title: ReadonlyArray<TitlePart>;
  readonly description: string;
  readonly ctas: ReadonlyArray<CtaButton>;
  readonly highlights: ReadonlyArray<HighlightCard>;
  readonly banner: BannerContent;
}

export const HOME_CONTENT: HomeContent = {
  badge: 'Proyecto en desarrollo · 2026',

  title: [
    { text: 'Innovación digital para un ' },
    { text: 'Chiapas', highlight: true },
    { text: ' más limpio.' },
  ],

  description:
    'Desde IT2iD desarrollamos una plataforma para optimizar la recolección de ' +
    'residuos en todo el estado.',

  ctas: [],

  highlights: [
    {
      icon: 'shield',
      title: 'Fase de desarrollo',
      subtitle: 'Piloto en zonas clave',
      metric: '2026',
      metricLabel: 'Año de desarrollo',
    },
    {
      icon: 'clock',
      title: 'App y web en construcción',
      subtitle: 'IT2iD · talento local',
      metric: 'IT2iD',
      metricLabel: 'Carrera desarrolladora',
    },
    {
      icon: 'users',
      title: 'Equipo IT2iD',
      subtitle: 'Colaboración entre estudiantes',
      metric: 'Chiapas',
      metricLabel: 'Cobertura estatal',
    },
  ],

  banner: {
    title: 'Tecnología al servicio de un ',
    highlight: 'Chiapas más limpio',
    description:
      'Recolecta conecta rutas, mapas y datos para que la recolección de residuos sea más eficiente en todo el estado.',
    ctaLabel: 'Conoce la aplicación',
    ctaHref: '/la-aplicacion',
  },
};
