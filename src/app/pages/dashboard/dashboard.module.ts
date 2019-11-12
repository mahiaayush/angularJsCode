import { NgModule } from '@angular/core';
import { RootSharedModule } from '../../acore/sharedModules';
import { ComponentModule } from '../../acore/components';
import { routing } from './dashboard.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashBoardService } from './dashboard.service';
@NgModule({
      declarations: [
            DashboardComponent
      ],
      providers: [
            DashBoardService
      ],
      imports: [
            RootSharedModule,
            routing,
            ComponentModule
      ]
})

export class DashboardModule { }
