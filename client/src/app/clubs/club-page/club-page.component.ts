import { Component, OnInit } from '@angular/core';
import { ClubsService } from 'src/app/services/clubs.service';

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.css']
})
export class ClubPageComponent implements OnInit {
  club;

  constructor(private clubsService: ClubsService) { }

  ngOnInit() {
    this.clubsService.GetClub().subscribe((data) => {
      console.log(data);
      this.club = data ['club'];
      
    });
  }

}
