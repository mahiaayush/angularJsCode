import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../acore/utility';

export const columnDefs: Array<ColDef> = [
      {
            headerName: 'Archieved File Type',
            field: 'isbn',
            minWidth: ProjectUtils.ag_SetWidth(14),
            cellRenderer: ProjectUtils.message
      },
      {
            headerName: 'Uploaded File Name',
            field: 'title',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Uploaded Date',
            field: 'titleType',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Archieved File Name',
            field: 'author',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'File Size',
            field: 'edition',
            minWidth: ProjectUtils.ag_SetWidth(14)
      },
      {
            headerName: 'Download',
            field: 'pubDate',
            minWidth: ProjectUtils.ag_SetWidth(14),
            cellRenderer: function (params: any) {
                  return '<a href="javascript:;"><i class="fa fa-cloud-download" aria-hidden="true" style="font-size:20px"></i></a>';
            }
      }
];
