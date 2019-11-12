import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { BaseComponent, GridAPII } from '../../../acore/base';
import { MetadataUploadModel } from './metadata-upload.model';
import { PadProjectService } from '../pad-project.service';
// import { columnDefsMetadataUPLOAD } from './metadata-processing-status.data';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';
import { DataDropDownOptions, AutoCompleteModel } from '../../../acore/components';
import { ConstantService, ProjectService } from '../../../acore/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metadata-upload',
  templateUrl: './metadata-upload.component.html',
  styleUrls: ['./metadata-upload.component.css']
})
export class MetadataUploadComponent extends BaseComponent {
  myNavData: any = {};
  activeLink: any = null;
  NAME_METADATA_UPLOAD = 'METADATA_UPLOAD';
  metadataUploadModel: MetadataUploadModel;
  fileInput: any;
  msg: any;
  state: boolean;
  errorMsg: any;
  uploadEvent: any;

  constructor(private padProjectService: PadProjectService,
    public constantService: ConstantService,
    protected projectService: ProjectService) {
    super(padProjectService, projectService);


    this.myNavData = constantService.routerNav.PAD_PROJECT;
    this.activeLink = constantService.routerNav.PAD_PROJECT.links[1];
  }

  fileChange(event) {
    if (!event.target.files[0].name.includes('xml')) {
      this.errorMsg = 'Invalid file. Only XML files can be uploaded.';
      this.fileInput = null;
    }

    this.uploadEvent = event;
  }

  upLoadFile() {
    const temp = { podXML: this.metadataUploadModel.podXML.value };
    this.baseService.uploadFile(this.uploadEvent, UrlConstants.METADATA_UPLOAD, 'image', temp)
      .subscribe((data) => {
        this.state = true;
        this.msg = 'File saved to server location';
        ProjectUtils.html.showMsgForDuration('MetaData-Upload-Form');
      }, (e) => {
        this.state = false;
        this.msg = 'Error in saving file.';
        ProjectUtils.html.showMsgForDuration('MetaData-Upload-Form');
      });
  }

  xtBaseOnInit() {

  }

  initSearchModels() {
    this.metadataUploadModel = new MetadataUploadModel();
    const counterReportsSession = ProjectUtils.getCounterReports();
    // this.setValueFromSession(this.metadataProcessiongStatusModel, counterReportsSession);

  }


  getSearchModel(name: string) {
    if (name === this.NAME_METADATA_UPLOAD) {
      return this.metadataUploadModel;
    }
  }

  setSearchModel(name: string) {
    const searchModel = this.getValueFromSearchModel(name);
    if (name === this.NAME_METADATA_UPLOAD) {
      ProjectUtils.setCounterReports(searchModel);
    }
  }

}







