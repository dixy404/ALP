import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { clubLogin } from '../model/club-login';

import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationClubService {

  private currentUserSubject: BehaviorSubject<clubLogin>;
  public currentUser: Observable<clubLogin>;

  constructor(private http: HttpClient,
    private router: Router) {
      this.currentUserSubject = new BehaviorSubject<clubLogin>(JSON.parse(localStorage.getItem('currentClub')));
      this.currentUser = this.currentUserSubject.asObservable();
     }


     public get currentUserValue(): clubLogin {
     return this.currentUserSubject.value;
}

login(email: string, password: string) {
  
  return this.http.post<any>('http://localhost:8000/api/loginclub', { email, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));


}

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('token');
  this.router.navigate(['/home']);
}

}
