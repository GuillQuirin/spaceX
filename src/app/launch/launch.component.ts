import { Component, OnInit, Input } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchesComponent implements OnInit {
  
  @Input() launch: Launch;
  
  constructor() { 
  }

  ngOnInit() {

  }

}

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  
  launch: Launch;

  constructor(private spacexApi: SpacexApiService) { 
    this.spacexApi.getLatestLaunch().subscribe(data => {
      this.launch = data;
      console.log(this.launch);
    });
  }

  ngOnInit() {
    
  }

}
