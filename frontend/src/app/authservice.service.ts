import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  username:any;
  constructor() { }

  setUser(username:any)
  {
    this.username=username;
  }

  getUser()
{
  return this.username;
}
}
