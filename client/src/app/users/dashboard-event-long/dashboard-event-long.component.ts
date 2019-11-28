import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard-event-long',
  templateUrl: './dashboard-event-long.component.html',
  styleUrls: ['./dashboard-event-long.component.css']
})
export class DashboardEventLongComponent implements OnInit {
  event;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.GetEventlong().subscribe((data) => {
      console.log(data);
      this.event = data ['event'];
      
    });
  }

}
