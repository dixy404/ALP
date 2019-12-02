import { Component, OnInit } from '@angular/core';
import { ClubsService } from 'src/app/services/clubs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup,  } from '@angular/forms';
import { Club } from 'src/app/model/club.model';

import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.css']
})
export class EditClubComponent implements OnInit {

  public form: FormGroup = null; 
  public club: Club = new Club();

  constructor(
    public formBuilder: FormBuilder,
    private clubsService: ClubsService,
    private router: Router,
    private route: ActivatedRoute
    ) {
      
    this.clubsService.GetClub()
    .subscribe((data: any) => {
      this.club = data.club

      this.form = this.formBuilder.group({
        clubName: [data.club.clubName],
        clubPresident: [data.club.clubPresident],
        clubSecretary: [data.club.clubSecretary],
        foundedIn: [data.club.foundedIn],
        vision: [data.club.vision],
        mission: [data.club.mission],
        address: [data.club.address],
        phoneNumber: [data.club.phoneNumber], 
        email: [data.club.email],
      });

    })
     }

  ngOnInit() {
    
  }

  save({value, valid}: {value: Club, valid: boolean}) { 
    //console.log(this.form.value)
    //const {clubName, clubPresident, clubSecretary, foundedIn, vision, mission, address, phoneNumber, email } = this.form.value
    // this.clubsService.editClub(id)
    // .subscribe();
    this.clubsService.editClub(this.club.id, this.form.value).subscribe()
    this.router.navigate(['/clubs']); 
    
     /* this.registrationService.registerClub(clubName, clubPresident, clubSecretary, foundedIn, vision, mission, address, phoneNumber, email)
      .subscribe(data => console.log(data))*/
   
   
  }

}

