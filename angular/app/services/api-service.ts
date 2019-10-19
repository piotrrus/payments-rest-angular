import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError, tap } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';

const restPath = 'http://localhost/laravel/payments/api/';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})

export class RestApiService {

    constructor(private http: HttpClient) {}

    public get(url: string): Observable<any> {
        return this.http.get<any>(`${restPath}${url}`)
            .pipe(
                catchError(
                     catchError(this.handleError)
                )
            );
    }

    public post(url: string, params: any): Observable<any> {
        return this.http.post<any>(`${restPath}${url}`, params)
        .pipe(
            catchError(
                catchError(this.handleError)
            )
        );
    }

    //   getEmployees(): Observable<Employee> {
    //     return this.http.get<Employee>(this.apiURL + '/employees')
    //     .pipe(
    //       retry(1),
    //       catchError(this.handleError)
    //     )
    //   }


    //   createEmployee(employee): Observable<Employee> {
    //     return this.http.post<Employee>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
    //     .pipe(
    //       retry(1),
    //       catchError(this.handleError)
    //     )
    //   }

    /*updateEmployee(id, employee): Observable<Employee> {
        return this.http.put<Employee>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
      }*/

     // Error handling
     handleError(error) {
        // console.log('ERR:');
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
      // window.alert(errorMessage);
        // return errorMessage;
    //     this.showError(errorMessage);
        // this.toastr.error('Error', 'error');
        return throwError(errorMessage);
    }

    showError(message) {
        console.log(message);
        //this.toastr.error('Error', 'error');
    }

}