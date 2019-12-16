import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/model/member.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDeleteMemberComponent } from '../confirm-delete-member/confirm-delete-member.component';

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.css']
})
export class MemberPageComponent implements OnInit {
  user: Member;

  constructor(private membersService: MembersService, 
    private router: Router,
    private dialog: MatDialog) { }

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
      width: '300px'
    })
    this.membersService.deleteUser(id).subscribe(data => console.log(data))
  }

}
