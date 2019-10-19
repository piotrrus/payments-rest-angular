import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../../services/payments.service';

@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.css']
})
export class PaymentsPageComponent implements OnInit {

  paymentsData: any = [];

  constructor(private api: PaymentsService) { }

  ngOnInit() {
    this.getBanksList();
  }

  getBanksList() {
    this.api.getBanksList().subscribe(data => {
      this.paymentsData = data.data.attributes;
    });
  }

}
