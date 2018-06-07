import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { MissionsComponent } from '../missions/missions.component';
import { CompanyInfoComponent } from '../company-info/company-info.component';
import { LaunchComponent } from '../launch/launch.component';
import { RocketComponent } from '../rocket/rocket.component';

const appRoutes: Routes = [

  {
    path: 'missions',
    component: MissionsComponent
  },
  {
    path: 'companyInfo',
    component: CompanyInfoComponent
  },
  {
    path: 'launch/:flight_number',
    component: LaunchComponent
  },
  {
    path: 'rockets',
    component: RocketComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
