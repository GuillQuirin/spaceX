import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public spinkit = Spinkit;
  public menuItems = [
    {
      name : 'Home',
      path : '/home'
    },
    {
      name : 'A propos de SpaceX',
      path : '/companyInfo'
    },
    {
      name : "Missions",
      path : '/missions'
    },
    {
      name : "Fusées",
      path : '/rockets'
    }
  ];

  config = {
    title: 'SpaceX app',
    version: ''
  };

  constructor(private router:Router, private _location: Location){

  }

  back(){
    this._location.back();
  }
}
