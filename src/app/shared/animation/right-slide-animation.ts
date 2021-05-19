import { animate, sequence, state, style, transition, trigger } from '@angular/animations';

export const RightSlideAnimation =
// slide right to left
    //    trigger(
    //         'slide', [
    //             transition(':enter', [
    //                 style({ transform: 'translateX(100%)' }),
    //                 animate('1s', style({ transform: 'translateX(0)' }))
    //             ]),
    //             transition(':leave', [
    //                 style({ transform: 'translateX(0)', opacity: 1 }),
    //                 animate('1.5s', style({ transform: 'translateX(-150%)' }))
    //             ])
    //         ]
    //   );
    
    // slide up to bottom
    // trigger('slide', [
    //     transition(':enter', [
    //         style({ opacity: '0', height: '0' }),
    //         animate('1s ease-in', style({ opacity: '1', height: '*' }))
    //     ]),
    //     transition(':leave', [
    //         animate('0.5s ease-out', style({ opacity: '0', height: '0' }))
    //     ])
    // ]);
    // slider transition
    trigger('slide', [
        transition(':enter', [
            style({ opacity: '0'}),
            animate('1.5s ease-in', style({ opacity: '1' }))
        ]),
        transition(':leave', [
            animate('0.7s ease-out', style({ opacity: '0'}))
        ])
    ]);