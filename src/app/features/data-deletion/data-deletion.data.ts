export interface DataDeletionContent {
  readonly kicker: string;
  readonly title: string;
  readonly intro: string;
  readonly sections: readonly {
    readonly title: string;
    readonly paragraphs: readonly string[];
  }[];
  readonly requestEmail: string;
  readonly requestSteps: readonly string[];
  readonly closingNote: string;
}

export const DATA_DELETION_CONTENT: DataDeletionContent = {
  kicker: 'Protección de datos personales',
  title: 'Eliminación de datos en Recolecta',
  intro:
    'De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), ' +
    'como titular de datos personales usted tiene derecho a solicitar la cancelación —eliminación— de la información ' +
    'que obre en nuestra posesión y que haya sido recopilada a través de la aplicación Recolecta.',
  sections: [
    {
      title: 'Su derecho a la cancelación',
      paragraphs: [
        'Puede solicitar en cualquier momento que eliminemos sus datos personales registrados en la aplicación, ' +
          'incluyendo información de cuenta, perfil y cualquier otro dato vinculado a su uso del servicio.',
        'Este derecho forma parte de los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) ' +
          'reconocidos por la legislación mexicana en materia de protección de datos personales.',
      ],
    },
    {
      title: 'Nuestra obligación',
      paragraphs: [
        'Como responsables del tratamiento de sus datos personales, estamos obligados a atender su solicitud de ' +
          'eliminación y a borrar su información de la aplicación Recolecta, salvo los supuestos en que la ley ' +
          'permita o exija conservar determinados datos.',
        'Una vez recibida y validada su solicitud, procederemos a eliminar sus datos personales de nuestros sistemas ' +
          'en los plazos establecidos por la LFPDPPP.',
      ],
    },
  ],
  requestEmail: 'recolectait2id@gmail.com',
  requestSteps: [
    'Envíe un correo electrónico a recolectait2id@gmail.com con el asunto «Solicitud de eliminación de datos personales».',
    'Indique su nombre completo y el correo electrónico o identificador asociado a su cuenta en Recolecta.',
    'Describa claramente que desea ejercer su derecho de cancelación (eliminación) conforme a la LFPDPPP.',
    'Adjunte, si lo considera necesario, documentación que acredite su identidad como titular de los datos.',
  ],
  closingNote:
    'Atenderemos su solicitud en un plazo no mayor a 20 días hábiles contados a partir de su recepción, ' +
    'conforme a lo dispuesto por la LFPDPPP. Le informaremos por correo electrónico sobre el resultado de su solicitud.',
};
