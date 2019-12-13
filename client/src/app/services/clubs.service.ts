import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Club } from '../model/club.model';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private http: HttpClient) { }

  GetClub() {
    
    return this.http.get('http://localhost:8000/api/club')
  }

  addEvent(tripName, tripDate, tripTime, location, description, price, tripDuration, departureTime, accommodation, season, difficultyLevel, equipment, elevation, hours, trailLength, trailType, terrainType) {
    
    return this.http.post('http://localhost:8000/api/createevent', {tripName: tripName, tripDate: tripDate, tripTime: tripTime, location: location, description: description, price: price, tripDuration: tripDuration, departureTime: departureTime, accommodation: accommodation, season: season, difficultyLevel: difficultyLevel, equipment: equipment, elevation: elevation, hours: hours, trailLength: trailLength, trailType: trailType, terrainType: terrainType })
  }

  editClub(id, club: Club) {
    return this.http.put(`http://localhost:8000/api/updateclub/${id}`, club)
     
  }

  deleteClub(id) {
    return this.http.delete(`http://localhost:8000/api/deleteclub/${id}`,)
  }
}
