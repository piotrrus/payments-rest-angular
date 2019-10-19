import {FormControl} from '@angular/forms';

export function unitPatternValidator(control: FormControl) {

    const UNIT_REGEXP: any = '^[\-]?[0-9]+[\,]?[0-9]{0,4}$';

    return UNIT_REGEXP.test(control.value) ? null : {
        cashPatternValidator: {
            valid: false
        }
    };
}
