import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberContainerComponent } from './member-container/member-container.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { EditMemberComponent } from './edit-member/edit-member.component';


const routes: Routes = [
  {
    path: '',
    component: MemberContainerComponent,
    children: [
      {
        path: '',
        component: MemberPageComponent,
      },
      {
        path: 'edit-member/:id',
        component: EditMemberComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
