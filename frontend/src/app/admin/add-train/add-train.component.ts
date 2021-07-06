import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {
  dat: any
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //month from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    this.dat = year + "-0" + month + "-" + day;
  }
  onSubmit(train: NgForm) {
    const body = {

      "train_name": train.value[''].train_name,
      "from": train.value[''].from,
      "to": train.value[''].to,
      "fare": train.value[''].fare,
      "date": train.value[''].date,
      "arrival_time": train.value[''].arrival_time,
      "departure_time": train.value[''].departure_time,
      "available": train.value[''].available
    };
    //send http request
    console.log(train.value['']);
    return this.http.post("http://localhost:7000/admin", body, { responseType: 'text' as 'json' })
      .subscribe(res => {
        console.log(body);
        console.log(res);
        alert(`New Train Successfully Added`);

        this.router.navigate(['viewtrain']);
      });
  }

}
