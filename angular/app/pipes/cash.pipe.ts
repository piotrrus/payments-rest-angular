import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'cash'
})
export class CashPipe implements PipeTransform {

    transform(value: any, type?: string): any {
        if (value === null || value === undefined) {
            return 0;
        }
        let config = {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        };
        if (type === 'percent') {
            config = {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4
            };
        }
        if (type === 'percent') {
            value = Math.round(parseFloat(value) * 10000) / 10000;
        } else {
            value = Math.round(parseFloat(value) * 100) / 100;
        }
        return parseFloat(value).toLocaleString(undefined, config);
    }

}
