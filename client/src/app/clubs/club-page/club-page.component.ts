import { Component, OnInit } from '@angular/core';
import { ClubsService } from 'src/app/services/clubs.service';
import { Router } from '@angular/router';
import { Club } from 'src/app/model/club.model';

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.css']
})
export class ClubPageComponent implements OnInit {
  club: Club;

  constructor(private clubsService: ClubsService, private router: Router) { }

  ngOnInit() {
    this.clubsService.GetClub().subscribe((data) => {
      console.log(data);
      this.club = data ['club'];
    });
  }

  
  editClub() {
    console.log("testing club", this.club)
    this.router.navigate([`clubs/edit-club/${this.club.id}`]);
  }

  deleteClub(id) {
    this.clubsService.deleteClub(id).subscribe(data => console.log(data))
  }

}
