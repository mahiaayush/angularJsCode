import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CoreLoginComponent } from './core-login/core-login.component';
import { SecurityCheckComponent } from './security-check/security-check.component';
export const routes: Routes = [
      {
            path: '',
            component: CoreLoginComponent,
            pathMatch: 'full'
      },
      {
            path: 'securityCheck',
            component: SecurityCheckComponent,
            pathMatch: 'full'
      }

];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
