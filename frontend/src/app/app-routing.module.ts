import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Routing to each component
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './passenger/login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { SearchComponent } from './search/search.component';
import { RegistrationComponent } from './passenger/registration/registration.component';
import { ViewTicketComponent} from './view-ticket/view-ticket.component'
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AddTrainComponent } from './admin/add-train/add-train.component';
import { ViewTrainComponent } from './admin/view-train/view-train.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UpdateTicketComponent } from './admin/update-ticket/update-ticket.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { ViewbookticketComponent } from './view-ticket/viewbookticket/viewbookticket.component';
import { BookedTicketComponent } from './admin/booked-ticket/booked-ticket.component';

//path and component
const routes: Routes = [

  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegistrationComponent},
  {path: 'updatetrain/:id', component: BookingComponent},
  {path: 'booking/:id', component: BookingComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'payment/:id', component: PaymentComponent},
  {path: 'search', component: SearchComponent},
  {path: 'view/:id', component: ViewTicketComponent},
  {path: 'viewticket', component: ViewTicketComponent},
  {path: 'adminlogin', component:AdminloginComponent},
  {path: 'addtrain', component:AddTrainComponent},
  {path:'viewtrain',component:ViewTrainComponent},
  {path:'adminhome',component:AdminHomeComponent},
  {path:'updatetrain',component:UpdateTicketComponent},
  {path:'profile', component:ProfileComponent},
  {path:'contact',component:ContactComponent},
  {path:'viewbookticket',component:ViewbookticketComponent},
  {path:'bookedticket',component:BookedTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
