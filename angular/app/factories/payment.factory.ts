import { PaymentsInterface } from '../interfaces/Payments.interface';
import { DatePipe } from '@angular/common';

export class PaymentFactory {

    datePipe: DatePipe;
    constructor() {
        this.datePipe = new DatePipe('en-PL');
    }
    public toPaymentFormData(paymentCsv: PaymentsInterface) {
        const data = {
            name: this.getClientName(paymentCsv[2]),
            surname: this.getClientSurname(paymentCsv[2]),
            paymentDate: this.getPaymentDate(paymentCsv[0]),
            paymentPurpose: this.getPurpose(paymentCsv[3]),
            account: this.getAccount(paymentCsv[1]),
            amount: this.getPaymentValue(paymentCsv[0]),
            exist: 'abc'
        };

        return data;
    }

    private getAccount(utfText: string) {
        const dataArray = utfText.split(':');
        return dataArray[1].trim();
    }

    private getPaymentDate(utfText: string) {
        const dataArray = utfText.split('|');
        const paymentDate: string = this.datePipe.transform(dataArray[1], 'yyyy-dd-MM');
        return paymentDate;
    }

    private getClientName(utfText: string) {
        const dataArray = utfText.split(':');
        const client = dataArray[1].split(' ');
        return client[1];
    }

    private getClientSurname(utfText: string) {
        const dataArray = utfText.split(':');
        const client = dataArray[1].split(' ');
        return client[2];
    }

    private getPurpose(utfText: string) {
        const dataArray = utfText.split(':');
        const purpose: string = dataArray[1];
        return purpose.trim();
    }

    private getPaymentValue(utfText: string) {
        const dataArray = utfText.split('|');
        return dataArray[3];
    }

}
