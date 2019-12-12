import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { IconLegendComponent } from '../icon-legend/icon-legend.component';

@Component({
  selector: 'app-dashboard-event-long',
  templateUrl: './dashboard-event-long.component.html',
  styleUrls: ['./dashboard-event-long.component.css']
})
export class DashboardEventLongComponent implements OnInit {
  event;

  constructor(private route: ActivatedRoute,
     private usersService: UsersService,
     private dialog: MatDialog) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get("id")
    // console.log("test124", testing)
    this.usersService.GetEventlong(id).subscribe((data) => {
      console.log(data);
      this.event = data
      
    });
  }

  openLegend() {
    this.dialog.open(IconLegendComponent, {
      width: '950px'
    })
      
  }

}
