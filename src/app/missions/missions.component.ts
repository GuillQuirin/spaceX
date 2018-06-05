import { Component, OnInit, Input } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  launches: Launch[];

  params = {
    event : '/all',
    filter : {
      order : 'desc'
    }
  };

  constructor(private spacexApi: SpacexApiService, private router:Router) {
    this.filtering();
  }

  ngOnInit() { }

  //Filter & Order
  filtering(){
    console.log(this.params);
    this.spacexApi.getLaunches(this.params).subscribe(data => {
      this.launches = [];
      this.launches = this.launches.concat(data);
      console.log(data);
    });
  }

  //Redirect to a Launch Page
  goToMission(flight_number){
    this.router.navigate(['/launch/'+flight_number]);
  }
}
