import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
currentLocation = '';
  constructor(private router: Router) {
    this.currentLocation = window.location.href
   }

  ngOnInit(): void {
    // alert(this.currentLocation);
  }
  addTrainPage() {
    this.router.navigate(['addtrain'])
  }

  viewTrainPage() {
    this.router.navigate(['viewtrain'])
  }
  bookedTicketPage(){
    this.router.navigate(['bookedticket'])
  }
}
