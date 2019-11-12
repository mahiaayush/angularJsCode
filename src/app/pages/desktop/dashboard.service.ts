import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridOptions } from 'ag-grid';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';

import { BaseService } from '../../acore/base';
import { HttpService } from '../../acore/services';
import { SessionExpService } from '../../acore/guards';
@Injectable()

export class DashBoardService extends BaseService {
      constructor(
            protected http: HttpService,
            protected router: Router,
            protected sessionExpService: SessionExpService
      ) {
            super(http, router, sessionExpService);
      }

}
