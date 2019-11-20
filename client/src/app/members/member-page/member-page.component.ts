import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.css']
})
export class MemberPageComponent implements OnInit {
  users;

  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.membersService.GetUser().subscribe((data) => {
      console.log(data);
      this.users = data ['user'];

    });
  }

}
