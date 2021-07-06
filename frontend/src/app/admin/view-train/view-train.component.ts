import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewtrainService } from '../viewtrain.service'

@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.css']
})
export class ViewTrainComponent implements OnInit {
  
  //creating the object
  trains: any;
  id: any;
  from: any;
  to: any

  SearchData = new FormGroup({
    from: new FormControl(''),
    to: new FormControl('')
  })
 //injecting the services in the constructor
  constructor(private service: ViewtrainService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    
    this.service.getTrain().
      subscribe(data => {
        console.log("get trains")
        console.log("Data Found"+data)
        this.trains = data;
      }, error => console.log("Error"+error));

  }

  deleteTrain(id: any) {
    this.service.deleteTrain(id).
      subscribe(data => {
        console.log("delete trains")
        console.log("Data Found"+data)
        this.trains = data;
      }, error => console.log("Error"+error));
    this.reloadCurrentPage();
  }

  reloadCurrentPage() {
    window.location.reload();
  }
}
