import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
 
  private viewTicketURL="http://localhost:8086/bookpayment";
  private viewticketHome="http://localhost:8086/savedBookTicket";
  private saveTicket="http://localhost:8086/ticketSaved";
  constructor(private http:HttpClient ) { }

  viewticket():Observable<any>
  {
     console.log("postPaymentDetails"+"YES")
    return this.http.get(this.viewTicketURL);
  }
  viewtickethome(data:any):Observable<any>
  {
     console.log("postPaymentDetails"+"YES");
     return this.http.post("http://localhost:5000/api/ticketSaved", data, {responseType:'text' as 'json'})
    //return this.http.post(this.saveTicket, data, {responseType:'text' as 'json'})
  }
}
