import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewticketService {

  private ticketUrl="http://localhost:5000/getticket";
  constructor(private http : HttpClient) { }

  getBookedTicket():Observable<any>
  {
    console.log("getBookedTicket()");
    return this.http.get(this.ticketUrl);
  }

}
