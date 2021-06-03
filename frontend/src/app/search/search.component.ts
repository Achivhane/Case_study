import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {SearchServiceService} from './search-service.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  

  SearchData = new FormGroup({
    from:new FormControl(''),
  to:new FormControl('') })
  //c reating the object
  trains: any;
  constructor(private service:SearchServiceService,
    private router : Router) { }

  ngOnInit(): void {
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
      console.log(response);
    }
  )
    
}

updateTicket(id:any){
  console.log("id bhetla"+id)
  this.router.navigate(['booking',id])
}
booking(){
  this.router.navigateByUrl('booking');
}

  }

