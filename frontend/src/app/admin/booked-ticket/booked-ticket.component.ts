import { Component, OnInit } from '@angular/core';
import { BookedticketService } from './bookedticket.service';

@Component({
  selector: 'app-booked-ticket',
  templateUrl: './booked-ticket.component.html',
  styleUrls: ['./booked-ticket.component.css']
})
export class BookedTicketComponent implements OnInit {

  ticket:any;
  constructor(private service : BookedticketService) { }

  ngOnInit(): void {
  this.service.getBookedTicket().
  subscribe(data => {
    console.log("data from get book ticket "+data)
    this.ticket = data
  }, error => console.log(error));
}
}
