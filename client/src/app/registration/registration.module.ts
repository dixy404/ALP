import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';
import { RegistrationClubComponent } from './registration-club/registration-club.component';
import { RegistrationMemberComponent } from './registration-member/registration-member.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [RegistrationContainerComponent, RegistrationClubComponent, RegistrationMemberComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FileUploadModule,
  ]
})
export class RegistrationModule { }
