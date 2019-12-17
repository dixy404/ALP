import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Event } from 'src/app/model/event.model';
import { ClubsService } from 'src/app/services/clubs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  tripName = new FormControl('', [Validators.required]);
  tripDate = new FormControl('', [Validators.required]);
  tripTime = new FormControl('', [Validators.required]);
  departureTime = new FormControl('', [Validators.required]);
  location = new FormControl('', [Validators.required]);
  tripDuration = new FormControl('', [Validators.required]);
  difficultyLevel = new FormControl('', [Validators.required]);
  equipment = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  organizer = new FormControl('', [Validators.required]);

  public form: FormGroup; 
  public event: Event = new Event();

  constructor(public formBuilder: FormBuilder,
    private clubsService: ClubsService,
    private router: Router
    ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      tripName: [this.event.tripName, Validators.required], 
      tripTime: [this.event.tripTime, Validators.required],
      organizer: [this.event.organizer, Validators.required],
      tripDate: [this.event.tripDate, Validators.required], 
      location: [this.event.location, Validators.required], 
      description: [this.event.description],
      price: [this.event.price, Validators.required],
      tripDuration: [this.event.tripDuration,Validators.required ], 
      departureTime: [this.event.departureTime, Validators.required], 
      accommodation: [this.event.accommodation], 
      season: [this.event.season], 
      difficultyLevel: [this.event.difficultyLevel, Validators.required ], 
      equipment: [this.event.equipment, Validators.required], 
      elevation: [this.event.elevation],
      hours: [this.event.hours], 
      trailLength: [this.event.trailLength], 
      trailType: [this.event.trailType], 
      terrainType: [this.event.terrainType], 
  });

}

save({value, valid}: {value: Event, valid: boolean}) { 
  console.log(this.form.value)
  const {tripName, tripDate, organizer, tripTime, location, description, price, tripDuration, departureTime, accommodation, season, difficultyLevel, equipment, elevation, hours, trailLength, trailType, terrainType } = this.form.value
  this.router.navigate(['/clubs']);
  
    this.clubsService.addEvent(tripName, tripDate, organizer, tripTime, location, description, price, tripDuration, departureTime, accommodation, season, difficultyLevel, equipment, elevation, hours, trailLength, trailType, terrainType)
    .subscribe(data => console.log(data))
}

gettripNameErrorMessage() {
  return this.tripName.hasError('required') ? 'Unesite naziv' :
         '';
}

gettripDateErrorMessage() {
  return this.tripDate.hasError('required') ? 'Unesite datum' :
         '';
}

gettripTimeErrorMessage() {
  return this.tripTime.hasError('required') ? 'Unesite vrijeme okupljanja' :
         '';
}

getdepartureTimeErrorMessage() {
  return this.departureTime.hasError('required') ? 'Unesite vrijeme polaska' :
         '';
}

getlocationErrorMessage() {
  return this.location.hasError('required') ? 'Unesite mjesto polaska' :
         '';
}

gettripDurationErrorMessage() {
  return this.tripDuration.hasError('required') ? 'Izaberite dužinu izleta u danima' :
         '';
}

getdifficultyLevelErrorMessage() {
  return this.difficultyLevel.hasError('required') ? 'Izaberite teren/težinu' :
         '';
}

getequipmentErrorMessage() {
  return this.equipment.hasError('required') ? 'Izaberite vrstu opreme' :
         '';
}

getpriceErrorMessage() {
  return this.price.hasError('required') ? 'Unesite cijenu' :
         '';
}

getorganizerErrorMessage() {
  return this.organizer.hasError('required') ? 'Unesite organizatora' :
         '';
}

}
