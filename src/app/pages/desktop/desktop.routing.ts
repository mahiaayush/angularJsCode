import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DesktopComponent } from './desktop/desktop.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HistoryComponent } from '../../acore/components/project-compo/history/history.component';
import { TestingInterfaceComponent } from './../testing-interface/testing-interface.component';






export const routes: Routes = [
      {
            path: '',
            component: DesktopComponent,
            children: [
                  {
                        path: '',
                        loadChildren: '../dashboard/dashboard.module#DashboardModule',
                        pathMatch: 'full'
                  },
                  {
                        path: 'reports',
                        loadChildren: '../reports/reports.module#ReportsModule'
                  },
                  {
                        path: 'pad_project',
                        loadChildren: '../pad-project/pad-project.module#PadProjectModule'
                  },
                  {
                        path: 'user_management',
                        loadChildren: '../user-management/user-management.module#UserManagementModule'
                  },
                  {
                        path: 'myAccount',
                        component: UserProfileComponent
                  },
                  {
                        path: 'history',
                        component: HistoryComponent
                  },
                  {
                        path: 'testingInterface',
                        component: TestingInterfaceComponent
                  }
            ]
      }

];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
