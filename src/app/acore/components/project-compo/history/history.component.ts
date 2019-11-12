import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent, GridAPII } from '../../../base';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
// import { TitleOverviewModel } from './title-overview.model';
import { CustomModalPopUpModel, CustomModalPopUpService } from '../../../../acore/components/custom-modal-pop-up';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../../acore/utility';
import { DataDropDownOptions, AutoCompleteModel } from '../../../../acore/components';
import { columnDefs } from './history.data';
import { ReportsService } from '../../../../pages/reports/reports.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent extends BaseComponent {

  NAME_HISTORY = 'HISTORY';
  comments: any;
  id: any;
  vendor: any;
  vendorId: any;
  contentId: any;
  basicSetting: CustomModalPopUpModel;
  @Input() rowData: Array<any>;

  gridOptions: GridOptions = {};

  constructor(private reportsService: ReportsService,
    private customModalPopUpService: CustomModalPopUpService,
    private route: ActivatedRoute) {
    super(reportsService);
    this.gridOptions.onCellClicked = this.agCellClicked;
    this.createMyPopUpAdd();

  }


  agCellClicked = (event) => {

    const headerName: string = event.colDef.headerName;
    const row = event['data'];
    this.comments = row.comments;

    if (headerName === 'Comments') {
      this.newUserPopup();
    }

  }

  newUserPopup() {
    this.customModalPopUpService.show(this.basicSetting);
  }

  xtBaseOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.vendor = params.vendor;
      this.contentId = params.contentId;
      this.vendorId = params.vendorId;
    });

  }

  createMyPopUpAdd() {
    this.basicSetting = new CustomModalPopUpModel();
    this.basicSetting.id = 'msg';
    this.basicSetting.title = 'Message';
    this.basicSetting.noButtons = true;
    this.basicSetting.upperCross = true;
  }


  getNonSearchModelParams(name: any): string {

    if (name === this.NAME_HISTORY) {

      if (this.rowData && (this.rowData.length !== 0)) {
        const obj = {
          contentId: this.rowData[0].contentId,
          vendorId: this.rowData[0].vendorId
        };
        const queryString = JSON.stringify(obj);
        return queryString;
      } else {
        const obj = {
          contentId: this.contentId,
          vendorId: this.vendorId
        };
        const queryString = JSON.stringify(obj);
        return queryString;
      }

    }

  }


  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_HISTORY) {
      return columnDefs;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_HISTORY) {
      return UrlConstants.TITLE_DELIVERIES_HISTORY;
    }
  }


  getGridApi(name: string): GridAPII {
    if (name === this.NAME_HISTORY) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyHistory(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_HISTORY);
    this.OnSubmit(this.NAME_HISTORY);
  }


}
