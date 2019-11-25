import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-container',
  templateUrl: './member-container.component.html',
  styleUrls: ['./member-container.component.css']
})
export class MemberContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
   this.router.navigate(['/auth']);
  }

}
