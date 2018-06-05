import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menuItems = [
    {
      name : 'Prochain vol',
      path : '/launch'
    },
    {
      name : "Missions",
      path : '/missions'
    },
    {
      name : 'Company Info',
      path : '/companyInfo'
    }
  ];

  title = 'SpaceX app';

  config = {
    title: 'SpaceX app',
    version: ''
  };

  constructor(private router:Router){

  }

  goToMissionsPage(){
    this.router.navigate(['missions']);
  }
}
