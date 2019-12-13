import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';
import { RegistrationClubComponent } from './registration-club/registration-club.component';
import { RegistrationMemberComponent } from './registration-member/registration-member.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MatSidenavModule } from '@angular/material';
import { FileUploadModule } from 'ng2-file-upload';
import { MemberRulesComponent } from './member-rules/member-rules.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { VerifyClubComponent } from './verify-club/verify-club.component';
import { VerifyMemberComponent } from './verify-member/verify-member.component';
import { EmailVerifiedComponent } from './email-verified/email-verified.component';


@NgModule({
  declarations: [RegistrationContainerComponent, RegistrationClubComponent, RegistrationMemberComponent, MemberRulesComponent, VerifyClubComponent, VerifyMemberComponent, EmailVerifiedComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FileUploadModule,
    FlexLayoutModule,
    
  ],

  entryComponents: [
    MemberRulesComponent,
  ],
})
export class RegistrationModule { }
