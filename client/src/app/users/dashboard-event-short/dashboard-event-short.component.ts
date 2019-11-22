import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard-event-short',
  templateUrl: './dashboard-event-short.component.html',
  styleUrls: ['./dashboard-event-short.component.css']
})
export class DashboardEventShortComponent implements OnInit {
  events;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.GetEvent().subscribe((data) => {
      console.log(data);
      this.events = data ['event'];
      
    });
  }

}
