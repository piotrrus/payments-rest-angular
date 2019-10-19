import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {RestApiService} from './api-service';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private apiService: RestApiService) { }

  public getBanksList(): Observable<any> {
    return this.apiService.get('banks');
  }

}
