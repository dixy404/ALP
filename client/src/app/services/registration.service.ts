import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) { }

  register(name, address, email, phoneNumber, lastName, dateOfBirth, placeOfBirth, passportId, idNumber, ssn, nationality, occupation, bloodType, password, password_confirmation, thumbnail,) {
    return this.http.post('http://localhost:8000/api/registeruser', { name: name, address: address, email: email, phoneNumber: phoneNumber, lastName: lastName, dateOfBirth: dateOfBirth, placeOfBirth: placeOfBirth, passportId: passportId, idNumber: idNumber, ssn: ssn, nationality: nationality, occupation: occupation, bloodType: bloodType, password: password, password_confirmation: password_confirmation, thumbnail: thumbnail }, { withCredentials: true })
  }

 
  registerClub(clubName, clubPresident, clubSecretary, foundedIn, vision, mission, address, phoneNumber, email, password, password_confirmation ) {
    return this.http.post('http://localhost:8000/api/registerclub', { clubName: clubName, clubPresident: clubPresident, clubSecretary: clubSecretary, foundedIn: foundedIn, vision: vision, mission: mission, address: address, phoneNumber: phoneNumber, email: email, password: password, password_confirmation: password_confirmation })
  }

  testGetUsers() {
    return this.http.get('http://localhost:8000/api/members') 
  }
}
