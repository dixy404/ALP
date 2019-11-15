import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardEventShortComponent } from './dashboard-event-short/dashboard-event-short.component';
import { DashboardEventLongComponent } from './dashboard-event-long/dashboard-event-long.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardEventShortComponent,
      },
      {
        path: 'event-info',
        component: DashboardEventLongComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
