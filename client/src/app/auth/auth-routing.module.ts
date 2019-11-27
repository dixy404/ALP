import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { LoginComponent } from './login/login.component';
import { LoginClubComponent } from './login-club/login-club.component';


const routes: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login-club',
        component: LoginClubComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
