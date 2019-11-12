import { Injectable } from '@angular/core';
import { BaseService } from '../../acore/base';
import { HttpService } from '../../acore/services';
import { Router } from '@angular/router';

import { ConstantService, TopMenuNavigationData } from '../../acore/services';


@Injectable()

export class LoginService extends BaseService {

      constructor(
            protected http: HttpService,
            protected router: Router,
            private constService: ConstantService
      ) {
            super(http, router);
      }

      getBasicRequiredQueryString(url): string {
            return url;
      }



      setNav(accessData: Array<any>, routerNav: TopMenuNavigationData) {

            const retArray = [];
            accessData.forEach((item, index) => {
                  const len = routerNav.TOP_NAV_LINKS.length;
                  for (let i = 0; i < len; i++) {
                        if (routerNav.TOP_NAV_LINKS[i]['label'] === item['resName']) {
                              routerNav.TOP_NAV_LINKS[i].enable = true;
                              routerNav.TOP_NAV_LINKS[i].index = index;
                              retArray.push(routerNav.TOP_NAV_LINKS[i]);
                        }
                  }
            });

            return retArray;
      }




      setAccess(navData: any) {

            this.constService.routerNav = new TopMenuNavigationData();

            this.constService.routerNav.PAD_PROJECT.links = this.setNav(navData['PAD Project'], this.constService.routerNav);

            this.constService.routerNav.USER_MANAGEMENT.links = this.setNav(navData['User Management'], this.constService.routerNav);

            this.constService.routerNav.REPORT.links = this.setNav(navData['Reports'], this.constService.routerNav);


            // let linkData: Array<any> = Array.from(this.constService.routerNav.PAD_PROJECT.links);
            // // this.constService.routerNav.PAD_PROJECT.links = [];




            // // navData['PAD Project'].forEach(item => {
            // //       const len = linkData.length;
            // //       for (let i = 0; i < len; i++) {
            // //             if (linkData[i]['label'] === item['resName']) {
            // //                   this.constService.routerNav.PAD_PROJECT.links.push(linkData[i]);
            // //             }
            // //       }
            // // });


            // linkData = Array.from(this.constService.routerNav.USER_MANAGEMENT.links);
            // this.constService.routerNav.USER_MANAGEMENT.links = [];

            // debugger
            // navData['User Management'].forEach(item => {
            //       const len = linkData.length;
            //       for (let i = 0; i < len; i++) {
            //             if (linkData[i]['label'] === item['resName']) {
            //                   this.constService.routerNav.USER_MANAGEMENT.links.push(linkData[i]);
            //             }
            //       }
            // });


            // linkData = Array.from(this.constService.routerNav.REPORT.links);
            // this.constService.routerNav.REPORT.links = [];

            // navData['Reports'].forEach(item => {
            //       const len = linkData.length;
            //       for (let i = 0; i < len; i++) {
            //             if (linkData[i]['label'] === item['resName']) {
            //                   this.constService.routerNav.REPORT.links.push(linkData[i]);
            //             }
            //       }
            // });


      }




}
