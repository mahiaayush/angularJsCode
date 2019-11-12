import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { RootSharedModule } from '../sharedModules';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';



import { AgGridComponent } from './ag-grid/ag-grid.component';
import { PaginationComponent } from './pagination/pagination.component';



import { TabComponent, TabsComponent, DynamicTabsDirective } from './ng-tabs';

import { DropdownComponent } from './dropdown/dropdown.component';


import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { FilterArrayPipe } from './auto-complete/auto-complete.pipe';
import { AutoCompleteService } from './auto-complete/auto-complete.service';


import { DropdownService } from './dropdown/dropdown.service';


import { LoaderComponent } from './loader';


import { CustomModalPopUpModel, CustomModalPopUpService, CustomModalPopUpComponent } from './../components/custom-modal-pop-up';
import { MonthYearComponent } from './month-year/month-year.component';

import { FooterComponent } from './project-compo/footer/footer.component';

import { HistoryComponent } from './project-compo/history/history.component';

import { TabLinksComponent } from './project-compo/tab-links/tab-links.component';
import { ReportsService } from '../../pages/reports/reports.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
// import { RangeDatePickerComponent } from './range-date-picker/range-date-picker.component';
import { CzDatePickerComponent } from './cz-date-picker/cz-date-picker.component';
import { Daterangepicker } from 'ng2-daterangepicker';


@NgModule({
      declarations: [
            AgGridComponent,
            PaginationComponent,
            TabComponent, TabsComponent, DynamicTabsDirective,
            DropdownComponent,
            AutoCompleteComponent,
            FilterArrayPipe,
            LoaderComponent,
            CustomModalPopUpComponent,
            MonthYearComponent,
            FooterComponent,
            TabLinksComponent,
            HistoryComponent,
            FileUploadComponent,
            CzDatePickerComponent
      ],

      providers: [
            DropdownService,
            AutoCompleteService,
            CustomModalPopUpService,
            ReportsService
      ],
      exports: [
            AgGridComponent,
            TabComponent, TabsComponent, DynamicTabsDirective,
            DropdownComponent,
            AutoCompleteComponent,
            LoaderComponent,
            CustomModalPopUpComponent,
            MonthYearComponent,
            FooterComponent,
            TabLinksComponent,
            HistoryComponent,
            FileUploadComponent,
            CzDatePickerComponent
      ],
      imports: [
            RootSharedModule,
            AgGridModule,
            MultiselectDropdownModule,
            Daterangepicker
      ],
      entryComponents: [TabComponent]
})

export class ComponentModule { }
