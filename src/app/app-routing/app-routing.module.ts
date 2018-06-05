import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';
import { MissionsComponent } from '../missions/missions.component';
import { CompanyInfoComponent } from '../company-info/company-info.component';
import { LaunchComponent } from '../launch/launch.component';

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
    path: 'launch',
    component: LaunchComponent
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
