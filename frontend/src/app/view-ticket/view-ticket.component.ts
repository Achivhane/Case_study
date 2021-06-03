import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ViewService} from './view.service'
import { ActivatedRoute, Router } from '@angular/router';
import { BookingServiceService } from '../booking/booking-service.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})

export class ViewTicketComponent implements OnInit {
  
  ticket:any;
  id:any;
  constructor(private http:HttpClient, private viewservice:ViewService,private route:ActivatedRoute, private router:Router,private bookservice:BookingServiceService) { 
  

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.bookservice.getTrain(this.id).
    subscribe(data => {
      console.log(data)
      this.ticket = data;
    }, error => console.log(error));

  }
  public ViewTicket(){
    console.log("inside of viewTicket method")
    this.viewservice.viewticket().subscribe(data=>{
      console.log(data)
      
  })
  }

  

}
