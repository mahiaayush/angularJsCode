import { NgModule } from '@angular/core';
import { RootSharedModule } from '../../acore/sharedModules';
import { ComponentModule } from '../../acore/components';
import { AgGridModule } from 'ag-grid-angular';
import { routing } from './desktop.routing';
import { DashBoardService } from './dashboard.service';
import { DesktopDesignService } from './desktop-design.service';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { DesktopComponent } from './desktop/desktop.component';
import { DesktopService } from './desktop.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TestingInterfaceComponent } from './../testing-interface/testing-interface.component';
import { TestingInterfaceService } from './../testing-interface/testing-interface.service';



@NgModule({
      declarations: [
            TopMenuComponent,
            DesktopComponent,
            UserProfileComponent,
            TestingInterfaceComponent
      ],
      providers: [
            DashBoardService,
            DesktopDesignService,
            DesktopService,
            TestingInterfaceService
      ],
      imports: [
            RootSharedModule,
            routing,
            AgGridModule,
            ComponentModule
      ],
      exports: [
            TestingInterfaceComponent
      ]
})

export class DesktopModule { }
