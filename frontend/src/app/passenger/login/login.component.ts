import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { PassengerServiceService } from '../passenger-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
PData = new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})
 value : string ='';
  constructor(private pass:PassengerServiceService,private router : Router) {}
  message:any;
  ngOnInit(): void {
    console.log("component loaded");
    console.log("message "+this.message)
  }
  Passenger(){
    console.log("calling properly");
    console.log(this.PData.value);
    this.pass.loginUser(this.PData.value);
  };
  public loginNow(){
    console.log("in login now () method");
    console.log(this.PData.value);
    let resp=this.pass.loginUser(this.PData.value);
    resp.subscribe((data)=> {this.message=data,
      this.search(data);
    }
    );
  //  this.pass.testing(this.PData.value);
     
 }
 search(data:any){
  console.log(data)
  if(data ===JSON.stringify(data))
  {
    console.log("inside loop");
    this.router.navigateByUrl('booking');
    this.router.navigate(['updatetrain',10])
  }else{
    console.log("outside loop");
    this.router.navigate(['/booking',]);
    
  }
}



}
