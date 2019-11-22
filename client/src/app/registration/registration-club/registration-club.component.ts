import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Club } from 'src/app/model/club.model';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-club',
  templateUrl: './registration-club.component.html',
  styleUrls: ['./registration-club.component.css']
})
export class RegistrationClubComponent implements OnInit {

  public form: FormGroup; 
  public club: Club = new Club();


  constructor(public formBuilder: FormBuilder,
    private registrationService: RegistrationService
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

  
    this.registrationService.registerClub(clubName, clubPresident, clubSecretary, foundedIn, vision, mission, address, phoneNumber, email, password, password_confirmation)
    .subscribe(data => console.log(data))
 
 
}

}