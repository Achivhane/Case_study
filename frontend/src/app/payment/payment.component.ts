
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PayemntServiceService } from './payemnt-service.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 payment:any;
 id:any;
 paymentMessage:any; 

  constructor(private service:PayemntServiceService,private route:ActivatedRoute, private router:Router,private get:PayemntServiceService) { }
  PaymentData= new FormGroup({
    passengerID:new FormControl(''),
    trainID: new FormControl('')
  })

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
   this.service.getPaymentPending(this.id).
   subscribe(data => {
    console.log(data)
    this.paymentMessage= data;
  }, error => console.log(error));
}
   
  public paymentId(id:any){
    console.log("id " +id);
    this.get.postPaymentDetails(id).
   subscribe(data => {
    console.log(data)
    this.paymentMessage= data.message;
    console.log(this.paymentMessage);
    console.log(data.reserved.trainID);
    // add navigation  view ticket ---> on that display all ticket

    if(data)
      {
        this.updateTicket(data.reserved.trainID);
        //this.router.navigate(['viewticket',data.reserved.trainID]);
      }
  }, error => console.log(error));
  
   
  }

  updateTicket(id:any){
    console.log("id bhetla"+id)
    this.router.navigate(['view',id])
  }
  }
  