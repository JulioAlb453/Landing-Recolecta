import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    group([
      query(
        ':leave',
        [
          style({
            opacity: 1,
            filter: 'blur(0)',
            transform: 'translateY(0)',
          }),
          animate(
            '280ms cubic-bezier(0.4, 0, 0.6, 1)',
            style({
              opacity: 0,
              filter: 'blur(8px)',
              transform: 'translateY(-14px)',
            }),
          ),
        ],
        { optional: true },
      ),
      query(
        ':enter',
        [
          style({
            opacity: 0,
            filter: 'blur(10px)',
            transform: 'translateY(22px)',
          }),
          animate(
            '380ms 50ms cubic-bezier(0.22, 1, 0.36, 1)',
            style({
              opacity: 1,
              filter: 'blur(0)',
              transform: 'translateY(0)',
            }),
          ),
        ],
        { optional: true },
      ),
    ]),
  ]),
]);
