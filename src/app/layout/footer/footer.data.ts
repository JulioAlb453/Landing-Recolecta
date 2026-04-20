export interface FooterContent {
  readonly brand: {
    readonly nameBeforeAccent: string;
    readonly nameAccent: string;
    readonly description: string;
  };
  readonly institutionsTitle: string;
  readonly institutions: readonly string[];
  readonly bottom: {
    readonly credits: string;
    readonly phoneLabel: string;
  };
}

export const FOOTER_CONTENT: FooterContent = {
  brand: {
    nameBeforeAccent: 'Reco',
    nameAccent: 'lecta',
    description:
      'Recolección de basura con sentido social y tecnológico. Proyecto académico con impacto real.',
  },
  institutionsTitle: 'INSTITUCIONES',
  institutions: [
    'Carrera IT2iD',
    'Universidad Politécnica de Chiapas',
  ],
  bottom: {
    credits: 'Hecho por estudiantes de IT2iD · Versión demo 2026',
    phoneLabel: '800-123-CHIAPAS',
  },
};
