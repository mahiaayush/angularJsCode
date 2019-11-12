import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { BaseComponent, GridAPII } from '../../../acore/base';
import { SearchVendorModel } from './search-vendor.model';
import { UserManagementService } from '../user-management.service';
import { columnDefsVendorReports } from './search-vendor.data';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';
import { DataDropDownOptions, AutoCompleteModel } from '../../../acore/components';
import { ConstantService, ProjectService } from '../../../acore/services';

@Component({
  selector: 'app-search-vendor',
  templateUrl: './search-vendor.component.html',
  styleUrls: ['./search-vendor.component.css']
})
export class SearchVendorComponent extends BaseComponent {

  NAME_SEARCH_VENDOR = 'SEARCH_VENDOR';
  NAME_VIEW_VENDOR = 'VIEW_VENDOR';
  searchVendorModel: SearchVendorModel;
  vender_id: any;
  gridOptionsVenderReports: GridOptions = {};
  autoBasic: AutoCompleteModel;
  autoBasicCode: AutoCompleteModel;
  myNavData: any = [];
  activeLink: any = null;

  constructor(private userManagementService: UserManagementService,
    public constantService: ConstantService,
    protected projectService: ProjectService,
    private router: Router) {
    super(userManagementService, projectService);
    const index = constantService.routerNav.USER_MANAGEMENT_SEARCH_VENDOR.index;
    this.gridOptions.onCellClicked = this.agCellClicked;
    this.myNavData = constantService.routerNav.USER_MANAGEMENT;
    this.activeLink = constantService.routerNav.USER_MANAGEMENT.links[index];
    this.createAutoComplete();
  }

  agCellClicked = (event) => {
    const headerName: string = event.colDef.headerName;
    const row = event['data'];
    if (headerName === 'Vendor Code') {
      this.router.navigate(['./pages/user_management/update_vendor'], { queryParams: { id: row.id, isActive: row.state } });
    }
  }

  xtBaseOnInit() {

  }

  initSearchModels() {
    this.searchVendorModel = new SearchVendorModel();
    const counterReportsSession = ProjectUtils.getCounterReports();
  }

  getSearchModel(name: string) {
    if (name === this.NAME_SEARCH_VENDOR) {
      return this.searchVendorModel;
    } else {
      return this.searchVendorModel;
    }
  }

  setSearchModel(name: string) {
    const searchModel = this.getValueFromSearchModel(name);
    if (name === this.NAME_SEARCH_VENDOR) {
      ProjectUtils.setCounterReports(searchModel);
    } else {
      ProjectUtils.setCounterReports(searchModel);
    }
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_SEARCH_VENDOR) {
      return columnDefsVendorReports;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_SEARCH_VENDOR) {
      return UrlConstants.SEARCH_VENDOR;
    } else if (name === this.NAME_VIEW_VENDOR) {
      return UrlConstants.VIEW_VENDOR;
    }
  }

  getval(e: any) {
    console.log('value', e);
    this.autoBasic.params = {
      query: e.target.value,
      componentid: 7
    };
  }

  createAutoComplete() {
    this.autoBasic = new AutoCompleteModel();
    this.autoBasic.url = UrlConstants.AUTO_COMPLETE;
    this.autoBasic.searchKey = 'name';
    this.autoBasic.placeholder = 'Search';
    this.autoBasic.params = {
      query: this.searchVendorModel.name.value,
      componentid: 7
    };



    this.autoBasicCode = new AutoCompleteModel();
    this.autoBasicCode.url = UrlConstants.AUTO_COMPLETE;
    this.autoBasicCode.searchKey = 'name';
    this.autoBasicCode.placeholder = 'Search';
    this.autoBasicCode.params = {
      query: this.searchVendorModel.code.value,
      componentid: 8
    };

  }

  doOnSubmit(e) {
    this.OnSubmit(this.NAME_SEARCH_VENDOR);
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_SEARCH_VENDOR) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadySearchVenderReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_SEARCH_VENDOR);
  }

  getNonSearchModelParams(name: string): string {
    if (this.NAME_VIEW_VENDOR === name) {
      const obj = {
        id: this.vender_id
      };
      const queryString = ProjectUtils.obj_MakeQueryStringFromObjStartWithAND(obj);
      return queryString;
    }
  }

  getScrollCordinates(name: string) {
    if (this.NAME_SEARCH_VENDOR === name) {
      return {
        x: 0,
        y: 225
      };
    }
  }
}

