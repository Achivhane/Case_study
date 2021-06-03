import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl='http://localhost:7000/api/booking';
@Injectable({
  providedIn: 'root'
})
export class PassengerServiceService {
  //endpoint api for register
  private register = 'http://localhost:5000/api/register'; 
  private login = 'http://localhost:5000/api/login';

  constructor(private http: HttpClient) {}
  
  loginUser(data: any) {
    console.log("inside LoginUser");
      console.log(data);
    //return this.http.post(this.login, data);
    return this.http.post("http://localhost:5000/api/login", data, {responseType:'text' as 'json'})

  }

  public fetchAllPassenger()
  {
    console.log("inside search component method ")
    return this.http.get("http://localhost:5000/api/passengers");
  }

//   loginUser(passenger: any) {
//     return this.http.post<any>(this.login, passenger);
//   }
//   //method is used to chk whether user is valid or not -- for route gaurd
//   loggedIn() {
//     return !!localStorage.getItem('token'); //it will return true false whether token exits in browser or not
//   }

//   //logout method
//   logoutUser() {
//     localStorage.removeItem('token');
//     //move to present home component
//     this.router.navigate(['/home']); 
//   }

//   //fetches the token value
//   getToken() {
//     return localStorage.getItem('token');
//   }


testing(data : any)
{
  this.http.post("http://localhost:5000/api/login", data, {responseType:'text' as 'json'})
  .subscribe(Response => {

    // If response comes hideloader() function is called
    // to hide that loader 
    if(Response)1234
    {  
     console.log('Testing')
    }
    
    console.log(Response)
   
  });
}

}

