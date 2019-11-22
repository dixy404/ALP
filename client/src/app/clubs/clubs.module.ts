import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubContainerComponent } from './club-container/club-container.component';
import { ClubPageComponent } from './club-page/club-page.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AddEventComponent } from './add-event/add-event.component';


@NgModule({
  declarations: [ClubContainerComponent, ClubPageComponent, AddEventComponent],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    AppMaterialModule,
  ]
})
export class ClubsModule { }
