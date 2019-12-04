import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Member } from 'src/app/model/member.model';
import { MembersService } from 'src/app/services/members.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  public form: FormGroup = null; 
  public user: Member = new Member();

  constructor(
    public formBuilder: FormBuilder,
    private membersService: MembersService,
    private router: Router,
    private route: ActivatedRoute,
    
  ) {

    this.membersService.GetUser()
    .subscribe((data:any) => {
      this.user = data.user

      this.form = this.formBuilder.group({
        name: [data.user.name ], 
        lastName: [data.user.lastName ], 
        dateOfBirth: [data.user.dateOfBirth],
        placeOfBirth: [data.user.placeOfBirth],
        passportId: [data.user.passportId],
        idNumber: [data.user.idNumber],
        ssn: [data.user.ssn],
        nationality: [data.user.nationality],
        occupation: [data.user.occupation],
        bloodType: [data.user.bloodType],
        address: [data.user.address],
        phoneNumber: [data.user.phoneNumber], 
        email: [data.user.email],
  
    });

  })
   }

  ngOnInit() {
  }

  save({value, valid}: {value: Member, valid: boolean}) { 
   
    this.membersService.editUser(this.user.id, this.form.value).subscribe()
    this.router.navigate(['/members']); 

  }
}
