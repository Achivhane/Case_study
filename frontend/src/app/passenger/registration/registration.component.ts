import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormGroup, FormControl} from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user :User =new User("","","","",0);
  message:any;

  RData = new FormGroup({
    name:new FormControl(''),
  email:new FormControl(''),
  password:new FormControl(''),
  mobile_number:new FormControl(''), })
  constructor(private service:RegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow(){
    console.log("in register now");
     let resp=this.service.doRegistration(this.RData.value);
      resp.subscribe((data)=>this.message=data);
     
 }

}
