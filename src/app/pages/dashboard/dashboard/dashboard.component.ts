import {
  Component, OnInit, AfterViewInit,
  ViewChild, TemplateRef
} from '@angular/core';
import { GridApi, ColumnApi, ColDef } from 'ag-grid';


import { BaseComponent, GridAPII } from '../../../acore/base';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';
import { ChartListService } from '../../../acore/services';

import { DashBoardService } from '../dashboard.service';
import { DashBoardModel } from './dashboard.model';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements AfterViewInit {


  NAME_DASHBOARD_CHARTS = 'DASHBOARD_CHARTS';
  dashBoardModel: DashBoardModel;








  constructor(
    private dashBoardService: DashBoardService,
    private chartListService: ChartListService
  ) {
    super(dashBoardService);
  }


  initSearchModels() {
    this.dashBoardModel = new DashBoardModel();
    const model = ProjectUtils.getCounterReports();
    //    this.setValueFromSession(this.dashBoardModel, model);

  }

  xtBaseOnInit() {
    this.chartListService.communicate
      .subscribe((data) => {
      });
  }


  getSearchModel(name: string) {
    if (name === this.NAME_DASHBOARD_CHARTS) {
      return this.dashBoardModel;
    }
  }


  setSearchModel(name: string) {
    const searchModel = this.getValueFromSearchModel(name);
    if (name === this.NAME_DASHBOARD_CHARTS) {
      ProjectUtils.setDashBoardCharts(searchModel);
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_DASHBOARD_CHARTS) {
      return '';
    }
  }


  doOnSubmit(e) {
    console.log('doOnSubmit', e);
    this.OnSubmit(this.NAME_DASHBOARD_CHARTS);
  }




  ngAfterViewInit() {

  }







}
