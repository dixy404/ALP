import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Club } from 'src/app/model/club.model';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';


import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-registration-club',
  templateUrl: './registration-club.component.html',
  styleUrls: ['./registration-club.component.css']
})
export class RegistrationClubComponent implements OnInit {

  clubName = new FormControl('', [Validators.required]);
  clubPresident = new FormControl('', [Validators.required]);
  clubSecretary = new FormControl('', [Validators.required]);
  foundedIn = new FormControl('', [Validators.required]);
  vision= new FormControl('', [Validators.required]);
  mission = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  password_confirmation = new FormControl('', [Validators.required]);

  public form: FormGroup; 
  public club: Club = new Club();

  errors;


  constructor(public formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      clubName: [this.club.clubName, Validators.required],
      clubPresident: [this.club.clubPresident, Validators.required],
      clubSecretary: [this.club.clubSecretary, Validators.required],
      foundedIn: [this.club.foundedIn, Validators.required],
      vision: [this.club.vision, Validators.required],
      mission: [this.club.mission, Validators.required],
      address: [this.club.address, Validators.required],
      phoneNumber: [this.club.phoneNumber, Validators.required], 
      email: [this.club.email, Validators.email],
      password: [this.club.password, Validators.required],
      password_confirmation : [this.club.password_confirmation, Validators.required],
      
    });
}



save({value, valid}: {value: Club, valid: boolean}) { 
  console.log(this.form.value)
  const {clubName, clubPresident, clubSecretary, foundedIn, vision, mission, address, phoneNumber, email, password, password_confirmation } = this.form.value
  this.router.navigate(['/auth/login-club']); 
  
    this.registrationService.registerClub(clubName, clubPresident, clubSecretary, foundedIn, vision, mission, address, phoneNumber, email, password, password_confirmation)
    
     .pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    )
    .subscribe(data => console.log(data), err => console.log("Igor's errors", err))
 
 
}



getEmailErrorMessage() {
  return this.email.hasError('required') ? 'Unesite email' :
      this.email.hasError('email') ? 'Email nije ispravan' :
         '';
}

getclubNameErrorMessage() {
  return this.clubName.hasError('required') ? 'Unesite Ime kluba' :
         '';
}

getclubPresidentErrorMessage() {
  return this.clubPresident.hasError('required') ? 'Unesite ime predsjednika kluba' :
         '';
}

getclubSecretaryErrorMessage() {
  return this.clubSecretary.hasError('required') ? 'Unesite ime sekretara kluba' :
         '';
}

getfoundedInErrorMessage() {
  return this.foundedIn.hasError('required') ? 'Unesite godinu osnivanja kluba' :
         '';
}

getvisionErrorMessage() {
  return this.vision.hasError('required') ? 'Unesite viziju' :
         '';
}

getmissionErrorMessage() {
  return this.mission.hasError('required') ? 'Unesite misiju' :
         '';
}

getaddressErrorMessage() {
  return this.address.hasError('required') ? 'Unesite Adresu' :
         '';
}

getphoneNumberErrorMessage() {
  return this.phoneNumber.hasError('required') ? 'Unesite Broj telefona' :
         '';
}

getpasswordErrorMessage() {
  return this.password.hasError('required') ? 'Unesite Lozinku' :
         '';
}

getpassword_confirmationErrorMessage() {
  return this.password_confirmation.hasError('required') ? 'Unesite istu lozinku' :
         '';
}

}