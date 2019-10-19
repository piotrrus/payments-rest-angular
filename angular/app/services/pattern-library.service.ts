import { Injectable } from '@angular/core';

@Injectable()
export class PatternsLibraryService {
    getPatterns(patternName: string) {
        let patterns = {
            'NUMBERS_REGEXP':        '/^[0-9]*$/u',
            'UNIT_REGEXP':           '^[\-]?[0-9]+[\,]?[0-9]{0,4}$',
            'REGNR_REGEXP':          '/^[0-9]*$/u',
            'LETTERS_REGEXP':        '^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšśžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŚŽ∂ð -]+$',
            'CASH_REGEXP':           '^[\-]?[0-9]+[\,]?[0-9]{0,2}$',
            'EMAIL_REGEXP':          '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
            'POSTAL_CODE_REGEXP':    '^[0-9]{2}\-[0-9]{3}$',
            'WANCI_REGEXP':          '^[0-9]{1,2}([,.][0-9]{1,2})?$',
            'STREET_NAME_REGEXP':    '^[0-9A-Za-z\'"sp{L}ęóąśłżźćńĘÓĄŚŁŻŹĆŃ -]*$',
            'CITY_NAME_REGEXP':      '^[A-Za-z\'"sp{L}ęóąśłżźćńĘÓĄŚŁŻŹĆŃ _-]*',
            'PHONE_REGEXP':          '[0-9]+'
        };
        return patterns[patternName];
    }
}

