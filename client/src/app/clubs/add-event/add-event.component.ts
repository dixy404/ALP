import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Event } from 'src/app/model/event.model';
import { ClubsService } from 'src/app/services/clubs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  public form: FormGroup; 
  public event: Event = new Event();

  constructor(public formBuilder: FormBuilder,
    private clubsService: ClubsService,
    private router: Router
    ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      tripName: [this.event.tripName], 
      tripTime: [this.event.tripTime], 
      tripDate: [this.event.tripDate], 
      location: [this.event.location], 
      description: [this.event.description],
      /* price: [this.event.price], */
      tripDuration: [this.event.tripDuration], 
      departureTime: [this.event.departureTime], 
      accommodation: [this.event.accommodation], 
      season: [this.event.season], 
      difficultyLevel: [this.event.difficultyLevel], 
      equipment: [this.event.equipment], 
      elevation: [this.event.elevation],
      hours: [this.event.hours], 
      trailLength: [this.event.trailLength], 
      trailType: [this.event.trailType], 
      terrainType: [this.event.terrainType], 
  });

}

save({value, valid}: {value: Event, valid: boolean}) { 
  console.log(this.form.value)
  const {tripName, tripDate, tripTime, location, description, /* price, */ tripDuration, departureTime, accommodation, season, difficultyLevel, equipment, elevation, hours, trailLength, trailType, terrainType } = this.form.value
  this.router.navigate(['/home']);
  
    this.clubsService.addEvent(tripName, tripDate, tripTime, location, description, /* price, */ tripDuration, departureTime, accommodation, season, difficultyLevel, equipment, elevation, hours, trailLength, trailType, terrainType)
    .subscribe(data => console.log(data))
}

}
