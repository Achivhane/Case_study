import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/authservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginUserD: any = {};
  username ='';
  password ='';
  valid : boolean = true;
  constructor(private http: HttpClient, private router: Router, private auth: AuthserviceService) { }

  ngOnInit(): void {
    document.body.className = "selector3";
  }
  AData = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  loginUserTSE(data: any): Observable<any> {
    console.log(data)
    const url = 'http://localhost:5000/api/users/signin';
    return this.http.post(url, data);
  }
  onSubmit() {
    if(this.username !== '' && this.password !== ''){
      var reqBody = {
        email: this.username,
        password: this.password
      }
      this.loginUserTSE(reqBody).subscribe(res => {

        if (res.name != '') {
          // alert("Login Successfull");
          this.auth.setUser(res.name);
          this.router.navigate(['adminhome'])
          console.log("get user " + this.auth.getUser());
        }
      });
      this.valid = true;
    }else if(this.username === '' && this.password !== ''){
      this.valid = false;
    }else if(this.username !== '' && this.password === ''){
      this.valid = false;
    }
      
  }

  addtrain() {
    this.router.navigate(['adminhome'])
  }
  ngOnDestroy() {
    document.body.className = "";
  }
}

