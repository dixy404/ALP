import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberContainerComponent } from './member-container/member-container.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDeleteMemberComponent } from './confirm-delete-member/confirm-delete-member.component';



@NgModule({
  declarations: [MemberContainerComponent, MemberPageComponent, EditMemberComponent, ConfirmDeleteMemberComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FlexLayoutModule,
  ],

  entryComponents: [
    ConfirmDeleteMemberComponent
  ],

})
export class MembersModule { }
