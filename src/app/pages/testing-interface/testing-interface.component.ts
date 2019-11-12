import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../acore/base';
import { UrlConstants, SessionObject, ProjectUtils } from '../../acore/utility';
import { ConstantService, ProjectService } from '../../acore/services';
import { TestingInterfaceService } from './testing-interface.service';
import { TestingInterfaceModel } from './testing-interface.model';

@Component({
  selector: 'app-testing-interface',
  templateUrl: './testing-interface.component.html',
  styleUrls: ['./testing-interface.component.css']
})
export class TestingInterfaceComponent extends BaseComponent {
  myNavData: any = {};
  activeLink: any = null;
  NAME_TESING_INTERFACE = 'TESING_INTERFACE';
  testingInterfaceModel: TestingInterfaceModel;
  message: any;

  constructor(
    public constantService: ConstantService,
    protected projectService: ProjectService,
    protected testingInterfaceService: TestingInterfaceService) {
    super(testingInterfaceService, projectService);
    this.myNavData = this.constantService.routerNav.tesingInterface;
    this.activeLink = this.constantService.routerNav.tesingInterface.links[0];
    this.message = '';
  }

  initSearchModels() {
    this.testingInterfaceModel = new TestingInterfaceModel();
  }

  getSearchModel(name: string) {
    if (name === this.NAME_TESING_INTERFACE) {
      return this.testingInterfaceModel;
    }
  }

  setSearchModel(name: string) {
    const searchModel = this.getValueFromSearchModel(name);
    if (name === this.NAME_TESING_INTERFACE) {
      ProjectUtils.setCounterReports(searchModel);
    }
  }


  getServiceUrl(name): string {
    if (name === this.NAME_TESING_INTERFACE) {
      return UrlConstants.TESTING_INTERFACE;
    }
  }

  handleLoadDataFromApi(name: string, data: any) {
    if (name === this.NAME_TESING_INTERFACE) {
      this.handleLoadDataFromApiCrone(data);
    }
  }

  handleErrorLoadDataFromApi(name: string, data: any) {
    if (name === this.NAME_TESING_INTERFACE) {
      this.hideLoader();
    }
  }

  handleLoadDataFromApiCrone(data) {
    this.message = this.testingInterfaceModel.cronLabel.value + ' Process completed successfully.';
    this.hideLoader();
  }

  callCron(croneValue: any) {
    this.showLoader();
    this.message = '';
    this.testingInterfaceModel.cronLabel.value = croneValue;
    this.loadDataFromApi(this.NAME_TESING_INTERFACE);
  }
}
