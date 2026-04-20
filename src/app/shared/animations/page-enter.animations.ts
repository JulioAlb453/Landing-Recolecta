import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * Entrada de la página Home: elementos con clase `home-enter-item`
 * aparecen en secuencia con difuminado (blur) y ligero desplazamiento vertical.
 */
export const homeEnterAnimation = trigger('homeEnter', [
  transition(':enter', [
    query(
      '.home-enter-item',
      [
        style({
          opacity: 0,
          filter: 'blur(12px)',
          transform: 'translateY(18px)',
        }),
        stagger(90, [
          animate(
            '520ms cubic-bezier(0.22, 1, 0.36, 1)',
            style({
              opacity: 1,
              filter: 'blur(0)',
              transform: 'translateY(0)',
            }),
          ),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);

/**
 * Encabezado: entrada única con blur y deslizamiento desde arriba.
 */
export const headerEnterAnimation = trigger('headerEnter', [
  transition(':enter', [
    style({
      opacity: 0,
      filter: 'blur(10px)',
      transform: 'translateY(-14px)',
    }),
    animate(
      '460ms 60ms cubic-bezier(0.22, 1, 0.36, 1)',
      style({
        opacity: 1,
        filter: 'blur(0)',
        transform: 'translateY(0)',
      }),
    ),
  ]),
]);
