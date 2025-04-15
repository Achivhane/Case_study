import { Component } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  currentLocation = '';
  constructor(private router: Router) {
    this.currentLocation = window.location.href;
   }
   home(){
    console.log(this.router.url);
    if(this.router.url === "/adminhome"){
      this.router.navigate(['adminhomem'])
    }else if(this.router.url === "/search") {
      this.router.navigate(['search'])
    }

  }

}
