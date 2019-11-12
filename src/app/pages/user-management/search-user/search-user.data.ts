import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../acore/utility';

export const columnDefsUserReports: Array<ColDef> = [
      {
            headerName: 'Email/Login',
            field: 'email',
            minWidth: ProjectUtils.ag_SetWidth(25),
            cellRenderer: ProjectUtils.message
      },
      {
            headerName: 'Contact Name',
            field: 'contactName',
            minWidth: ProjectUtils.ag_SetWidth(25)
      },
      {
            headerName: 'Role',
            field: 'role',
            minWidth: ProjectUtils.ag_SetWidth(25)
      },
      {
            headerName: 'State',
            field: 'state',
            minWidth: ProjectUtils.ag_SetWidth(25)
      }
];
