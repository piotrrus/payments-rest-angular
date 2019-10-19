import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportPageComponent } from './import-page.component';
import { BankService } from '../../services/bank.service';
import { MaterialModule } from '../../modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { ImportComponent } from '../../components/import/import.component';
import { PaymentFormsComponent } from '../../components/payment-forms/payment-forms.component';
import { ErrorMsgService } from '../../services/error-msg.service';




@NgModule({
  declarations: [ImportPageComponent, ImportComponent, PaymentFormsComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule, MatButtonModule, ReactiveFormsModule
  ], 
  //
  exports: [ImportComponent, PaymentFormsComponent, MaterialModule, MatButtonModule, ReactiveFormsModule],
  providers: [BankService, ErrorMsgService],
})
export class ImportPageModule { }
