import {FormControl} from '@angular/forms';

export function lettersPatternValidator(control: FormControl) {

    const LETTERS_REGEXP: any = `^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšśžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŚŽ∂ð -]+$`;

    return LETTERS_REGEXP.test(control.value) ? null : {
        lettersPatternValidator: {
            valid: false
        }
    };
}
