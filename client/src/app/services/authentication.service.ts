import { Injectable } from '@angular/core';
import { memberLogin } from '../model/member-login';

import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<memberLogin>;
  public currentUser: Observable<memberLogin>;

  constructor(private http: HttpClient,
    private router: Router) {
    this.currentUserSubject = new BehaviorSubject<memberLogin>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): memberLogin {
    return this.currentUserSubject.value;
}

login(email: string, password: string) {
  //Igorov API
  return this.http.post<any>('http://localhost:8000/api/loginuser', { email, password })
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
