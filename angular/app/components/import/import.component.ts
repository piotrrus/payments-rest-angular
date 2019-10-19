import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { BaseComponent } from '../base/base.component';

import {BehaviorSubject, Observable} from 'rxjs';

import { PaymentForm } from '../../forms/Payments.form';
import { ErrorMsgService } from '../../services/error-msg.service';
import { PaymentsService } from '../../services/payments.service';
import { PaymentFactory } from '../../factories/payment.factory';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
// extends BaseComponent
export class ImportComponent implements OnInit {


  @Input() bankList: any;

  public paymentsData: any[] = [];
  public banks: any[] = [];

  dataLength: number;

  paymentForm: FormGroup;

  paymentDataForm: PaymentForm;

  validationService: ErrorMsgService;

  filename: string = '';
  filetype: string = '';
  filesize: number;

  bankFileTypeOK: boolean = false;

  bankSelectedFileType: string = '';

  constructor(
    private fb: FormBuilder,
    private paymentsService: PaymentsService,
  ) {
    this.paymentDataForm = new PaymentForm(this.fb);
    this.createForms();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const data = changes.bankList;
    if (data.currentValue[0]) {
      this.banks = data.currentValue;
    }
  }

  private createForms(): void {
    this.paymentForm = this.fb.group({
      payments: this.fb.array([])
    });
  }

  get payments(): FormArray {
    return this.paymentForm.get('payments') as FormArray;
  }

  public addPaymentForm(): void {
    const singlePaymentForm = this.fb.group({
      paymentData: this.paymentDataForm.createForm()
    });

    this.payments.push(singlePaymentForm);
  }

  clearFormArray() {
    while (this.payments.length !== 0) {
      this.payments.removeAt(0);
    }
  }

  onFileSelect(input: HTMLInputElement) {
    const files = input.files;

    const csv = [];
    const paymentsData = [];
    const csvSeparator = ';';

    this.clearFormArray();
    this.dataLength = 0;

    if (files && files.length) {

      this.filename = files[0].name;
      this.filesize = files[0].size;
      const fileType = this.filename.split('.');
      this.filetype = fileType[1];

      if (this.bankSelectedFileType == this.filetype) {
        this.bankFileTypeOK = true;
      } else {
        this.bankFileTypeOK = false;
      }

      if (this.bankFileTypeOK == false) {
        return;
      };

      const fileToRead = files[0];

      const fileReader = new FileReader();

      fileReader.readAsText(fileToRead, "ISO-8859-2");

      fileReader.onloadend = (e) => {
        const paymentFactory = new PaymentFactory();
        const textData: string = fileReader.result as string;
        const lines = textData.split('\n');

        lines.forEach(element => {
          const cols: string[] = element.split(csvSeparator);
          csv.push(cols);
        });


        for (let i = 0; i < csv.length - 1; i++) {
          const payment = paymentFactory.toPaymentFormData(csv[i]);

          paymentsData.push(payment);
          paymentsData[i]['exist'] = 'No';
          this.addPaymentForm();
        }
        this.dataLength = csv.length;
        this.paymentsData = paymentsData;

        // console.log(this.payments);
        // this.checkIfPaymentExist();
      };

    }
  }

  checkIfPaymentExist() {

    for (let i = 2; i < this.paymentsData.length - 1; i++) {
      const payment = this.paymentsData[i];
      // console.log(payment);
      this.paymentsService.checkIfPaymentExist(payment).subscribe(data => {

        const exist = data.data.attributes[0].amount;
        console.log(exist);
        // this.paymentsData[i]['exist'] = (exist ? 'Yes' : 'Nie');
        // console.log( this.paymentsData[i]);
        // this.payments[i].exist = exist;
        // this.paymentForm[i].exist.setValue(payment.exist);
        // return data.data.attributes[0];
        this.paymentsData[0]['exist'] = 'BBBBB';
      });

    }
    // console.log(this.paymentsData);
    
    this.paymentsData[7]['exist'] = 'AAAAAAAAAA';
  }

}
