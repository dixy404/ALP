import { Component, OnInit } from '@angular/core';
import { ClubsService } from 'src/app/services/clubs.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,  } from '@angular/forms';
import { Club } from 'src/app/model/club.model';

@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.css']
})
export class EditClubComponent implements OnInit {

  public form: FormGroup; 
  public club: Club = new Club();

  constructor(public formBuilder: FormBuilder,
    private clubsService: ClubsService,
    private router: Router
    ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      clubName: [this.club.clubName],
      clubPresident: [this.club.clubPresident],
      clubSecretary: [this.club.clubSecretary],
      foundedIn: [this.club.foundedIn],
      vision: [this.club.vision],
      mission: [this.club.mission],
      address: [this.club.address],
      phoneNumber: [this.club.phoneNumber], 
      email: [this.club.email],
      
    });
  }

  save({value, valid}: {value: Club, valid: boolean}) { 
    //console.log(this.form.value)
    //const {clubName, clubPresident, clubSecretary, foundedIn, vision, mission, address, phoneNumber, email } = this.form.value
    this.router.navigate(['/clubs']); 
    
     /* this.registrationService.registerClub(clubName, clubPresident, clubSecretary, foundedIn, vision, mission, address, phoneNumber, email)
      .subscribe(data => console.log(data))*/
   
   
  }

}

