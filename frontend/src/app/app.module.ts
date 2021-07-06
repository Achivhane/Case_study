import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { LoginComponent } from './passenger/login/login.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RegistrationComponent } from './passenger/registration/registration.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { FooterComponent } from './footer/footer.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AddTrainComponent } from './admin/add-train/add-train.component';
import { ViewTrainComponent } from './admin/view-train/view-train.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UpdateTicketComponent } from './admin/update-ticket/update-ticket.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewbookticketComponent } from './view-ticket/viewbookticket/viewbookticket.component';
import { BookedTicketComponent } from './admin/booked-ticket/booked-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingComponent,
    PaymentComponent,
    HomeComponent,
    SearchComponent,
    RegistrationComponent,
    ViewTicketComponent,
    AdminloginComponent,
    FooterComponent,
    AddTrainComponent,
    ViewTrainComponent,
    AdminHomeComponent,
    UpdateTicketComponent,
    ContactComponent,
    ProfileComponent,
    ViewbookticketComponent,
    BookedTicketComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RegistrationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
