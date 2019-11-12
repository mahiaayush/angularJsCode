import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../acore/utility';

export const columnDefs: Array<ColDef> = [
      {
            headerName: 'Vendor',
            field: 'vendor',
            minWidth: ProjectUtils.ag_SetWidth(15)
      },
      {
            headerName: 'Vendor Is',
            field: 'vendoris',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Release Date',
            field: 'releasedate',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Text Source',
            field: 'textsource',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Cover Source',
            field: 'coversource',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Ultrashort Flag',
            field: 'ultrashort',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Activation Code',
            field: 'activation',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Vendor Status',
            field: 'status',
            minWidth: ProjectUtils.ag_SetWidth(15)
      },
      {
            headerName: 'History',
            field: 'history',
            minWidth: ProjectUtils.ag_SetWidth(10),
            cellRenderer: function (params: any) {
                  return '<a href="javascript:;"><img src="assets/images/history.png" style="width:20px"/></a>';
            }
      }
];
