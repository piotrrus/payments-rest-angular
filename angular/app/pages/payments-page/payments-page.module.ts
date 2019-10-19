import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsPageComponent } from './payments-page.component';
import { PaymentsComponent } from '../../components/payments/payments.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaymentsService } from '../../services/payments.service';

@NgModule({
  declarations: [PaymentsPageComponent, PaymentsComponent],
  imports: [
    CommonModule, MatTableModule, MatSortModule, MatPaginatorModule
  ],
  providers:[PaymentsService]
})
export class PaymentsPageModule { }
