import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  rocket: Rocket[];
  capsule: Capsule[];
  core: Core[];

  constructor(private spacexApi: SpacexApiService) {
    this.getRockets();
  }

  ngOnInit() { }

  getRockets(){
    this.spacexApi.getRockets().subscribe(data => {
      this.rocket = data;
    });
  }

  getCapsules(){
    this.spacexApi.getCapsules().subscribe(data => {
      this.capsule = data;
    });
  }

  getCores(){
    this.spacexApi.getCores().subscribe(data => {
      this.core = data;
    });
  }
}