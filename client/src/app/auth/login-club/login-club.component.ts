import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationClubService } from 'src/app/services/authentication-club.service';

@Component({
  selector: 'app-login-club',
  templateUrl: './login-club.component.html',
  styleUrls: ['./login-club.component.css']
})
export class LoginClubComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authclubService: AuthenticationClubService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login() {
    const {email, password } = this.form.value
    this.authclubService.login(email, password).subscribe(data => {
      this.router.navigate(['/clubs']);
  })
  }

}
