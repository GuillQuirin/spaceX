import { Component, OnInit, Input } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  
  launch: Launch;

  constructor(private spacexApi: SpacexApiService) { 
    this.spacexApi.getLaunch().subscribe(data => {
      this.launch = data;
      console.log(this.launch);
    });
  }

  ngOnInit() {
    
  }

}
