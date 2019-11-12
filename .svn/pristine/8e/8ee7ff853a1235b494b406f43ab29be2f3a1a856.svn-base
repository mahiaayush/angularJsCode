import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridOptions } from 'ag-grid';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import { BaseService } from '../../acore/base';
import { Router } from '@angular/router';
import { HttpService } from '../../acore/services';
import { UtilityService, ProjectUtils } from '././../../acore/utility';
import { SessionExpService } from '../../acore/guards';


@Injectable()

export class PadProjectService extends BaseService {
      constructor(
            protected http: HttpService,
            protected router: Router,
            protected sessionExpService: SessionExpService,
            private us: UtilityService
      ) {
            super(http, router, sessionExpService);
      }

      getDropdownType(ddTriggerISSN?: Subject<any>) {
            return [
                  {
                        'id': 'processed',
                        'value': 'Processed'
                  }, {
                        'id': 'Partially Processed',
                        'value': 'Partially Processed'
                  }, {
                        'id': 'Failed',
                        'value': 'Failed'
                  }
            ];

      }

}
