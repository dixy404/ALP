import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { memberLogin } from '../model/member-login';
import { clubLogin } from '../model/club-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getAll() {
    
    return this.http.get<memberLogin[]>('http://localhost:8000/api/loginuser');
}

getClubLogin() {
  return this.http.get<clubLogin[]>('http://localhost:8000/api/loginclub');
}

}
