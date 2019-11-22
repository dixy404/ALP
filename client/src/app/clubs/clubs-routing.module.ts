import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubContainerComponent } from './club-container/club-container.component';
import { ClubPageComponent } from './club-page/club-page.component';
import { AddEventComponent } from './add-event/add-event.component';


const routes: Routes = [
  {
    path: '',
    component: ClubContainerComponent,
    children: [
      {
        path: '',
        component: ClubPageComponent,
      },
      {
        path: 'event',
        component: AddEventComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }
