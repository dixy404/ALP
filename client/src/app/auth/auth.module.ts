import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [AuthContainerComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AppMaterialModule,
  ]
})
export class AuthModule { }
