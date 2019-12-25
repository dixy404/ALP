import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm, FormControl } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { RegistrationService } from 'src/app/services/registration.service';
import { Member} from 'src/app/model/member.model';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import { MemberRulesComponent } from '../member-rules/member-rules.component';


@Component({
  selector: 'app-registration-member',
  templateUrl: './registration-member.component.html',
  styleUrls: ['./registration-member.component.css']
})
export class RegistrationMemberComponent implements OnInit {

/*
  filedata:any;
  fileEvent(e) {
      this.filedata = e.target.files[0];   
  }
  */

  //IMAGE UPLOAD
  // uploader: FileUploader = new FileUploader({ url: "http://localhost:8000/api/registeruser", disableMultipart: true,formatDataFunctionIsAsync: true, formatDataFunction: async (item) => {
  //   return new Promise( (resolve, reject) => {
  //     resolve({
  //       name: item._file.name,
  //       length: item._file.size,
  //       contentType: item._file.type,
  //       date: new Date()
  //     });
  //   });
  // } });



 
  name = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  dateOfBirth = new FormControl('', [Validators.required]);
  placeOfBirth = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  password_confirmation = new FormControl('', [Validators.required]);
  
  
  public form: FormGroup; 
  public user: Member = new Member();
  uploader: FileUploader;
  constructor(public formBuilder: FormBuilder, 
    private snackBar: MatSnackBar,
    private registrationService: RegistrationService,
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog
    ) {

        //IMAGE UPLOAD
      /* this.uploader = new FileUploader({ url: "http://localhost:8000/api/registeruser", headers:  {}, disableMultipart: true,formatDataFunctionIsAsync: true, formatDataFunction: async (item) => {
          return new Promise( (resolve, reject) => {
            resolve({
              name: item._file.name,
              length: item._file.size,
              contentType: item._file.type,
              date: new Date()
            });
          });
        } });


        this.uploader.response.subscribe( res => console.log("BLABLABLABLBL") ); */

      }

      /*
        onSubmit(f: NgForm) { 
       
        var myFormData = new FormData();
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        myFormData.append('image', this.filedata);
        this.http.post('http://localhost:8000/api/registeruser', myFormData, {
        headers: headers
        }).subscribe(data => {
        console.log(data);
        });
      
        }
        */

       

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
      //thumbnail: [this.user.thumbnail],
      checkbox : [this.user.checkbox , Validators.required],

      

    });
  }

  save({value, valid}: {value: Member, valid: boolean}) { 
    console.log(this.form.value)
    const {name, address, email, phoneNumber, lastName, dateOfBirth, placeOfBirth, passportId, idNumber, ssn, nationality, occupation, bloodType, password, password_confirmation } = this.form.value
     this.router.navigate(['/registration/verification-member']); 
    
    
      this.registrationService.register(name, address, email, phoneNumber, lastName, dateOfBirth, placeOfBirth, passportId, idNumber, ssn, nationality, occupation, bloodType, password, password_confirmation )
      .subscribe(data => console.log(data))
   
   
  }


  openRules() {
    this.dialog.open(MemberRulesComponent, {
      width: '750px'
    })
      
  }



  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Unesite email' :
        this.email.hasError('email') ? 'Email nije ispravan' :
           '';
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'Unesite Ime' :
           '';
  }

  getlastNameErrorMessage() {
    return this.lastName.hasError('required') ? 'Unesite Prezime' :
           '';
  }

  getdateOfBirthErrorMessage() {
    return this.dateOfBirth.hasError('required') ? 'Unesite Datum rođenja' :
           '';
  }

  getplaceOfBirthErrorMessage() {
    return this.placeOfBirth.hasError('required') ? 'Unesite Mjesto rođenja' :
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


