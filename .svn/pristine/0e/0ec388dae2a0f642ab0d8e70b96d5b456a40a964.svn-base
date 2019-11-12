import { NgModule } from '@angular/core';

import { RootSharedModule } from '../../acore/sharedModules';
import { ComponentModule } from '../../acore/components';
import { AgGridModule } from 'ag-grid-angular';
import { routing } from './user-management.routing';
import { UserManagementService } from './user-management.service';

import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { SearchVendorComponent } from './search-vendor/search-vendor.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
      declarations: [
            CreateVendorComponent,
            SearchVendorComponent,
            CreateUserComponent,
            SearchUserComponent
      ],
      providers: [
            UserManagementService
      ],
      imports: [
            routing,
            RootSharedModule,
            ComponentModule,
            AgGridModule,
      ]
})

export class UserManagementModule { }
