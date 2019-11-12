import { NgModule } from '@angular/core';
import { AgGridUtilService } from './ag-grid';
import { UtilityService } from './utility.service';
import { utilityServiceFactory } from './utility.factory';

@NgModule({
      declarations: [

      ],
      providers: [
            AgGridUtilService,
            {
                  provide: UtilityService,
                  useFactory: utilityServiceFactory,
                  deps: [AgGridUtilService]
            }
      ],
      imports: [
      ]
})

export class UtilityModule { }


