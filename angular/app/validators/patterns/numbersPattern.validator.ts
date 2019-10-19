import {FormControl} from '@angular/forms';

export function numbersPatternValidator(control: FormControl) {

    const NUMBERS_REGEXP: any = '/^[0-9]*$/u';

    return NUMBERS_REGEXP.test(control.value) ? null : {
        numbersPatternValidator: {
            valid: false
        }
    };
}
