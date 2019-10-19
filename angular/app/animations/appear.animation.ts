import {animate, style, transition, trigger} from "@angular/animations";

export const appearAnimation = trigger('appear', [
    transition(':enter', [
        // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(750, style({opacity: 1}))
    ])
]);