import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
// import { ProfileModule } from './profile/profile.module';





@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // MaterialModule,
    // ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }