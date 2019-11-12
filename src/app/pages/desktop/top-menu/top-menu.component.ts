import { Component, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';
import { ConstantService, ProjectService } from '../../../acore/services';

import { DesktopService } from '../desktop.service';
import { BaseComponent } from '../../../acore/base';

import {
  TopMenuNavigationData
} from './top-menu.navigation.data';
import { Utils } from 'ag-grid';
import { SessionExpService } from '../../../acore/guards';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit, AfterViewInit {


  breadCrumnData: Array<any> = [];
  currentNavData: any = [];
  userRoleId: any;
  dashboarHTMLlink = TopMenuNavigationData.dashboarHTMLlink;
  showModelPopup: boolean;

  reportNav: any = {};
  padNav: any = {};
  userMagNav: any = {};
  LoginUserName: string;

  constructor(
    private router: Router,
    private desktopService: DesktopService,
    public constantService: ConstantService,
    private breadCrumnService: ProjectService,
    private sessionExpService: SessionExpService
  ) {
    this.reportNav = constantService.routerNav.REPORT; // TopMenuNavigationData.REPORT;
    this.padNav = constantService.routerNav.PAD_PROJECT; //  TopMenuNavigationData.PAD_PROJECT;
    this.userMagNav = constantService.routerNav.USER_MANAGEMENT; // TopMenuNavigationData.USER_MANAGEMENT;
    const displayUserName = ProjectUtils.getSessionObject();
    this.userRoleId = ProjectUtils.getSessionObject().userDetails['padUser'].roleId;
    this.LoginUserName = displayUserName.userDetails.padUser.firstName;


    this.subBreadCrumn();
  }

  onTabLookNavClick() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  myNavFunc(link: Array<string>, linkIndex: number, linkLabel: string, linkData: any) {
    this.router.navigate(link);
  }

  onClickLogout() {
    ProjectUtils.clearSessionObjects();
    this.router.navigate(['']);
    this.UnSub_SESSION_TIMER();
  }
  UnSub_SESSION_TIMER() {
    this.sessionExpService.unsubscribeTimer();
  }
  subBreadCrumn() {
    this.breadCrumnService.sendBread
      .subscribe((data: any) => {
        this.currentNavData = data.navData;
        this.breadCrumnData = data.activeLink.breadCrumb;
        console.log(data);
      });
  }

  onCrumnClick(crumn, index) {

    if (this.currentNavData.label === crumn) {
      this.router.navigate(this.currentNavData.links[0].routerLink);
    }
  }
}
