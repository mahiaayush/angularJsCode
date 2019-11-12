import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { RootSharedModule } from '../../sharedModules';
import { RadioButtonComponent } from './radio-button';


@NgModule({
      declarations: [
            RadioButtonComponent
      ],
      providers: [

      ],
      imports: [
            RootSharedModule,
            AgGridModule.withComponents([RadioButtonComponent])
      ]
})

export class AGModule { }
