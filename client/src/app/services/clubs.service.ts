import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private http: HttpClient) { }

  GetClub() {
    //TO DO add API
    return this.http.get('http://localhost:8000/api/')
  }
}
