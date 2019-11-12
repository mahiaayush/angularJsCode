import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../../acore/utility';

export const columnDefs: Array<ColDef> = [
      {
            headerName: 'Date',
            field: 'historyDate',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Action/Field Name',
            field: 'action',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Action By',
            field: 'actionby',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Previous',
            field: 'fromstate',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Current',
            field: 'tostate',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Comments',
            field: 'comments',
            minWidth: ProjectUtils.ag_SetWidth(14),
            cellRenderer: ProjectUtils.comments
      }

];
