export interface ContactItem {
  readonly label: string;
  readonly value: string;
  readonly href?: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
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
  readonly socialsTitle: string;
  readonly socials: readonly SocialLink[];
  readonly bottom: {
    readonly credits: string;
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
      label: 'Ubicación',
      value: 'Tuxtla Gutiérrez, Chiapas',
    },
  ],
  socialsTitle: 'REDES SOCIALES',
  socials: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/share/17YHmKbgrm/',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/recolecta43?igsh=MWIwcGIzMTA4bzV3bQ==',
    },
  ],
  bottom: {
    credits: 'Hecho por estudiantes de IT2iD · Versión demo 2026',
  },
};
