import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DesktopDesignService } from '../desktop-design.service';
import { SessionExpService } from '../../../acore/guards';
import { Router } from '@angular/router';
import { TopMenuNavigationData } from '../top-menu/top-menu.navigation.data';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
  providers: [
    DesktopDesignService
  ]
})
export class DesktopComponent implements OnInit, AfterViewInit {

  constructor(
    private desktopDesignService: DesktopDesignService,
    private sessionExpService: SessionExpService,
    private router: Router
  ) {
    this.router.navigate(TopMenuNavigationData.dashboard);
  }

  ngOnInit() {


  }



  onDesktopClick() {
    this.sessionExpService.setSessionTimer();
  }

  ngAfterViewInit() {
  }

  onExportGraph($event) {
  }

}
