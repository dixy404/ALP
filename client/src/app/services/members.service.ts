import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  GetUser() {
    
    return this.http.get('http://localhost:8000/api/user')
  }
}
