import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridOptions } from 'ag-grid';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import { BaseService } from '../../acore/base';
import { HttpService } from '../../acore/services';
import { Router } from '@angular/router';
import { SessionExpService } from '../../acore/guards';
import { UtilityService, ProjectUtils } from '././../../acore/utility';


@Injectable()

export class UserManagementService extends BaseService {
      constructor(
            protected http: HttpService,
            protected router: Router,
            protected sessionExpService: SessionExpService,
            private us: UtilityService
      ) {
            super(http, router, sessionExpService);
      }

      // getDropdownType(ddTriggerISSN?: Subject<any>) {
      //       return [
      //             {
      //                   'id': 'journalPrintISSN',
      //                   'value': 'Journal Print ISSN'
      //             }, {
      //                   'id': 'journalOnlineISSN',
      //                   'value': 'Journal Online ISSN'
      //             }, {
      //                   'id': 'bookISSN',
      //                   'value': 'Book ISSN'
      //             }, {
      //                   'id': 'bookISBN',
      //                   'value': 'Book ISBN'
      //             }
      //       ];

      // }

      makeColumns(): Array<ColDef> {
            const columnDefs: Array<ColDef> = [
                  {
                        headerName: 'Description', field: 'Description', minWidth: ProjectUtils.ag_SetWidth(20)
                  },
                  {
                        headerName: 'Report Type', field: 'Report Type', minWidth: ProjectUtils.ag_SetWidth(20)
                  },
                  {
                        headerName: 'CSV',
                        field: 'format',
                        minWidth: ProjectUtils.ag_SetWidth(20)
                  },
                  {
                        headerName: 'XLS',
                        field: 'format',
                        minWidth: ProjectUtils.ag_SetWidth(20)
                  },
                  {
                        headerName: 'ZIP',
                        field: 'format',
                        minWidth: ProjectUtils.ag_SetWidth(20)
                  }
            ];
            return columnDefs;
      }

}
