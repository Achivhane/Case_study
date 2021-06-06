import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Routing to each component
//import { LoginComponent} from './login/login.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './passenger/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { SearchComponent } from './search/search.component';
import { RegistrationComponent } from './passenger/registration/registration.component';
import { ViewTicketComponent} from './view-ticket/view-ticket.component'
//path and component
const routes: Routes = [

  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegistrationComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'updatetrain/:id', component: BookingComponent},
  {path: 'booking/:id', component: BookingComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'payment/:id', component: PaymentComponent},
  {path: 'search', component: SearchComponent},
{path: 'view/:id', component: ViewTicketComponent},
{path: 'viewticket', component: ViewTicketComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
