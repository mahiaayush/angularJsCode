import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridApi, ColumnApi, ColDef } from 'ag-grid';

import { LoginModel } from './core-login.model';
import { SessionObject, ProjectUtils, UrlConstants } from '../../../acore/utility';
import { ConstantService } from '../../../acore/services';
import { BaseComponent, GridAPII } from '../../../acore/base';
import { LoginService } from '../login.service';

import { UserDetails } from './user-details.model';

import { SessionExpService } from '../../../acore/guards';
import { TopMenuNavigationData } from '../../desktop/top-menu/top-menu.navigation.data';

@Component({
  selector: 'app-core-login',
  templateUrl: './core-login.component.html',
  styleUrls: ['./core-login.component.css']
})
export class CoreLoginComponent extends BaseComponent {

  loginImgUrl = './assets/images/logo.png';
  loginModel: LoginModel;
  NAME_LOGIN = 'LOGIN';

  userDetails: UserDetails;
  loginMsg: string;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private sessionExpService: SessionExpService,
    public constantService: ConstantService
  ) {
    super(loginService);

    console.log(this.constantService);
  }

  initSearchModels() {
    this.loginModel = new LoginModel();
  }

  getSearchModel(name: string) {
    if (name === this.NAME_LOGIN) {
      return this.loginModel;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_LOGIN) {
      return UrlConstants.LOGIN;
    }
  }

  doOnSubmit() {

    //  this.fakeUser();
    this.realUser();

  }


  realUser() {
    this.showLoader();
    this.loadDataFromApi(this.NAME_LOGIN);
    // .subscribe((userDetails) => {

    //   // this.hideLoader();


    // }, (e) => {
    //   this.loginMsg = 'Something Went Wrong !!!';
    //   this.hideLoader();
    // });
  }


  handleLoadDataFromApi(name: string, userDetails: any) {

    this.loginMsg = null;
    if (userDetails['status'] !== 'SUCCESS') {
      this.loginMsg = 'Invalid Username or Password';
    } else {

      this.loginService.setAccess(userDetails.resourceMap);
      let sessionObject: SessionObject;
      sessionObject = new SessionObject();
      sessionObject.userDetails = userDetails;
      ProjectUtils.setSessionObject(sessionObject);
      this.sub_SESSION_TIMER();
      this.router.navigate(TopMenuNavigationData.dashboard);
    }
    console.log(userDetails);
  }

  handleErrorLoadDataFromApi(name: string, error: any) {
    this.loginMsg = 'Something Went Wrong !!!';
    this.hideLoader();
  }

  fakeUser() {
    let sessionObject: SessionObject;
    sessionObject = new SessionObject();
    sessionObject.userDetails = new UserDetails();
    ProjectUtils.setSessionObject(sessionObject);
    this.sub_SESSION_TIMER();
    this.router.navigate(TopMenuNavigationData.dashboard);
  }


  sub_SESSION_TIMER() {
    this.sessionExpService.checkUserNSub_SESSION_TIMER();
  }


}
