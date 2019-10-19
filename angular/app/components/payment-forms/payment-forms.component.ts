import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { ErrorMsgService } from '../../services/error-msg.service';
import { PaymentForm } from '../../forms/Payments.form';
import { DatePipe } from '@angular/common';
import { PaymentsInterface } from '../../interfaces/Payments.interface';
import { PaymentsService } from '../../services/payments.service';

@Component({
  selector: 'app-payment-forms',
  templateUrl: './payment-forms.component.html',
  styleUrls: ['./payment-forms.component.css']
})

export class PaymentFormsComponent extends BaseComponent implements OnInit, OnChanges {

  public paymentForm: PaymentForm;

  @Input() paymentsData: PaymentsInterface[];

  datePipe: DatePipe;

  constructor(
    private fb: FormBuilder,
    private vs: ErrorMsgService,
    private paymentsService: PaymentsService
  ) {
    super(vs);
    this.paymentForm = new PaymentForm(fb);
    this.datePipe = new DatePipe('en-PL');
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {


    const data = changes.paymentsData;
    console.log(changes);

    if (data.currentValue) {
      const payment = data.currentValue;
      // const paymentDate = this.datePipe.transform(payment.paymentDate, 'yyyy-MM-dd');
      payment.paymentDate = this.datePipe.transform(payment.paymentDate, 'yyyy-MM-dd');

      this.paymentForm.paymentDate.setValue(payment.paymentDate);
      this.paymentForm.name.setValue(payment.name);
      this.paymentForm.surname.setValue(payment.surname);
      this.paymentForm.account.setValue(payment.account);
      this.paymentForm.amount.setValue(payment.amount);
      // console.log(payment.exist);
      
      this.checkIfPaymentExist(payment);

    }
  }

  checkIfPaymentExist(payment) {
    this.paymentsService.checkIfPaymentExist(payment).subscribe(data => {
      const exist = data.data.attributes[0].amount;
      this.paymentForm.exist.setValue(exist);
      this.paymentForm.exist.setValue(exist ? 'Exist' : 'Not exist');
    });
  }

}
