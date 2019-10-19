import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';

import { PaymentFormsComponent } from '../payment-forms/payment-forms.component';
import { MaterialModule } from '../../modules/material.module';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [PaymentsComponent, PaymentFormsComponent],
  imports: [
    CommonModule, MaterialModule, //MatProgressSpinnerModule
  ],
  // exports: [MatProgressSpinnerModule]
})
export class PaymentsModule { }
