export interface ProjectCta {
  readonly label: string;
  readonly routerLink: string;
}

export interface ProjectContent {
  readonly kicker: string;
  readonly title: string;
  readonly description: string;
  readonly cta: ProjectCta;
  readonly imageAlt: string;
}

export const PROJECT_CONTENT: ProjectContent = {
  kicker: 'El problema que resolvemos',
  title: 'Gestión inteligente de recolección de residuos',
  description:
    'En muchas comunidades de Chiapas los camiones recolectores son escasos y sus ' +
    'recorridos poco eficientes. Recolecta es una aplicación que centraliza la ' +
    'gestión y localización de las unidades recolectoras, conectando a operadores ' +
    'y ciudadanos en tiempo real para que ninguna zona quede sin atención.',
  cta: {
    label: 'Conocer rutas inteligentes',
    routerLink: '/funcionalidades',
  },
  imageAlt:
    'Recolecta – plataforma de gestión y localización de camiones recolectores de basura',
};
