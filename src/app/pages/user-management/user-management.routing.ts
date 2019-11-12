import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { SearchVendorComponent } from './search-vendor/search-vendor.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchUserComponent } from './search-user/search-user.component';

export const routes: Routes = [
      {
            path: 'create_vendor',
            component: CreateVendorComponent,
            data: [
                  {
                        type: 'create_vendor'
                  }
            ]
      },
      {
            path: 'update_vendor',
            component: CreateVendorComponent,
            data: [
                  {
                        type: 'update_vendor'
                  }
            ]
      },
      {
            path: 'search_vendor',
            component: SearchVendorComponent
      },
      {
            path: 'search_user',
            component: SearchUserComponent
      },
      {
            path: 'create_user',
            component: CreateUserComponent,
            data: [
                  {
                        type: 'create_user'
                  }
            ]
      },
      {
            path: 'update_user',
            component: CreateUserComponent,
            data: [
                  {
                        type: 'update_user'
                  }
            ]
      }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
