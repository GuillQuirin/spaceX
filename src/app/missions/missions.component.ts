import { Component, OnInit, Input } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';

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

  constructor(private spacexApi: SpacexApiService) {
    this.filtering();
  }

  ngOnInit() {
    
  }

  
  filtering(){
    console.log(this.params);
    this.spacexApi.getLaunches(this.params).subscribe(data => {
      this.launches = [];
      this.launches = this.launches.concat(data);
    });
  }

}
