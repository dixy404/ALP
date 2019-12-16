import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor } from './login-helpers/jwt.interceptor';
import { ErrorInterceptor } from './login-helpers/error.interceptor';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FileUploadModule } from 'ng2-file-upload';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileDeletedMessageComponent } from './profile-deleted-message/profile-deleted-message.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProfileDeletedMessageComponent,
        
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FlexLayoutModule,
   
  ],

  
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
