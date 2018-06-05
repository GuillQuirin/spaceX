import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../spacex-api.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  
  companyInfo: CompanyInfo;

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getCompanyInfos().subscribe(data => {
      this.companyInfo = data;
      console.log(this.companyInfo);
    });
  }

  ngOnInit() {}

}