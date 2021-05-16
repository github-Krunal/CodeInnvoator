import { animate, state, style, transition, trigger } from '@angular/animations';

export  const RightSlideAnimation =
	 trigger('slide', [
      transition('void=>*', [
        style({
         transform: 'translateX(100%)'
        }),
        animate(1000, style({ transform: 'translateX(0%)'}))
	  ]),
		 transition('*=>void', [
        style({
         transform: 'translateX(0%)'
        }),
        animate(500,style({ transform: 'translateX(-100%)'}))
      ])
    ])