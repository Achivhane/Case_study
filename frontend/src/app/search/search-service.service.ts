import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

const baseUrl='http://localhost:7000/api/search';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {



  constructor(private http:HttpClient) { }

  public searchTrains(user:any)
  {
    console.log("inside search component method ")
    return this.http.post("http://localhost:7000/api/search", user, {responseType:'text' as 'json'})
  }
    
  getTrain(data:any):Observable<any>
  {
    return this.http.post(baseUrl, data);
  }
}
