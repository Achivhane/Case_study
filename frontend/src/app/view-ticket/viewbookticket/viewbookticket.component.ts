import { Component, OnInit } from '@angular/core';
import { ViewticketService } from './viewticket.service';

@Component({
  selector: 'app-viewbookticket',
  templateUrl: './viewbookticket.component.html',
  styleUrls: ['./viewbookticket.component.css']
})
export class ViewbookticketComponent implements OnInit {

  ticket:any;
  constructor(private service : ViewticketService) { }

  ngOnInit(): void {
  this.service.getBookedTicket().
  subscribe(data => {
    console.log("data from get book ticket "+data)
    this.ticket = data
  }, error => console.log(error));

  }

}
