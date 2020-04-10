import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export const animateSale = [
  trigger('slide', [
    transition(':enter', [
      animate('2s cubic-bezier(0.175, 0.885, 0.320, 1.275)', keyframes([
        style({
          transform: 'rotateX(-100deg)',
          transformOrigin: 'top',
          opacity: 1,
          offset: 0
        }),
        style({
          transform: 'rotateX(0deg)',
          transformOrigin: 'top',
          opacity: 1,
          offset: 1
        }),
      ]))
    ]),
    transition(':leave', [
      animate('4s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
        style({
          transform: 'scale(1)',
          filter: 'blur(0px)',
          opacity: 1,
          offset: 0
        }),
        style({
          transform: 'scale(2)',
          filter: 'blur(4px)',
          opacity: 0,
          offset: 1
        }),
      ]))
    ])
  ]),

  trigger(
    'fade', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1000ms'),
    ]),
    transition(':leave', [
      animate('2s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
        style({
          transform: 'scale(1)',
          filter: 'blur(0px)',
          opacity: 1,
          offset: 0
        }),
        style({
          transform: 'scale(1.5)',
          filter: 'blur(4px)',
          opacity: 0,
          offset: 1
        }),
      ]))
    ])
  ]
  )
]

// transition(':leave', [
//   animate('0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)', keyframes([
//     style({
//       transform: 'rotateX(-100deg)',
//       transformOrigin: 'top',
//       opacity: 0,
//       offset: 0
//     }),
//     style({
//       transform: 'rotateX(0deg)',
//       transformOrigin: 'top',
//       opacity: 1,
//       offset: 1
//     }),
//   ]))
// ])
