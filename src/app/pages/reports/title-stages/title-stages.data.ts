import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../acore/utility';

export const columnDefsMetadataProcessing: Array<ColDef> = [
      {
            headerName: 'Receiving Files',
            field: 'Receiving Files',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'In QC',
            field: 'In QC',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Primary Distribution',
            field: 'Primary Distribution',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Secondary Distribution',
            field: 'Secondary Distribution',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Pass',
            field: 'Pass',
            minWidth: ProjectUtils.ag_SetWidth(20)
      }
];
