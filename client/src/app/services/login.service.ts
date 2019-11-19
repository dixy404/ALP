import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { memberLogin } from '../model/member-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getAll() {
    //Igorov API
    return this.http.get<memberLogin[]>('http://localhost:8000/api/loginuser');
}

}
