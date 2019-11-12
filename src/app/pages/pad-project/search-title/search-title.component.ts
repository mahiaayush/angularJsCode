import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, GridAPII } from '../../../acore/base';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { TabsComponent } from '../../../acore/components/ng-tabs';
import { Subject } from 'rxjs/Subject';
import { PadProjectService } from '../pad-project.service';
import { SearchTitleModel } from './search-title.model';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';
import { DataDropDownOptions, AutoCompleteModel, TabsComponent } from '../../../acore/components';
import { columnDefsSearchTitle } from './search-title.data';
import { ConstantService, ProjectService } from '../../../acore/services';

@Component({
  selector: 'app-search-title',
  templateUrl: './search-title.component.html',
  styleUrls: ['./search-title.component.css']
})
export class SearchTitleComponent extends BaseComponent {

  NAME_SEARCH_TITLE = 'SEARCH_TITLE';
  searchTitleModel: SearchTitleModel;
  customReInitUpdateTitle: Subject<any> = new Subject();
  customReInitContenUpload: Subject<any> = new Subject();
  customReInitVendorDetails: Subject<any> = new Subject();

  myNavData: any = {};
  activeLink: any = null;
  isShow: boolean;
  rowData: Array<any>;
  isVisible: boolean;
  num: any;


  @ViewChild('updateTitle') updateTitleTemplate;
  @ViewChild('contentUploadList') contentUploadTemplate;
  @ViewChild('vendorDetails') vendorDetailsTemplate;
  @ViewChild(TabsComponent) tabsComponent;
  gridOptionsSearchTitle: GridOptions = {};

  constructor(
    private padProjectService: PadProjectService,
    public constantService: ConstantService,
    protected projectService: ProjectService) {
    super(padProjectService, projectService);
    this.myNavData = constantService.routerNav.PAD_PROJECT;
    this.activeLink = constantService.routerNav.PAD_PROJECT.links[0];
    this.gridOptionsSearchTitle.onCellClicked = this.agCellClicked;
    this.isShow = false;
    this.isVisible = true;
  }


  agCellClicked = (event) => {
    const headerName: string = event.colDef.headerName;
    const row = event['data'];
    this.num = row.isbn;
    this.rowData = [event['data']];
    this.openListTab(headerName);
  }


  openListTab(headerName: any) {
    const userRoleId = ProjectUtils.getSessionObject().userDetails['padUser'].roleId;

    if (headerName === 'ISBN' && userRoleId !== 4) {
      this.tabsComponent.openTab('Content Upload',
        this.contentUploadTemplate, {}, true, 'contentUploadTemplate');

      this.customReInitContenUpload.next(this.rowData);

      this.tabsComponent.openTab('Update Title',
        this.updateTitleTemplate, {}, true, 'updateTitleTemplate');

      this.customReInitUpdateTitle.next(this.rowData);

    } else if (headerName === 'Vendor Details' && userRoleId !== 4) {
      this.tabsComponent.openTab('Vendor Details',
        this.vendorDetailsTemplate, {}, true, 'vendorDetailsTemplate');
      this.customReInitVendorDetails.next(this.rowData);
    }
  }


  initSearchModels() {
    this.searchTitleModel = new SearchTitleModel();
    const counterReportsSession = ProjectUtils.getCounterReports();

    // this.setValueFromSession(this.searchTitleModel, counterReportsSession);

  }


  getSearchModel(name: string) {
    if (name === this.NAME_SEARCH_TITLE) {
      return this.searchTitleModel;
    } else {
      return this.searchTitleModel;
    }
  }

  exportAll() {
    this.loadDataFromApiDownloadXlsx(this.NAME_SEARCH_TITLE);
  }

  restrictNumeric(e: any) {
    return ProjectUtils.html.numericValidation(e);

  }

  onPaste(event) {
    ProjectUtils.html.numericValidationOnPaste(event);
  }

  setSearchModel(name: string) {
    const searchModel = this.getValueFromSearchModel(name);
    if (name === this.NAME_SEARCH_TITLE) {
      ProjectUtils.setCounterReports(searchModel);
    } else {
      ProjectUtils.setCounterReports(searchModel);
    }
  }


  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_SEARCH_TITLE) {
      return columnDefsSearchTitle;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_SEARCH_TITLE) {
      return UrlConstants.SEARCH_TITLE;
    }
  }

  doOnSubmit(e) {
    console.log('doOnSubmit', e);
    this.isShow = true;
    this.isVisible = false;
    this.OnSubmit(this.NAME_SEARCH_TITLE);

  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_SEARCH_TITLE) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadySearchVenderReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_SEARCH_TITLE);

  }
  getScrollCordinates(name: string) {
    if (this.NAME_SEARCH_TITLE === name) {
      return {
        x: 0,
        y: 375
      };
    }
  }


  xtBaseOnDestroy() {
    ProjectUtils.unsubscribe(this.customReInitUpdateTitle);
    ProjectUtils.unsubscribe(this.customReInitVendorDetails);
  }
}

