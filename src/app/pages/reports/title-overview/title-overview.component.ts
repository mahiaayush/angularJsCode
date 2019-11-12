import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, GridAPII } from '../../../acore/base';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { TitleOverviewModel, TitleOverviewDateModel } from './title-overview.model';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';
import { DataDropDownOptions, AutoCompleteModel, TabsComponent } from '../../../acore/components';
import { columnDefsTitleOverview } from './title-overview.data';
import { ReportsService } from '../reports.service';
import { ConstantService, ProjectService, TopMenuNavigationData } from '../../../acore/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title-overview',
  templateUrl: './title-overview.component.html',
  styleUrls: ['./title-overview.component.css']
})
export class TitleOverviewComponent extends BaseComponent {

  NAME_TITLE_OVERVIEW = 'TITLE_OVERVIEW';
  titleOverviewModel: TitleOverviewModel;
  titleOverviewDateModel: TitleOverviewDateModel;
  myNavData: any = {};
  activeLink: any = null;
  rowData: Array<any>;
  isShow: boolean;
  isVisible: boolean;
  status: any;

  @ViewChild('history') historyTemplate;
  @ViewChild(TabsComponent) tabsComponent;

  gridOptions: GridOptions = {};

  constructor(private reportsService: ReportsService,
    public constantService: ConstantService,
    private projectService: ProjectService,
    private route: ActivatedRoute) {
    super(reportsService, projectService);
    this.gridOptions.onCellClicked = this.agCellClicked;
    this.myNavData = constantService.routerNav.REPORT;
    this.activeLink = constantService.routerNav.REPORT.links[1];
    this.isShow = false;
    this.isVisible = true;
    this.status = this.route.params['value'].status;
  }




  agCellClicked = (event) => {
    const headerName: string = event.colDef.headerName;
    const row = event['data'];
    if (headerName === 'History') {
      this.rowData = [event['data']];
      this.openListTab();
    }
  }

  openListTab() {
    this.tabsComponent.openTab('History',
      this.historyTemplate, {}, true, 'historyTemplate');

  }

  xtBaseOnInit() {

  }

  initSearchModels() {
    this.titleOverviewModel = new TitleOverviewModel();
    const titleOverviewSession = ProjectUtils.getTitleOverview();
    this.titleOverviewDateModel = new TitleOverviewDateModel();
    // this.setValueFromSession(this.titleOverviewModel, titleOverviewSession);
  }

  restrictNumeric(e: any) {
    return ProjectUtils.html.numericValidation(e);

  }

  onPaste(event) {
    ProjectUtils.html.numericValidationOnPaste(event);
  }

  getSearchModel(name: string) {
    if (name === this.NAME_TITLE_OVERVIEW) {
      return this.titleOverviewModel;
    } else {
      return this.titleOverviewModel;
    }
  }

  getDateModel() {
    return this.titleOverviewDateModel;
  }

  setSearchModel(name: string) {
    const searchModel = this.getValueFromSearchModel(name);
    if (name === this.NAME_TITLE_OVERVIEW) {
      ProjectUtils.setTitleOverview(searchModel);
    }
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_TITLE_OVERVIEW) {
      return columnDefsTitleOverview;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_TITLE_OVERVIEW) {
      return UrlConstants.TITLE_OVERVIEW;
    }
  }

  doOnSubmit(e) {
    console.log('doOnSubmit', e);
    this.OnSubmit(this.NAME_TITLE_OVERVIEW);
    this.isShow = true;
    this.isVisible = false;

  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_TITLE_OVERVIEW) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyTitleOverview(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_TITLE_OVERVIEW);
    if (this.status === '1') {
      this.OnSubmit(this.NAME_TITLE_OVERVIEW);
    }

  }


}
