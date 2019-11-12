import { Injectable } from '@angular/core';

import { BaseService } from '../../../acore/base';
import { HttpService } from '../../services';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProjectUtils } from '../../utility';
import { AutoCompleteModel } from '.';
import { SessionExpService } from '../../guards';

export interface MyBodyI {
      key: string;
      value: string;
}


@Injectable()
export class AutoCompleteService extends BaseService {


      constructor(
            protected http: HttpService,
            protected router: Router,
            protected sessionExpService: SessionExpService
      ) {
            super(http, router, sessionExpService);
      }

      getServiceURL(): string {
            return 'not in use';
      }
      // bXBzQDEyM34jfjMyMDN+I34yMDE=
      getData(serviceURL: string, params: any): any {

            if (params) {
                  params = JSON.stringify(params);
            }

            return this.getDataFromAPI(serviceURL, params);
      }



      errorCheckingForInput(basicSetting: AutoCompleteModel) {
            if (!basicSetting.url) {
                  throw new Error('AutoComplete should have url');
            }
            if (!basicSetting.searchKey) {
                  throw new Error('AutoComplete should have search Key');
            }
      }

}

