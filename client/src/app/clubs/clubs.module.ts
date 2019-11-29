import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubContainerComponent } from './club-container/club-container.component';
import { ClubPageComponent } from './club-page/club-page.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AddEventComponent } from './add-event/add-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { EditClubComponent } from './edit-club/edit-club.component';


@NgModule({
  declarations: [ClubContainerComponent, ClubPageComponent, AddEventComponent, EditClubComponent],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class ClubsModule { }
