import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatPaginatorIntl } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  @Input() paymentsData: any;
  public payments: any[] = [];
  public dataLength;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['payment_date','full_name', 'account', 'amount', 'payment_purpose'];

  paymentsDataSrc = new MatTableDataSource();

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const data = changes.paymentsData;
    if (data.currentValue) {
      console.log(data.currentValue);
      this.payments = data.currentValue;
      this.paymentsDataSrc.data = this.payments;
      this.dataLength = this.payments.length;
      this.paymentsData.paginator = this.paginator;
      this.paymentsData.sort = this.sort;
    }
  }

}
