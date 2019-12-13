import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';
import { RegistrationClubComponent } from './registration-club/registration-club.component';
import { RegistrationMemberComponent } from './registration-member/registration-member.component';
import { VerifyClubComponent } from './verify-club/verify-club.component';
import { VerifyMemberComponent } from './verify-member/verify-member.component';
import { EmailVerifiedComponent } from './email-verified/email-verified.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrationContainerComponent,
    children: [
      {
        path: 'club-form',
        component: RegistrationClubComponent,
      },
      {
        path: 'member-form',
        component: RegistrationMemberComponent,
      },
      {
        path: 'verification-club',
        component: VerifyClubComponent,
      },
      {
        path: 'verification-member',
        component: VerifyMemberComponent,
      },
      {
        path: 'email-verified',
        component: EmailVerifiedComponent,
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
