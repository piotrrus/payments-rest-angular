import { trigger, state, animate, transition, style, query, group } from '@angular/animations';

export const myAnimation =
  trigger('myAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [style({ opacity: 0 })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ opacity: 1 }), animate(500, style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ]);