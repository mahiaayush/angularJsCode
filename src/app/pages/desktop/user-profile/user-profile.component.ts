import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BaseComponent } from '../../../acore/base';
import { DesktopService } from '../desktop.service';
import { UserAccountModel } from './user-profile.model';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService, ConstantService } from '../../../acore/services';
import { Constants } from 'ag-grid';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent extends BaseComponent {
  myNavData: any = {};
  activeLink: any = null;
  NAME_VIEW_ACCOUNT_USER = 'VIEW_ACCOUNT_USER';
  NAME_UPDATE_ACCOUNT_USER = 'UPDATE_ACCOUNT_USER';
  NAME_COUNRTY_LIST = 'COUNRTY_LIST';
  NAME_USER_ROLE = 'USER_ROLE';
  state = true;
  message: string;
  UserID: any;
  countryDropList: Array<any> = [];
  userRoleList: Array<any> = [];

  userAccountModel: UserAccountModel;

  constructor(private desktopService: DesktopService,
    protected projectService: ProjectService,
    public constantService: ConstantService) {
    super(desktopService, projectService);
    this.myNavData = this.constantService.routerNav.myAccount;
    this.activeLink = this.constantService.routerNav.myAccount.links[0];
    this.message = '';
    const viewcurentUserDetails = ProjectUtils.getSessionObject();
    this.UserID = viewcurentUserDetails.userDetails.padUser.id;
  }

  xtBaseOnInit() {
    this.countryList();
    this.userRole();
    this.viewUserDetails();
  }

  initSearchModels() {
    this.userAccountModel = new UserAccountModel();
    const counterReportsSession = ProjectUtils.getCounterReports();
  }

  getSearchModel(name: string) {
    if (name === this.NAME_UPDATE_ACCOUNT_USER) {
      return this.userAccountModel;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_COUNRTY_LIST) {
      return UrlConstants.COUNTRY_LIST;
    } else if (name === this.NAME_USER_ROLE) {
      return UrlConstants.USER_ROLE;
    } else if (name === this.NAME_UPDATE_ACCOUNT_USER) {
      return UrlConstants.UPDATE_USER;
    }
  }

  handleLoadDataFromApi(name: string, data: any) {
    if (name === this.NAME_COUNRTY_LIST) {
      this.handleLoadDataFromApiCountryList(data);
    } else if (name === this.NAME_USER_ROLE) {
      this.handleLoadDataFromApiUserRole(data);
    } else if (name === this.NAME_UPDATE_ACCOUNT_USER) {
      this.handleLoadDataFromApiupdateUserAccount(data);
    }
  }


  countryList() {
    this.loadDataFromApi(this.NAME_COUNRTY_LIST);
  }

  handleLoadDataFromApiCountryList(data) {
    this.countryDropList = data.padCountry;
  }


  userRole() {
    this.loadDataFromApi(this.NAME_USER_ROLE);
  }

  handleLoadDataFromApiUserRole(data) {
    this.userRoleList = data.padRole;
    const roleDropdown = ProjectUtils.getSessionObject().userDetails['padUser'].roleId;
    if (roleDropdown === 1) {
      this.userRoleList.splice(2, 1);
      this.userRoleList.splice(3, 1);
    } else if (roleDropdown === 2) {
      this.userRoleList.splice(2, 1);
      this.userRoleList.splice(3, 1);
      this.userRoleList.splice(0, 1);
    } else if (roleDropdown === 4) {
      this.userRoleList.splice(0, 3);
      this.userRoleList.splice(1, 1);
    }
  }

  setSearchModel(name: string) {
    const searchModel = this.getValueFromSearchModel(name);
    if (name === this.NAME_UPDATE_ACCOUNT_USER) {
      ProjectUtils.setCounterReports(searchModel);
    }
  }

  updateUserAccount() {
    this.message = '';
    const tag: any = document.getElementById('phone');
    if (tag.value !== '') {
      this.state = ProjectUtils.html.validateFeedback('phone', 'Create-User-Alert');
      if (this.state === false) {
        this.message = 'You have entered an invalid phone number.';
      }
    }
    if (this.state !== false) {
      this.showLoader();
      this.loadDataFromApi(this.NAME_UPDATE_ACCOUNT_USER);
    }
  }

  handleLoadDataFromApiupdateUserAccount(data) {
    const sessionObj: SessionObject = ProjectUtils.getSessionObject();
    sessionObj.userDetails['padUser'] = this.getValueFromSearchModel(this.NAME_UPDATE_ACCOUNT_USER);
    sessionObj.userDetails['padUser']['password'] = '';
    sessionObj.userDetails['padUser']['confirmPassword'] = '';
    this.constantService.userDetails = sessionObj.userDetails['padUser'];
    ProjectUtils.setSessionObject(sessionObj);
    this.state = true;
    if (data.responseStatus === 'User updated successfully') {
      this.message = 'User has been updated successfully.';
      ProjectUtils.html.showMsgForDuration('My-Account-Details');
    }
    this.hideLoader();
  }

  restrictNumeric(e: any) {
    return ProjectUtils.html.numericValidation(e);
  }

  viewUserDetails() {
    const currentUsrDetails = ProjectUtils.getSessionObject().userDetails['padUser'];
    this.userAccountModel.id.value = currentUsrDetails.id;
    this.userAccountModel.roleId.value = currentUsrDetails.roleId;
    this.userAccountModel.firstName.value = currentUsrDetails.firstName;
    this.userAccountModel.lastName.value = currentUsrDetails.lastName;
    this.userAccountModel.address.value = currentUsrDetails.address;
    this.userAccountModel.addCity.value = currentUsrDetails.addCity;
    this.userAccountModel.email.value = currentUsrDetails.email;
    this.userAccountModel.addState.value = currentUsrDetails.addState;
    this.userAccountModel.addPincode.value = currentUsrDetails.addPincode;
    this.userAccountModel.phoneNo.value = currentUsrDetails.phoneNo;
    this.userAccountModel.countryId.value = currentUsrDetails.countryId;
  }

  doOnReset() {
    this.viewUserDetails();
  }

  onPaste(event) {
    ProjectUtils.html.numericValidationOnPaste(event);
  }
}
