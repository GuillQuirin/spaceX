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

@NgModule({
  declarations: [
    AppComponent,
    MissionsComponent,
    CompanyInfoComponent,
    LaunchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
