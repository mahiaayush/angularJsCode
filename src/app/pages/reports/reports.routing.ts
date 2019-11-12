import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TitleStagesComponent } from './title-stages/title-stages.component';
import { TitleOverviewComponent } from './title-overview/title-overview.component';
import { TitleProcessingComponent } from './title-processing/title-processing.component';
import { TitleDeliveriesComponent } from './title-deliveries/title-deliveries.component';



export const routes: Routes = [
      {
            path: 'stages',
            component: TitleStagesComponent
      },
      {
            path: 'overview/:status',
            component: TitleOverviewComponent
      },
      {
            path: 'overview',
            component: TitleOverviewComponent
      },
      {
            path: 'processing',
            component: TitleProcessingComponent
      },
      {
            path: 'processing/:status',
            component: TitleProcessingComponent
      },
      {
            path: 'deliveries',
            component: TitleDeliveriesComponent
      },
      {
            path: 'deliveries/:status',
            component: TitleDeliveriesComponent
      }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
