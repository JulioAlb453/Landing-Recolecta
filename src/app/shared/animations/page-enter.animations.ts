import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

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

export const aboutEnterAnimation = trigger('aboutEnter', [
  transition(':enter', [
    query(
      '.about-enter-item',
      [
        style({
          opacity: 0,
          filter: 'blur(10px)',
          transform: 'translateY(20px)',
        }),
        stagger(100, [
          animate(
            '500ms cubic-bezier(0.22, 1, 0.36, 1)',
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

export const missionVisionEnterAnimation = trigger('missionVisionEnter', [
  transition(':enter', [
    query(
      '.mv-enter-item',
      [
        style({
          opacity: 0,
          filter: 'blur(10px)',
          transform: 'translateY(20px)',
        }),
        stagger(110, [
          animate(
            '500ms cubic-bezier(0.22, 1, 0.36, 1)',
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
