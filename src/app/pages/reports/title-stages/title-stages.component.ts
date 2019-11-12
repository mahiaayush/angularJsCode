import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { BaseComponent, GridAPII } from '../../../acore/base';
import { TitleStagesModel } from './title-stages.model';
import { ReportsService } from '../reports.service';
import { columnDefsMetadataProcessing } from './title-stages.data';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';
import { DataDropDownOptions, AutoCompleteModel } from '../../../acore/components';
import { ConstantService, ProjectService } from '../../../acore/services';
import { Router } from '@angular/router';
import { TopMenuNavigationData } from '../../desktop/top-menu/top-menu.navigation.data';


@Component({
  selector: 'app-title-stages',
  templateUrl: './title-stages.component.html',
  styleUrls: ['./title-stages.component.css']
})
export class TitleStagesComponent extends BaseComponent {
  myNavData: any = {};
  activeLink: any = null;
  NAME_TITLE_STAGES = 'TITLE_STAGES';
  titleStagesModel: TitleStagesModel;
  stagesData: Array<any>;
  gridOptionsVenderReports: GridOptions = {};

  constructor(
    private reportsService: ReportsService,
    public constantService: ConstantService,
    private projectService: ProjectService,
    private router: Router) {
    super(reportsService, projectService);

    this.gridOptions.onCellClicked = this.agCellClicked;
    this.myNavData = constantService.routerNav.REPORT;
    this.activeLink = constantService.routerNav.REPORT.links[0];
  }




  agCellClicked = (event) => {

    const headerName: string = event.colDef.headerName;
    const row = event['data'];

  }

  navigate(url, value) {
    if (url === 'processing') {
      this.router.navigate(ProjectUtils.navigateQueryValue(TopMenuNavigationData.REPORT.links[2].routerLink, 1));
    } else if (url === 'deliveries') {
      this.router.navigate(ProjectUtils.navigateQueryValue(TopMenuNavigationData.REPORT.links[3].routerLink, 1));
    } else if (url === 'overview') {
      this.router.navigate(ProjectUtils.navigateQueryValue(TopMenuNavigationData.REPORT.links[1].routerLink, 1));
    }


  }

  titleStagesData() {
    this.showLoader();
    this.loadDataFromApi(this.NAME_TITLE_STAGES)
    // .subscribe((data) => {

    //   this.stagesData = data.data;
    //   this.hideLoader();
    //   // console.log(this.msg);
    // }, (err) => {
    //   this.hideLoader();
    // });
  }

  handleLoadDataFromApi(name: string, userDetails: any) {
    this.stagesData = userDetails.data;
    this.hideLoader();
    // console.log(this.msg);
  }

  // handleErrorLoadDataFromApi(name: string, error: any) {
  //    this.hideLoader();
  // }

  xtBaseOnInit() {

  }

  initSearchModels() {
    this.titleStagesModel = new TitleStagesModel();
    const titleStagesSession = ProjectUtils.getTitleStages();
    this.setValueFromSession(this.titleStagesModel, titleStagesSession);

  }


  getSearchModel(name: string) {
    if (name === this.NAME_TITLE_STAGES) {
      return this.titleStagesModel;
    }
  }

  setSearchModel(name: string) {
    const searchModel = this.getValueFromSearchModel(name);
    if (name === this.NAME_TITLE_STAGES) {
      ProjectUtils.setTitleStages(searchModel);
    }
  }


  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_TITLE_STAGES) {
      return columnDefsMetadataProcessing;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_TITLE_STAGES) {
      return UrlConstants.TITLE_STAGES;
    }
  }

  doOnSubmit(e) {
    console.log('doOnSubmit', e);
    this.titleStagesData();

  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_TITLE_STAGES) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyTitleStagesReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_TITLE_STAGES);

  }

}

