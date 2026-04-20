export interface ContactItem {
  readonly label: string;
  readonly value: string;
  readonly href?: string;
}

export interface FooterContent {
  readonly brand: {
    readonly nameBeforeAccent: string;
    readonly nameAccent: string;
    readonly description: string;
  };
  readonly institutionsTitle: string;
  readonly institutions: readonly string[];
  readonly contactsTitle: string;
  readonly contacts: readonly ContactItem[];
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
  contactsTitle: 'CONTACTO',
  contacts: [
    {
      label: 'Correo',
      value: 'recolectait2id@gmail.com',
      href: 'mailto:recolectait2id@gmail.com',
    },
    {
      label: 'Teléfono',
      value: '800-123-CHIAPAS',
      href: 'tel:80012342427',
    },
    {
      label: 'Ubicación',
      value: 'Tuxtla Gutiérrez, Chiapas',
    },
  ],
  bottom: {
    credits: 'Hecho por estudiantes de IT2iD · Versión demo 2026',
    phoneLabel: '800-123-CHIAPAS',
  },
};
