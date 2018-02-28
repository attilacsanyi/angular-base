import { animate, group, query, style, transition, trigger } from '@angular/animations';

/*
 * Thanks for Matias Niemelä & Gerard Sans
 * https://medium.com/google-developer-experts/angular-supercharge-your-router-transitions-using-new-animation-features-v4-3-3eb341ede6c8
*/
// prettier-ignore
export const routerSlideToLeftAnimation = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);

// prettier-ignore
export const routerSlideToTopAnimation = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%', opacity: 0 })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0%)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);
