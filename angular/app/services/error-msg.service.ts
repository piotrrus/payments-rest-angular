import {Injectable} from '@angular/core';

@Injectable()
export class ErrorMsgService {

    /**
     *
     * @param {string} validatorName
     * @param {any} value
     * @returns {string}
     */
    getValidatorErrorMessage(validatorName: string, value?: any) {
        /*, validatorValue?: any*/

        let messages = {
            'required':                 'To pole jest wymagane.',
            'maxlength':                'Przekroczono dopuszczalną ilość znaków.',
            'lettersOnly':              'Wstaw tylko litery.',
            'notNull':                  'Wpisana wartość musi być większa od zera.',
            'pattern':                  'Niewłaściwy format danych.',
            'validatePesel':            'Niewłaściwy numer PESEL.',
            'postalCode':               'Niepoprawny format kodu pocztowego',
            'mobileValidator':          'Niepoprawny numer telefonu',
            'email':                    'Wprowadź poprawny adres e-mail.',
            'dateFormat':               'Niepoprawny format daty',
            'min':                      'Minimalna wartość zlecenia wynosi: ' + (value !== null ? value : ''),
            'max':                      'Maksymalna wartość zlecenia wynosi: ' + (value !== null ? value : ''),
            'documentIdNumber':         'Wprowadź prawidłowy numer dowodu.',
            'minMaxFloatValidator':     'Wartość spoza dozwolonego zakresu.',
            'minvalue':                 'Minimalna wartość wynosi ',
            'percentRange':             'Podaj wartość z przedziału 0 - 100.'
        };

        return messages[validatorName];
    }
}
