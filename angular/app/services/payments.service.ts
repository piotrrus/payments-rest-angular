import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestApiService } from './api-service';

@Injectable({
   providedIn: 'root'
})
export class PaymentsService {

   constructor(private apiService: RestApiService) { }

   public getBanksList(): Observable<any> {
      return this.apiService.get('payments');
   }
   // 
   public checkIfPaymentExist(data): Observable<any> {
      const paymentDate = data['paymentDate'];
      const name = data['name'];
      const surname = data['surname'];
      const amount = data['amount'];
      const account = data['account'];
// amount/${amount}/
      const path = `payments/exist/date/${paymentDate}/name/${name}/surname/${surname}/account/${account}`;
      return this.apiService.get(path);
   }

   //TODO: to check if work OK
   public savePayments(data: []): Observable<any> {
      const paymentData = data;
      // czy to potrzebne?
      // this.getPaymentData(data);

      const url = `payments/exist/`;
      // const url = `payments/exist/date/{$date}/name/${name}/surname/${surname}/amount/${amount}/account/${account}`;
      return this.apiService.post(url, paymentData);
   }

   private getPaymentData(data) {
      return {
         paymantDate: data['date'],
         name: data['name'],
         surname: data['surname'],
         amount: data['amount'],
         account: data['account']
      }
   }
}
