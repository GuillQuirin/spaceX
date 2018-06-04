import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  @Input() launch: Launch;

  /*constructor(private spacexApi: SpacexApiService) { 
    this.spacexApi.getLatestLaunch().subscribe(data => {
      this.launch = data;
      console.log(this.launch);
    })
  }*/

  constructor() { 

  }

  ngOnInit() {}

}
