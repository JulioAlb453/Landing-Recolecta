export interface TextSegment {
  readonly text: string;
  readonly emphasis?: boolean;
}

export interface MissionVisionCardContent {
  readonly pill: string;
  readonly segments: ReadonlyArray<TextSegment>;
}

export interface MissionVisionContent {
  readonly kicker: string;
  readonly title: string;
  readonly mission: MissionVisionCardContent;
  readonly vision: MissionVisionCardContent;
}

export const MISSION_VISION_CONTENT: MissionVisionContent = {
  kicker: 'NUESTRA DIRECCIÓN',
  title: 'Misión y Visión',
  mission: {
    pill: 'MISIÓN',
    segments: [
      {
        text:
          'Desarrollar una plataforma digital funcional y amigable que apoye la ',
      },
      { text: 'recolección de basura en Chiapas', emphasis: true },
      {
        text:
          ', promoviendo la participación ciudadana y la eficiencia operativa.',
      },
    ],
  },
  vision: {
    pill: 'VISIÓN',
    segments: [
      { text: 'Consolidarnos como un ' },
      { text: 'referente estatal de innovación digital', emphasis: true },
      {
        text:
          ' aplicada a servicios públicos, inspirando futuros proyectos tecnológicos con impacto social y ambiental positivo.',
      },
    ],
  },
};
