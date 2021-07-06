import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginUserD: any = {};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    document.body.className = "selector3";
  }
  onSubmit(login: NgForm) {

    const body = {

      "email": login.value[''].email,
      "password": login.value[''].password
    };

    //send http request
    console.log(login.value['']);
    return this.http.post("http://localhost:7000/adminlog", body, { responseType: 'text' as 'json' })
      .subscribe(res => {
        if (res === "1") {
          alert("Login Successfull")
          this.router.navigate(['adminhome'])
        }
        else {
          alert("Please check username and password")
        }

      })
  }

  addtrain() {
    this.router.navigate(['adminhome'])
  }
  ngOnDestroy() {
    document.body.className = "";
  }
}

