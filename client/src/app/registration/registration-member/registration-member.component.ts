import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { RegistrationService } from 'src/app/services/registration.service';
import { Member} from 'src/app/model/member.model';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-registration-member',
  templateUrl: './registration-member.component.html',
  styleUrls: ['./registration-member.component.css']
})
export class RegistrationMemberComponent implements OnInit {

  uploader: FileUploader = new FileUploader({ url: "http://localhost:8000/api/registeruser", removeAfterUpload: false, autoUpload: true });
  
  
  public form: FormGroup; 
  public user: Member = new Member();

  constructor(public formBuilder: FormBuilder, 
    private snackBar: MatSnackBar,
    private registrationService: RegistrationService,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit() {

    
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
      phoneNumber: [this.user.phoneNumber, Validators.required], 
      email: [this.user.email, Validators.email],
      password: [this.user.password, Validators.required],
      password_confirmation : [this.user.password_confirmation, Validators.required],
      thumbnail: [this.user.thumbnail],
      

    });
  }

  save({value, valid}: {value: Member, valid: boolean}) { 
    console.log(this.form.value)
    const {name, address, email, phoneNumber, lastName, dateOfBirth, placeOfBirth, passportId, idNumber, ssn, nationality, occupation, bloodType, password, password_confirmation, thumbnail } = this.form.value
    this.router.navigate(['/auth']); 
    /*this.registrationService.test(name, address, email)
      .subscribe(data => console.log("FIRST SERVICE DATA FROM SUBSCRIBE"))*/
    
      this.registrationService.register(name, address, email, phoneNumber, lastName, dateOfBirth, placeOfBirth, passportId, idNumber, ssn, nationality, occupation, bloodType, password, password_confirmation, thumbnail )
      .subscribe(data => console.log(data))
   
   
      // if(valid) { 
      //this.service.add(value);
    //  this.form.reset(); 
     // this.snackBar.open("Podaci su sacuvani", null, { 
      //  duration: 2000,
      //});
  //  }
  }



  
  //IMAGE UPLOAD

 /* onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8000/api/registeruser', uploadData, {
      reportProgress: true,
     observe: 'events'
    })
      .subscribe(event => {
        console.log(event); 
      });
  }*/

  
  }


