import { Injectable } from '@angular/core';
import { AgGridUtilService } from './ag-grid';
@Injectable()

export class UtilityService {
      ag: AgGridUtilService;
      constructor(
            private agGrid: AgGridUtilService
      ) {
            this.ag = agGrid;
      }
}
