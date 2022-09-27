import { animate, animation, keyframes, style } from "@angular/animations";

export let slideInLeft = animation([
    animate('0.9s ease-in', keyframes([
        style({
        //   height: 0,
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        style({
        //   height: '50px',
        }),
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ]))
])


export let slideInRight = animation([
    animate('0.9s ease-in', keyframes([
        style({
        //   height: 0,
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        style({
        //   height: '50px',
        }),
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ]))
])