import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  
  rockets: Rocket[];
  capsules: Capsule[];
  cores: Core[];
  sortedData;

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
      this.sortedData = this.rockets.slice();
    });
  }

  getCapsules(){
    this.spacexApi.getCapsules().subscribe(data => {
      this.capsules = data;
      this.sortedData = this.capsules.slice();
    });
  }

  getCores(){
    this.spacexApi.getCores().subscribe(data => {
      this.cores = data;
      this.sortedData = this.cores.slice();
    });
  }
  
  sortData(sort: Sort, tab: any) {
    let data: any;

    if(tab=="rockets")
      data = this.rockets.slice();
    if(tab=="capsules")
      data = this.capsules.slice();
    if(tab=="cores")
      data = this.cores.slice();
    

    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      return compare(a[sort.active], b[sort.active], isAsc);
      /*switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'type': return compare(+a.type, +b.type, isAsc);
        case 'active': return compare(+a.active, +b.active, isAsc);
        case 'boosters': return compare(+a.boosters, +b.boosters, isAsc);
        case 'cost_per_launch': return compare(+a.cost_per_launch, +b.cost_per_launch, isAsc);
        case 'country': return compare(+a.country, +b.country, isAsc);
        case 'description': return compare(+a.description, +b.description, isAsc);
        case 'diameter.meters': return compare(+a.diameter.meters, +b.diameter.meters, isAsc);
        case 'height.meters': return compare(+a.height.meters, +b.height.meters, isAsc);
        case 'mass.kg': return compare(+a.mass.kg, +b.mass.kg, isAsc);
        case 'stages': return compare(+a.stages, +b.stages, isAsc);
        case 'first_flight': return compare(+a.first_flight, +b.first_flight, isAsc);
        case 'success_rate_pct': return compare(+a.success_rate_pct, +b.success_rate_pct, isAsc);
        default: return 0;
      }*/
    });

    if(tab=="rockets")
      this.rockets =  this.sortedData;
    if(tab=="capsules")
      this.capsules =  this.sortedData;
    if(tab=="cores")
      this.cores =  this.sortedData;
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}