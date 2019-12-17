import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './login-helpers/auth.guard';
import { AuthclubGuard } from './login-helpers/auth-club.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileDeletedMessageComponent } from './profile-deleted-message/profile-deleted-message.component';
import { IntroPageComponent } from './intro-page/intro-page.component';


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
    loadChildren: () => import('./clubs/clubs.module').then(mod => mod.ClubsModule), canActivate: [AuthclubGuard]
  },
  {
    path: 'members',
    loadChildren: () => import('./members/members.module').then(mod => mod.MembersModule), canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule)
  },
  {
    path:'profile-deleted',
    component: ProfileDeletedMessageComponent,
  },
  {
    path: 'intro',
    component: IntroPageComponent,
  },
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
