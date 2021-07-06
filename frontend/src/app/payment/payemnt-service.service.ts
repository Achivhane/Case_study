import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayemntServiceService {

  private bookingURL="http://localhost:8086/booking"; 
  private bookURL="http://localhost:8086/reservation"; 

  constructor(private http:HttpClient) { }
  


  getPaymentPending(id: any): Observable<any> {
    console.log("getpaymentpending "+id)
    return this.http.get(`${this.bookingURL}/${id}`);
    // return this.http.post('',reqbody)
  }
  postPaymentDetails(id:any):Observable<any>
  {
     console.log("postPaymentDetails"+id)
    return this.http.put(`${this.bookURL}/${id}`,'');
  }
}
    

