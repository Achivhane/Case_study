import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PassengerServiceService } from '../passenger-service.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/authservice.service';

//regular expression
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  // creating object
  username: any;
  password: any;
  errors: any;
  validateStatus: boolean = true;
  errorDetl: string;
  token: any;
  userData: [] = [];
  valid: boolean = true;
  PData = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  value: string = '';
  //injecting services in the constructor
  constructor(private pass: PassengerServiceService, private router: Router, private http: HttpClient, private auth: AuthserviceService) {
    this.validateStatus = true;
    this.errorDetl = '';
  }
  message: any;
  ngOnInit(): void {
    console.log("component loaded");
    console.log("message " + this.message)
  }

  search(data: any) {
    console.log(data)
    if (data === JSON.stringify(data)) {
      console.log("inside loop");
      this.router.navigateByUrl('booking');
      this.router.navigate(['updatetrain', 10])
    } else {
      console.log("outside loop");
      this.router.navigate(['/booking',]);

    }
  }
  loginUserTSE(data: any): Observable<any> {
    console.log(data)
    const url = 'http://localhost:5000/api/users/signin';
    return this.http.post(url, data);
  }
  //applying validation
  validateSignIn() {
    console.log("" + this.username)
    if (this.username != null) {
      if (EMAIL_REGEX.test(this.username)) {
        this.validateStatus = true;
      } else {
        document.getElementById('username')?.classList.add('invalid-input');
        document.getElementById('password')?.classList.add('invalid-input');

        this.validateStatus = false;
        this.errorDetl = 'Enter a valid email';
      }
    } else {

      document.getElementById('username')?.classList.add('invalid-input');
      document.getElementById('password')?.classList.add('invalid-input');
      this.validateStatus = false;
      this.errorDetl = 'Email is required';
    }

    if (this.validateStatus) {
      if (this.password == null) {
        //document.getElementById('username').classList.add('invalid-input');
        this.errorDetl = 'Password is required';
        this.validateStatus = false;
      } else {
        this.validateStatus = true;
      }
    }

    if (this.validateStatus) {

      var reqBody = {
        email: this.username,
        password: this.password
      }
      this.loginUserTSE(reqBody).subscribe(res => {

        if (res.name != '') {
          // alert("Login Successfull");
          this.auth.setUser(res.name);
          this.router.navigate(['search'])
          console.log("get user " + this.auth.getUser());
          this.valid = true;
        }
        else {
          this.valid = false;
          // alert("Please check username and password")
        }

      }, error => {
        this.errors = error;
        this.valid = false;
        // alert("Please check username and password")
      });
    }
  }
}
