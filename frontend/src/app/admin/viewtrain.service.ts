import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

const base='http://localhost:7000/api/admin';
const baseUrl='http://localhost:7000/api/TrainDetails';
const baseUrl1='http://localhost:7000/api/trains';

@Injectable({
  providedIn: 'root'
})
export class ViewtrainService {

  constructor(private http:HttpClient) { }
  fetachTrain(data:any){
    return this.http.post(base,data)
  }
  getTrain():Observable<any>
  {
    return this.http.get(baseUrl);
  }
  deleteTrain(id:any){
    console.log("inside delte train");
    
    return this.http.delete(`${baseUrl1}/${id}`);
  }
}
