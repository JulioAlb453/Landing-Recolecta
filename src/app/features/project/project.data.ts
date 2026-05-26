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
    'La gestion de residuos sólidos en el municipio de Suchiapas presenta una falla ' +
    'estructural de cobertura que traciende lo logístico para convertirsee en una ' +
    'emergencia de salud pública latente, especialmente en las zonas de periféricas y rurales ' +
    'y ciudadanos en tiempo real para que ninguna zona quede sin atención.  ',
  cta: {
    label: 'Conocer rutas inteligentes',
    routerLink: '/funcionalidades',
  },
  imageAlt:
    'Recolecta – plataforma de gestión y localización de camiones recolectores de basura',
};
