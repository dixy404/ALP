import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { RegistrationService } from 'src/app/services/registration.service';
import { Member} from 'src/app/model/member.model';

@Component({
  selector: 'app-registration-member',
  templateUrl: './registration-member.component.html',
  styleUrls: ['./registration-member.component.css']
})
export class RegistrationMemberComponent implements OnInit {

  public form: FormGroup; 
  public user: Member = new Member();

  constructor(public formBuilder: FormBuilder, 
    private snackBar: MatSnackBar,
    private registrationService: RegistrationService
    ) { }

  ngOnInit() {

    this.registrationService.testGetUsers()
      .subscribe(data => console.log(data))
    this.form = this.formBuilder.group({
      name: [this.user.name, Validators.required], 
      lastName: [this.user.lastName, Validators.required], 
      dateOfBirth: [this.user.dateOfBirth, Validators.required],
      placeOfBirth: [this.user.placeOfBirth, Validators.required],
      passportId: [this.user.passportId,],
      idNumber: [this.user.idNumber,],
      ssn: [this.user.ssn,],
      nationality: [this.user.nationality,],
      occupation: [this.user.occupation,],
      bloodType: [this.user.bloodType,],
      address: [this.user.address, Validators.required], 
      email: [this.user.email, Validators.email],
      password: [this.user.password, Validators.required],
      confirmPassword: [this.user.confirmPassword, Validators.required],

    });
  }

  save({value, valid}: {value: Member, valid: boolean}) { 
    console.log(this.form.value)
    const {name, address, email} = this.form.value

    this.registrationService.test(name, address, email)
      .subscribe(data => console.log("FIRST SERVICE DATA FROM SUBSCRIBE"))
   
   
   
   
      // if(valid) { 
      //this.service.add(value);
    //  this.form.reset(); 
     // this.snackBar.open("Podaci su sacuvani", null, { 
      //  duration: 2000,
      //});
  //  }
  }

  
  }


