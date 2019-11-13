import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';
import { RegistrationClubComponent } from './registration-club/registration-club.component';
import { RegistrationMemberComponent } from './registration-member/registration-member.component';


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
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
