import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:7000/api/booking';
@Injectable({
  providedIn: 'root'
})
export class PassengerServiceService {
  //endpoint api for register
  private register = 'http://localhost:5000/api/register';
  private login = 'http://localhost:5000/api/login';

  constructor(private http: HttpClient) { }

  loginUser(data: any) {
    console.log("inside LoginUser");
    console.log(data);
    //return this.http.post(this.login, data);
    return this.http.post("http://localhost:5000/api/users/signin", data, { responseType: 'text' as 'json' })

  }

  public fetchAllPassenger() {
    console.log("inside search component method ")
    return this.http.get("http://localhost:5000/api/passengers");
  }
  savedTicketBook(data: any) {
    console.log("inside savedTicketBook");
    console.log(data);
    return this.http.post("http://localhost:5000/api/ticketSaved", data, { responseType: 'text' as 'json' })
  }
}

