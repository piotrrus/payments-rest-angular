import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-import-page',
  templateUrl: './import-page.component.html',
  styleUrls: ['./import-page.component.css']
})
export class ImportPageComponent implements OnInit {
 
  bankList: any = [];

  constructor(private api: BankService) { }

  ngOnInit() {
    this.getBanksList();
  }

  getBanksList() {
    this.api.getBanksList().subscribe(data => {
      this.bankList = data.data.attributes;
    });
  }
}
