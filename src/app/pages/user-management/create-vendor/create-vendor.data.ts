import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../acore/utility';

export const columnDefsCreateVendor: Array<ColDef> = [
      {
            headerName: 'Email/Login',
            field: 'Email',
            minWidth: ProjectUtils.ag_SetWidth(25)
      },
      {
            headerName: 'Contact Name',
            field: 'Contact Name',
            minWidth: ProjectUtils.ag_SetWidth(25)
      },
      {
            headerName: 'Role',
            field: 'Role',
            minWidth: ProjectUtils.ag_SetWidth(25)
      },
      {
            headerName: 'State',
            field: 'State',
            minWidth: ProjectUtils.ag_SetWidth(25)
      }
];
