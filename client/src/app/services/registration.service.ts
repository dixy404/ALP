import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) { }

  test(name, address, email) {
    return this.http.post('http://localhost:8000/api/register', {name: name, address: address, email: email})
  }

  testGetUsers() {
    return this.http.get('http://localhost:8000/api/members')
  }
}
