import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { BaseComponent, GridAPII } from '../../../acore/base';
import { SearchUserModel } from './search-user.model';
import { UserManagementService } from '../user-management.service';
import { columnDefsUserReports } from './search-user.data';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';
import { DataDropDownOptions, AutoCompleteModel } from '../../../acore/components';


import { ConstantService, ProjectService } from '../../../acore/services';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent extends BaseComponent {

  NAME_SEARCH_USER = 'SEARCH_USER';
  searchUserModel: SearchUserModel;

  autoBasicFName: AutoCompleteModel;
  autoBasicLName: AutoCompleteModel;
  autoBasicEmail: AutoCompleteModel;
  gridOptionsVenderReports: GridOptions = {};

  myNavData: any = [];
  activeLink: any = null;


  constructor(private userManagementService: UserManagementService,
    public constantService: ConstantService,
    protected projectService: ProjectService,
    private router: Router) {
    super(userManagementService, projectService);

    const index = constantService.routerNav.USER_MANAGEMENT_SEARCH_USER.index;
    this.gridOptions.onCellClicked = this.agCellClicked;
    this.myNavData = constantService.routerNav.USER_MANAGEMENT;
    this.activeLink = constantService.routerNav.USER_MANAGEMENT.links[index];
    this.createAutoComplete();
  }

  agCellClicked = (event) => {
    const headerName: string = event.colDef.headerName;
    const row = event['data'];
    console.log('USERID' + row);
    if (headerName === 'Email/Login') {
      this.router.navigate(['./pages/user_management/update_user'], { queryParams: { id: row.id, isActive: row.state, type: row.role } });
    }
  }

  xtBaseOnInit() {

  }

  initSearchModels() {
    this.searchUserModel = new SearchUserModel();
    const counterReportsSession = ProjectUtils.getCounterReports();
    // this.setValueFromSession(this.searchUserModel, counterReportsSession);

  }

  createAutoComplete() {
    this.autoBasicFName = new AutoCompleteModel();
    this.autoBasicFName.url = UrlConstants.AUTO_COMPLETE;
    this.autoBasicFName.searchKey = 'firstName';
    this.autoBasicFName.placeholder = 'Search';
    this.autoBasicFName.params = {
      query: this.searchUserModel.firstName.value,
      componentid: 4
    };

    this.autoBasicLName = new AutoCompleteModel();
    this.autoBasicLName.url = UrlConstants.AUTO_COMPLETE;
    this.autoBasicLName.searchKey = 'lastName';
    this.autoBasicLName.placeholder = 'Search';
    this.autoBasicLName.params = {
      query: this.searchUserModel.lastName.value,
      componentid: 5
    };

    this.autoBasicEmail = new AutoCompleteModel();
    this.autoBasicEmail.url = UrlConstants.AUTO_COMPLETE;
    this.autoBasicEmail.searchKey = 'email';
    this.autoBasicEmail.placeholder = 'Search';
    this.autoBasicEmail.params = {
      query: this.searchUserModel.email.value,
      componentid: 6
    };

  }


  getSearchModel(name: string) {
    if (name === this.NAME_SEARCH_USER) {
      return this.searchUserModel;
    }
  }

  setSearchModel(name: string) {
    const searchModel = this.getValueFromSearchModel(name);
    if (name === this.NAME_SEARCH_USER) {
      ProjectUtils.setCounterReports(searchModel);
    }
  }

  doOnReset() {
    this.searchUserModel.email.value = '';
    this.searchUserModel.firstName.value = '';
    this.searchUserModel.lastName.value = '';
  }


  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_SEARCH_USER) {
      return columnDefsUserReports;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_SEARCH_USER) {
      return UrlConstants.SEARCH_USER;
    }
  }

  doOnSubmit(e) {
    console.log('doOnSubmit', e);
    this.OnSubmit(this.NAME_SEARCH_USER);

  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_SEARCH_USER) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadySearchUserReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_SEARCH_USER);
  }

  getScrollCordinates(name: string) {
    if (this.NAME_SEARCH_USER === name) {
      return {
        x: 0,
        y: 375
      };
    }
  }



}

