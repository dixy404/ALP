import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/model/member.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDeleteMemberComponent } from '../confirm-delete-member/confirm-delete-member.component';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.css']
})
export class MemberPageComponent implements OnInit {
  user: Member;


 
  filedata:any;
  //membersService: any;
  //user: any;
  public form: NgForm
    fileEvent(e){
        this.filedata = e.target.files[0];
    }


  constructor(private membersService: MembersService, 
    private router: Router,
    private dialog: MatDialog,
    private http: HttpClient,) { }

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

onSubmit(f: NgForm, id, user:Member) {
       
  var myFormData = new FormData();
  const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');
myFormData.append('thumbnail', this.filedata);
this.http.post(`http://localhost:8000/api/adduserphoto/${id}` +  user, myFormData, {
headers: headers
}).subscribe(data => {
console.log(data);
});

}
 


}
