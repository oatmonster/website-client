import { trigger, transition, style, animate } from '@angular/animations'

export const fadeInOut = trigger( 'fadeInOut',
  [
    transition(
      ':enter',
      [
        style( { opacity: 0 } ),
        animate( '500ms ease-out', style( { opacity: 1 } ) ),
      ],
    ),
    transition(
      ':leave',
      [
        style( { opacity: 1 } ),
        animate( '250ms ease-out', style( { opacity: 0 } ) ),
      ],
    ),
  ]
);
export const fadeIn = trigger( 'fadeIn',
  [
    transition(
      ':enter',
      [
        style( { opacity: 0 } ),
        animate( '500ms ease-out', style( { opacity: 1 } ) ),
      ],
    )
  ]
);