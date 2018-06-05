import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  launches: Launch[];

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getLaunches({flight_number: 8}).subscribe(data => {
      this.launches = data;
      console.log(this.launches);
    });
   }

  ngOnInit() {
    
  }

}
