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

import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';


@NgModule({
  declarations: [ClubContainerComponent, ClubPageComponent, AddEventComponent, EditClubComponent, ConfirmDeleteComponent],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FlexLayoutModule,
  ],

  entryComponents: [
    ConfirmDeleteComponent,
  ],
})
export class ClubsModule { }
