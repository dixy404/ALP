import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './login-helpers/auth.guard';


const routes: Routes = [
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'clubs',
    loadChildren: () => import('./clubs/clubs.module').then(mod => mod.ClubsModule), canActivate: [AuthGuard]
  },
  {
    path: 'members',
    loadChildren: () => import('./members/members.module').then(mod => mod.MembersModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule)
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
