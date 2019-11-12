import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard, LoginGuard } from './acore/guards';


export const routes: Routes = [
      {
            path: '',
            loadChildren: './pages/login/login.module#LoginModule',
            canActivate: [LoginGuard]
      }, {
            path: 'pages',
            loadChildren: './pages/desktop/desktop.module#DesktopModule',
            canActivate: [AuthGuard],
            canActivateChild: [AuthGuard]
      }
];

const extraOptions: ExtraOptions = {
      enableTracing: false,
      useHash: false,
      onSameUrlNavigation: 'ignore'
};


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, extraOptions);

