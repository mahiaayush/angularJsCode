import { Component, OnInit } from '@angular/core';
import { ConstantService, ProjectService } from '../../../acore/services';
import { BaseComponent } from '../../../acore/base';
import { PadProjectService } from '../pad-project.service';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';

@Component({
  selector: 'app-price-update',
  templateUrl: './price-update.component.html',
  styleUrls: ['./price-update.component.css']
})
export class PriceUpdateComponent extends BaseComponent {
  myNavData: any = {};
  activeLink: any = null;
  NAME_PRICE_UPDATE = 'PRICE_UPDATE';
  uploadEvent: any;
  fileInput: any;
  UserId: any;
  errorMsg: any;
  msg: any;
  state: boolean;



  constructor(private padProjectService: PadProjectService,
    public constantService: ConstantService,
    protected projectService: ProjectService) {
    super(padProjectService, projectService);
    this.myNavData = constantService.routerNav.PAD_PROJECT;
    this.activeLink = constantService.routerNav.PAD_PROJECT.links[3];
    const displayUserName = ProjectUtils.getSessionObject();
    this.UserId = displayUserName.userDetails.padUser.id;
  }


  xtBaseOnInit() {

  }

  getTemplate() {
    ProjectUtils.downloadGET('./assets/SamplePriceNew.xls');
  }


  fileChange(event) {

    if (!event.target.files[0].name.includes('xls')) {
      this.errorMsg = 'Invalid file. Only Excel files can be uploaded.';
      this.fileInput = null;
    }

    this.uploadEvent = event;
  }

  upLoadFile() {
    const temp = { userId: this.UserId };
    this.baseService.uploadFile(this.uploadEvent, UrlConstants.PRICE_UPDATE, 'image', temp)
      .subscribe((data) => {
        this.state = true;
        this.msg = 'XLS File Uploaded and data saved Successfully.';
        ProjectUtils.html.showMsgForDuration('Price-Update-Form');
      }, (e) => {
        this.state = false;
        this.msg = 'Error in saving file.';
        ProjectUtils.html.showMsgForDuration('Price-Update-Form');
      });
  }

}
