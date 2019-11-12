import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../acore/utility';

export const columnDefs: Array<ColDef> = [
      {
            headerName: 'ISBN',
            field: 'isbn',
            minWidth: ProjectUtils.ag_SetWidth(14),
            cellRenderer: ProjectUtils.message
      },
      {
            headerName: 'Title',
            field: 'title',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Title Type',
            field: 'titleType',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Author',
            field: 'author',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Edition',
            field: 'edition',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Pub Date',
            field: 'pubDate',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Pad Status',
            field: 'FIELD7',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'History',
            field: 'History',
            minWidth: ProjectUtils.ag_SetWidth(14),
            cellRenderer: function (params: any) {
                  return '<a href="javascript:;"><img src="assets/images/history.png" style="width:20px"/></a>';
            }
      }
];
