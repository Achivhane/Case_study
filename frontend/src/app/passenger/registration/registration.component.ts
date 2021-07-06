import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User("", "", "", "", 0);
  message: any;
  public form = new FormGroup({})

  constructor(private service: RegistrationService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //validation
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      name: [null, Validators.required],
      mobile_number: [null, Validators.required]
    })
  }

  public registerNow() {
    console.log("in register now");
    let resp = this.service.doRegistration(this.form.value);
    resp.subscribe((data) => {
      alert(`New Train Successfully Added`);

      this.router.navigate(['login']);
    })
    console.log("returned");

  }
}
