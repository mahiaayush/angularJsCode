import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { BaseComponent, GridAPII } from '../../../acore/base';
import { PadProjectService } from '../pad-project.service';
import { columnDefs } from './vendor-details.data';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';
import { DataDropDownOptions, AutoCompleteModel, TabsComponent } from '../../../acore/components';
import { ConstantService, ProjectService } from '../../../acore/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent extends BaseComponent {

  NAME_VENDOR_DETAILS = 'VENDOR_DETAILS';
  myNavData: any = {};
  activeLink: any = null;

  gridOptions: GridOptions = {};
  @Input() rowData: Array<any>;
  @ViewChild('history') historyTemplate;
  @ViewChild(TabsComponent) tabsComponent;

  constructor(private padProjectService: PadProjectService,
    public constantService: ConstantService,
    protected projectService: ProjectService,
    private router: Router) {
    super(padProjectService, projectService);
    this.myNavData = constantService.routerNav.PAD_PROJECT;
    this.activeLink = constantService.routerNav.PAD_PROJECT.links[0];
    this.gridOptions.onCellClicked = this.agCellClicked;

  }

  agCellClicked = (event) => {
    const headerName: string = event.colDef.headerName;
    const row = event['data'];
    if (headerName === 'History') {
      this.router.navigate(['./pages/history'], {
        queryParams: {
          id: this.rowData[0].isbn,
          vendor: row.vendor, contentId: row.contentId, vendorId: row.vendorId
        }
      });

    }
  }

  xtBaseOnInit() {

  }

  getNonSearchModelParams(name: any): string | any {
    if (name === this.NAME_VENDOR_DETAILS) {
      const obj = {
        contentId: this.rowData[0].id,
        isbn: this.rowData[0].isbn
      };

      return obj;
    }

  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_VENDOR_DETAILS) {
      return columnDefs;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_VENDOR_DETAILS) {
      return UrlConstants.VENDOR_DETAILS;
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_VENDOR_DETAILS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyVendorDetails(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_VENDOR_DETAILS);
    this.OnSubmit(this.NAME_VENDOR_DETAILS);
  }

  CustomReInitTask(data: any) {
    this.rowData = data;
    this.OnSubmit(this.NAME_VENDOR_DETAILS);
    console.log('CustomReInitTask', data, this.rowData);
  }

}

