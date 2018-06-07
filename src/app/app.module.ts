import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MissionsComponent } from './missions/missions.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchComponent } from './launch/launch.component';
import { ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { RocketComponent } from './rocket/rocket.component';
import { HomeComponent } from './home/home.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';

@NgModule({
  declarations: [
    AppComponent,
    MissionsComponent,
    CompanyInfoComponent,
    LaunchComponent,
    RocketComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule,
    CommonModule,
    CountdownTimerModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqp3YHHox5uGXGwiQkK4uyuW5ws5gFdSM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }