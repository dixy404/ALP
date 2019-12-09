import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material';
import { IconLegendComponent } from '../icon-legend/icon-legend.component';

@Component({
  selector: 'app-dashboard-event-short',
  templateUrl: './dashboard-event-short.component.html',
  styleUrls: ['./dashboard-event-short.component.css']
})
export class DashboardEventShortComponent implements OnInit {
  events;

  constructor(private usersService: UsersService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.usersService.GetEventshort().subscribe((data) => {
      console.log(data);
      this.events = data ['event'];
      
    });
  }

  openLegend() {
    this.dialog.open(IconLegendComponent, {
      width: '750px'
    })
      
  }

}
