import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubContainerComponent } from './club-container/club-container.component';
import { ClubPageComponent } from './club-page/club-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClubContainerComponent,
    children: [
      {
        path: 'cb',
        component: ClubPageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }
