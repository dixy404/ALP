import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/model/member.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDeleteMemberComponent } from '../confirm-delete-member/confirm-delete-member.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.css']
})
export class MemberPageComponent implements OnInit {
  user: Member;

  constructor(private membersService: MembersService, 
    private router: Router,
    private dialog: MatDialog,
    //Za upload slike
    /*public formBuilder: FormBuilder*/) { }

  ngOnInit() {
    this.membersService.GetUser().subscribe((data) => {
      console.log(data);
      this.user = data ['user'];
      
    });
  }

  editMember() {
    console.log("testing user", this.user)
    this.router.navigate([`members/edit-member/${this.user.id}`]);
  }

  deleteUser(id) {
    this.dialog.open(ConfirmDeleteMemberComponent, {
      width: '350px'
    })
    
    .afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.membersService.deleteUser(id).subscribe(data => console.log(data))
  }
});
}





  
/*
  onSelectImage(event) {
    this.selectedImage = event.srcElement.files[0];
 }

 onCreateService(form: FormGroup) {
   const formData = new FormData();
   formData.append('image', this.selectedImage, this.selectedImage.name);
   
   console.log(formData);
 }  */

}
