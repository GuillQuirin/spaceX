import { Component, OnInit, Input } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  
  launch: Launch;
  launchpad: Launchpad;

  params = {
    filter : {
      flight_number : this.activatedRoute.snapshot.params.flight_number
    }
  };  
  
  constructor(private spacexApi: SpacexApiService, private activatedRoute : ActivatedRoute) {
    this.spacexApi.getLaunch(this.params).subscribe(data => {
      this.launch = data[0];

      if(typeof this.launch!=='undefined'){
        this.spacexApi.getLaunchpad(this.launch.launch_site.site_id).subscribe(data => {
          this.launchpad = data;
        });
      }

    });
  }

  ngOnInit() {}

}
