import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) { }

  register(name, address, email, lastName, dateOfBirth, placeOfBirth, passportId, idNumber, ssn, nationality, occupation, bloodType, password, confirmPassword) {
    return this.http.post('http://localhost:8000/api/registeruser', { name: name, address: address, email: email, lastName: lastName, dateOfBirth: dateOfBirth, placeOfBirth: placeOfBirth, passportId: passportId, idNumber: idNumber, ssn: ssn, nationality: nationality, occupation: occupation, bloodType: bloodType, password: password, confirmPassword: confirmPassword })
  }

  testGetUsers() {
    return this.http.get('http://localhost:8000/api/members')
  }
}
