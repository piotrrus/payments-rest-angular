import {FormControl} from '@angular/forms';

export function regNrPatternValidator(control: FormControl) {

    const REGNR_REGEXP: any = '/^[0-9]*$/u';

    return REGNR_REGEXP.test(control.value) ? null : {
        regNrPatternValidator: {
            valid: false
        }
    };
}
