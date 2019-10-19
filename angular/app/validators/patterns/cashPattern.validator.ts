import {FormControl} from '@angular/forms';

export function cashPatternValidator(control: FormControl) {

    const CASH_REGEXP: any = '^[\-]?[0-9]+[\,]?[0-9]{0,2}$';

    return CASH_REGEXP.test(control.value) ? null : {
        cashPatternValidator: {
            valid: false
        }
    };
}
