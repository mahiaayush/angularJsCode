import { NgModule } from '@angular/core';

import { RootSharedModule } from '../../acore/sharedModules';
import { ComponentModule } from '../../acore/components';
import { AgGridModule } from 'ag-grid-angular';
import { routing } from './reports.routing';
import { ReportsService } from './reports.service';
import { TitleStagesComponent } from './title-stages/title-stages.component';
import { TitleOverviewComponent } from './title-overview/title-overview.component';
import { TitleProcessingComponent } from './title-processing/title-processing.component';
import { TitleDeliveriesComponent } from './title-deliveries/title-deliveries.component';

@NgModule({
      declarations: [

            TitleStagesComponent,

            TitleOverviewComponent,

            TitleProcessingComponent,

            TitleDeliveriesComponent,

            // HistoryComponent

      ],
      providers: [
            ReportsService
      ],
      imports: [
            routing,
            RootSharedModule,
            ComponentModule,
            AgGridModule,
      ]
})

export class ReportsModule { }
