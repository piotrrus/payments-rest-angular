import {FormControl} from '@angular/forms';

export function notNullValidator(control: FormControl) {

    let isValid: boolean = false;
    if (control.value) {

        if (parseFloat(control.value) > 0) {
            isValid = true;
        }
    }
    else {
        return null;
    }

    return isValid ? null : {
        notNullValidator: {
            valid: false
        }
    };
}
