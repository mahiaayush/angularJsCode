import { Injectable } from '@angular/core';

import { GridApi, ColumnApi, GridOptions } from 'ag-grid';

@Injectable()
export class AgGridUtilService {

      constructor() {
      }


      defaultColDef(gridOptions: any) {
            gridOptions['defaultColDef'] = {
                  // set the default column width
                  width: 150,
                  // make every column editable
                  editable: true,
                  // make every column use 'text' filter by default
                  filter: 'agTextColumnFilter'
            };

            return gridOptions;
      }

      basicSetting(
            gridOptions: GridOptions,
            rowSelection: 'single' | 'multiple' = 'single', rowHeight: number = null) {

            gridOptions['rowData'] = null;
            gridOptions['enableFilter'] = true;
            gridOptions['floatingFilter'] = true;
            gridOptions['enableSorting'] = true;
            gridOptions['rowSelection'] = rowSelection;
            //   gridOptions['rowHeight'] = null;
            gridOptions.pagination = true;
            // gridOptions.cacheBlockSize = 5;
            // gridOptions.
      }



}
