import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  rockets: Rocket[];
  capsules: Capsule[];
  cores: Core[];

  constructor(private spacexApi: SpacexApiService) {
    this.getRockets();
  }

  ngOnInit() { }

  switchTab(value){
    switch(value.tab.textLabel){
      case 'Réacteurs':
        this.getRockets();
      break;

      case 'Capsules':
        this.getCapsules();
      break;

      case 'Noyaux':
        this.getCores();
      break;
    }
  }

  getRockets(){
    this.spacexApi.getRockets().subscribe(data => {
      this.rockets = data;
      console.log(this.rockets);
    });
  }

  getCapsules(){
    this.spacexApi.getCapsules().subscribe(data => {
      this.capsules = data;
      console.log(this.capsules);
    });
  }

  getCores(){
    this.spacexApi.getCores().subscribe(data => {
      this.cores = data;
      console.log(this.cores);
    });
  }
}