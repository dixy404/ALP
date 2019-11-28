import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  GetEventshort() {
    return this.http.get('http://localhost:8000/api/events')
  }

  GetEventlong(id) {
    return this.http.get(`http://localhost:8000/api/showevent/${id}`)
  }

}
