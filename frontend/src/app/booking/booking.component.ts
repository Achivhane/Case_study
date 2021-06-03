import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../search/train';
import { FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { BookingServiceService } from './booking-service.service';
import { PassengerServiceService } from '../passenger/passenger-service.service';
import { User } from '../passenger/user';
import { Booking } from './booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 

  SearchData = new FormGroup({
    from:new FormControl(''),
  to:new FormControl('') })

  TPData = new FormGroup({
    
  })

  id:any;
  train : Train = new Train("","","","",0,"","",0,true);
  _user:any;
 
  books:Booking = new Booking();

  constructor( private service:BookingServiceService, private passService : PassengerServiceService,
    private router : Router, private route:ActivatedRoute) { 
 

    }

  ngOnInit(): void {
    
    this.passService.fetchAllPassenger().subscribe
    (data => {
      console.log(data);
      this._user=data;

    }, error => console.log(error));
    

    this.id=this.route.snapshot.params['id'];
    this.service.getTrain(this.id).
    subscribe(data => {
      console.log(data)
      this.train = data;
    }, error => console.log(error));

  }

  bookTicket(){

  }

  onSubmit() {
  
    this.bookTicket();    
  }
  Booking(train_id :any ,passenger_id : any){
    console.log("  "+train_id+"  "+passenger_id);
    this.service.savedTicket(train_id,passenger_id).subscribe(
      data => {
        console.log(data)
        this.id=data
        if(data)
        {
          this.router.navigate(['payment',this.id]);
        }
      }
    )
      
  }

}
