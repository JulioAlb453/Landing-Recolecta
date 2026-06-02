export interface ProjectCta {
  readonly label: string;
  readonly routerLink: string;
}

export interface ProjectDiagnosis {
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly alertTitle: string;
  readonly alertText: string;
}

export interface ProjectIdentifiedProblem {
  readonly title: string;
  readonly description: string;
}

export interface ProjectDirectImpact {
  readonly category: string;
  readonly text: string;
}

export interface ProjectContent {
  readonly institution: string;
  readonly kicker: string;
  readonly heroSubtitle: string;
  readonly diagnosis: ProjectDiagnosis;
  readonly identifiedProblemsTitle: string;
  readonly identifiedProblems: ReadonlyArray<ProjectIdentifiedProblem>;
  readonly directImpactsTitle: string;
  readonly directImpacts: ReadonlyArray<ProjectDirectImpact>;
  readonly title: string;
  readonly description: string;
  readonly highlights: ReadonlyArray<string>;
  readonly cta: ProjectCta;
  readonly imageAlt: string;
}

export const PROJECT_CONTENT: ProjectContent = {
  institution: 'H. Ayuntamiento Municipal de Suchiapa',
  kicker: 'Gobierno Municipal · Servicios Públicos',
  heroSubtitle:
    'Plataforma digital del municipio para una recolección de residuos más ' +
    'eficiente, transparente y con cobertura para todas las comunidades.',
  diagnosis: {
    label: 'Diagnóstico municipal · 2026',
    title: 'Problemática actual en la gestión de residuos sólidos',
    description:
      'El municipio de Suchiapa enfrenta una crisis estructural en la recolección ' +
      'y disposición de residuos sólidos que compromete la salud pública, el medio ' +
      'ambiente y la calidad de vida de sus habitantes, especialmente en comunidades ' +
      'periféricas y rurales.',
    alertTitle: 'Alerta de salud pública',
    alertText:
      'La situación actual trasciende lo logístico: la acumulación de residuos sin ' +
      'recolección representa un riesgo sanitario activo para la población más ' +
      'vulnerable del municipio.',
  },
  identifiedProblemsTitle: 'Problemáticas identificadas',
  identifiedProblems: [
    {
      title: 'Cobertura deficiente',
      description:
        'Zonas periféricas y rurales sin acceso regular al servicio de recolección de residuos.',
    },
    {
      title: 'Rutas ineficientes',
      description:
        'Ausencia de planificación logística actualizada genera tiempos muertos y duplicidad de recorridos.',
    },
    {
      title: 'Falta de trazabilidad',
      description:
        'Sin registro digital, es imposible monitorear el cumplimiento del servicio ni detectar fallas a tiempo.',
    },
    {
      title: 'Baja participación ciudadana',
      description:
        'La ciudadanía no cuenta con canales para reportar incidencias ni recibir información sobre el servicio.',
    },
  ],
  directImpactsTitle: 'Impactos directos',
  directImpacts: [
    {
      category: 'Salud',
      text:
        'La acumulación irregular de residuos favorece la proliferación de vectores ' +
        'como mosquitos y roedores, incrementando el riesgo de enfermedades ' +
        'gastrointestinales y dengue en zonas sin cobertura.',
    },
    {
      category: 'Medio ambiente',
      text:
        'Los tiraderos clandestinos generados por la falta de servicio provocan ' +
        'contaminación de suelos y cuerpos de agua, con impacto directo en los ' +
        'ecosistemas locales.',
    },
    {
      category: 'Social',
      text:
        'Las comunidades en rezago perciben una brecha en la calidad del servicio ' +
        'público, lo que deteriora la confianza ciudadana en las instituciones municipales.',
    },
  ],
  title: 'Gestión inteligente de recolección de residuos',
  description:
    'Recolecta centraliza la gestión y localización de las unidades recolectoras, ' +
    'conectando a operadores y ciudadanos en tiempo real para que ninguna zona quede sin atención.',
  highlights: [
    'Cobertura planificada para zonas periféricas y rurales',
    'Seguimiento en tiempo real de las unidades recolectoras',
    'Información pública y transparente para la ciudadanía',
  ],
  cta: {
    label: 'Conocer rutas inteligentes',
    routerLink: '/funcionalidades',
  },
  imageAlt:
    'Recolecta – plataforma de gestión y localización de camiones recolectores de basura',
};
