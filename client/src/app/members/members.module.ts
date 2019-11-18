import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberContainerComponent } from './member-container/member-container.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [MemberContainerComponent, MemberPageComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    AppMaterialModule,
  ]
})
export class MembersModule { }
