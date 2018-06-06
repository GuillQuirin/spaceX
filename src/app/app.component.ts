import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public spinkit = Spinkit;
  
  public menuItems = [
    {
      name : 'Prochain vol',
      path : '/launch/:flight_number'
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
  
  lat: number = 51.678418;
  lng: number = 7.809007;
  //https://maps.googleapis.com/maps/api/geocode/json?
  //address=1600+Amphitheatre+Parkway,+Mountain+View,+CA
  //&key=AIzaSyAqp3YHHox5uGXGwiQkK4uyuW5ws5gFdSM
  config = {
    title: 'SpaceX app',
    version: ''
  };

  constructor(private router:Router){

  }
}
