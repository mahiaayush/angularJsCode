import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../acore/utility';

export const columnDefs: Array<ColDef> = [
      {
            headerName: 'ISBN',
            field: 'isbn',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Title',
            field: 'title',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Author',
            field: 'authorname',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'PS',
            field: 'ps',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'PL',
            field: 'pl',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'PPC',
            field: 'ppc',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Vendor Code',
            field: 'vendorcode',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Vendor Is',
            field: 'vendoris',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Metadata Received',
            field: 'metadata',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Interior Received',
            field: 'ire',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Covers Received',
            field: 'cr',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Jacket Received',
            field: 'jr',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Insert Received',
            field: 'ir',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'QCed',
            field: 'qced',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Ready To Release',
            field: 'ready',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Content Last Updated',
            field: 'updated',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Vendor Status',
            field: 'vendorstatus',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Current Pad Status',
            field: 'state',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'History',
            field: 'History',
            minWidth: ProjectUtils.ag_SetWidth(10),
            cellRenderer: ProjectUtils.HistoryLink
      }
];
