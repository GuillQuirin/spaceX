import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  launches: Launch[];
  next : any;
  time : any;
  params = {
    event : '/next',
    filter : { 
      order: 'desc'
    }
  };



  constructor(private spacexApi: SpacexApiService) { 
    this.spacexApi.getLaunches(this.params).subscribe(data => {
      this.launches = [];
      this.launches = this.launches.concat(data);
      
      var date = new Date(this.launches[0].launch_date_unix*1000);
      var month = "0"+(date.getMonth()+1);
      var day = date.getUTCDate();
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      this.next = this.launches[0].launch_date_utc.replace("T"," ").replace("Z","").replace(".000","");
      console.log(this.next);
      this.time = day + ' / ' + month.substr(-2) + ' à ' + hours + 'h' + minutes.substr(-2) + ':' + seconds.substr(-2);
    });
  }


  ngOnInit() { }

}