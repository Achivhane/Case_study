import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {SearchServiceService} from './search-service.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  from:any;
  to:any;
  user:any;
  date:any
  SearchData = new FormGroup({
  //   from:new FormControl(''),
  // to:new FormControl(''),
  // date:new FormControl('') 
})
  //creating the object
  trains: any;
  constructor(private service:SearchServiceService,private router : Router, private formBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.SearchData = this.formBuilder.group({
      from: [null,Validators.required],
      to: [null, Validators.required],
      date:[null,Validators.required],
    })
    this.user="yes";
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //month from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    this.date = year +"-0"+ month +"-"+day;
  }
  

  public searchTrain()
  {
    console.log("calling search train");
     let resp=this.service.searchTrains(this.SearchData.value);
     resp.subscribe((data)=>this.trains=data);
     
 }
 
public searchNewTrain()
 {
  this.service.getTrain(this.SearchData.value)
  .subscribe(

    response => {
      this.trains=response;
      console.log(response.msg)
     // console.log(response[0].msg);
      //this.router.navigate(['searchtrains',response[0]._id]);
    }
  )
    
}

updateTicket(id:any){
  console.log("id "+id)
  this.router.navigate(['booking',id])
}
booking(){
  this.router.navigateByUrl('booking');
}

validateSearch()
{
console.log("heheheh")
}

  }

