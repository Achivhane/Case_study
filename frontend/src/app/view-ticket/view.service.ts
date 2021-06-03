import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
 
  private viewTicketURL="http://localhost:8086/bookpayment";
  constructor(private http:HttpClient ) { }

  viewticket():Observable<any>
  {
     console.log("postPaymentDetails"+"YES")
    return this.http.get(this.viewTicketURL);
  }
}
