import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-container',
  templateUrl: './club-container.component.html',
  styleUrls: ['./club-container.component.css']
})
export class ClubContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
   this.router.navigate(['/auth/login-club']);
  }

}
