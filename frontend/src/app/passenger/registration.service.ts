import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user:any)
  {
    return this.http.post("http://localhost:5000/api/users/registration", user, {responseType:'text' as 'json'})
  }
}
