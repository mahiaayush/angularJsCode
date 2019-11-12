import { Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectUtils } from '../../utility';
import { ConstantService } from '../constants/constant.service';
import { SessionExpService } from '../../guards/session-exp/session-exp.service';

declare var $;

@Injectable()

export class SecurityService {


      isDevMode = isDevMode();

      constructor(
            private routor: Router,
            private constantService: ConstantService,
            private sessionExpService: SessionExpService
      ) { }


      applySecurity() {
            if (this.isDevMode === false) {
                  this.restrictBrowserNav();
                  this.restrictRefresh();

                  ProjectUtils.checkIfReloadTookPlace()
                        .then(() => {
                              this.showAutoLogoutPopUp();
                        })
                        .catch(() => {
                              console.log('Not a Refresh');
                        });


            }


      }

      restrictBrowserNav() {
            window.onpopstate = () => {
                  ProjectUtils.clearSessionObjects();
                  this.sessionExpService.unsubscribeTimer();
                  this.showAutoLogoutPopUp();
            };
      }


      showAutoLogoutPopUp() {
            $('#' + this.constantService.autoLogoutPopUpID).modal('show');
      }

      restrictRefresh() {
            window.onbeforeunload = () => {
                  ProjectUtils.clearSessionObjects();
                  ProjectUtils.setRefreshTime();
            };
      }

      disableBrowserSecurity() {
            window.onpopstate = null;
            window.onbeforeunload = null;
      }
}
