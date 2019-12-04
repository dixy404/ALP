import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../model/member.model';


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  GetUser() {
    
    return this.http.get('http://localhost:8000/api/user')
  }

  editUser(id, user: Member) {
    return this.http.put(`http://localhost:8000/api/updateuser/${id}`, user)
  }
}
