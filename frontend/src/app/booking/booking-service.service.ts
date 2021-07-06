import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Booking } from './booking';
@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  private baseUrl = 'http://localhost:7000/api/booking';  // passenger api

  private bookingURL = "http://localhost:8086/books";   //booking api

  constructor(private http: HttpClient) { }

  getTrain(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  saveTicket(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  savedTicket(train_id: any, passenger_id: any): Observable<any> {
    const reqBody = {
      'passengerID': passenger_id,
      'trainID': train_id,
      'paymentDone': 'NO'
    };
    return this.http.post(this.bookingURL, reqBody, { responseType: 'text' as 'json' })

    //return this.http.post(this.bookingURL, reqBody);


  }


}
