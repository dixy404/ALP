import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardEventShortComponent } from './dashboard-event-short/dashboard-event-short.component';
import { DashboardEventLongComponent } from './dashboard-event-long/dashboard-event-long.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [DashboardComponent, DashboardEventShortComponent, DashboardEventLongComponent, WeatherComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppMaterialModule,
  ]
})
export class UsersModule { }
