import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { LoginComponent } from './passenger/login/login.component';

import { BookingComponent } from './booking/booking.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RegistrationComponent } from './passenger/registration/registration.component';
import { TestComponent } from './search/test/test.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
  
    LoginComponent,
    BookingComponent,
    AdminComponent,
    PaymentComponent,
    HomeComponent,
    SearchComponent,
    RegistrationComponent,
    TestComponent,
    ViewTicketComponent,
    
    FooterComponent
    
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
