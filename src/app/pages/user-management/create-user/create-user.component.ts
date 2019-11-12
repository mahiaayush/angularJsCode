import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent, GridAPII } from '../../../acore/base';
import { UserManagementService } from '../user-management.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { CreateUserModel, UpadateUserModel } from './create-user.model';
import { columnDefsCreateUser } from './create-user.data';
import { UrlConstants, SessionObject, ProjectUtils } from '../../../acore/utility';
import { DataDropDownOptions, AutoCompleteModel } from '../../../acore/components';
import { ConstantService, ProjectService } from '../../../acore/services';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent extends BaseComponent {
  state = true;
  myNavData: any = {};
  activeLink: any = null;



  NAME_CREATE_USER = 'CREATE_USER';
  NAME_VIEW_USER = 'VIEW_USER';
  NAME_UPDATE_USER = 'UPDATE_USER';
  NAME_COUNRTY_LIST = 'COUNRTY_LIST';
  NAME_USER_ROLE = 'USER_ROLE';
  NAME_ACTIVE_DEACTIVE_USER = 'ACTIVE_DEACTIVE_USER';

  createUserModel: CreateUserModel;
  upadateUserModel: UpadateUserModel;
  routeLink: string;
  message: string;
  UserID: any;
  userType: any;
  btnString: string;
  countryDropList: Array<any> = [];
  userRoleList: Array<any> = [];
  disabledField: Array<any> = [];
  viewUserArray: Array<any> = [];
  isActive: any;
  subHeadingTitle: string;
  isActiveID: any;
  SuperAdminDiable = false;
  infoMsg: string;
  CurrentUserRoleId: any;

  constructor(
    public constantService: ConstantService,
    protected userManagementService: UserManagementService,
    protected projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super(userManagementService, projectService);
    this.routeLink = '';
    this.btnString = '';
    this.message = '';
    this.infoMsg = '';
    this.route.data
      .subscribe((data) => {
        this.CurrentUserRoleId = ProjectUtils.getSessionObject().userDetails['padUser'].roleId;
        this.routeLink = data[0].type;
        const index = constantService.routerNav.USER_MANAGEMENT_CREATE_USER.index;
        if (data[0].type === 'create_user') {
          this.activeLink = constantService.routerNav.USER_MANAGEMENT.links[index] = constantService.routerNav.USER_MANAGEMENT_CREATE_USER;
        } else {
          this.activeLink = constantService.routerNav.USER_MANAGEMENT.links[index] = constantService.routerNav.USER_MANGEMENT_UPDATE_USER;
        }
        this.myNavData = constantService.routerNav.USER_MANAGEMENT;
      });
  }

  xtBaseOnInit() {
    this.userRole();
    this.countryList();
    this.subHeadingTitle = 'Create User';
    if (this.routeLink === 'update_user') {
      this.route.queryParams.subscribe(params => {
        this.UserID = params.id;
        this.isActive = params.isActive;
        this.userType = params.type;
      });
      if (this.isActive === 'Inactive') {
        this.btnString = 'Activate';
      } else {
        this.btnString = 'Deactivate';
      }
      this.subHeadingTitle = 'User Details';
      this.viewUserDetails();
    }
  }

  initSearchModels() {
    this.createUserModel = new CreateUserModel();
    this.upadateUserModel = new UpadateUserModel();
    const counterReportsSession = ProjectUtils.getCounterReports();
  }

  getSearchModel(name: string) {
    if (name === this.NAME_CREATE_USER) {
      return this.createUserModel;
    } else if (name === this.NAME_UPDATE_USER) {
      return ProjectUtils.object.asignObjTofirstOne(this.upadateUserModel, this.createUserModel);
    }
  }

  setSearchModel(name: string) {
    const searchModel = this.getValueFromSearchModel(name);
    if (name === this.NAME_CREATE_USER || name === this.NAME_UPDATE_USER) {
      ProjectUtils.setCounterReports(searchModel);
    }
  }

  countryList() {
    this.loadDataFromApi(this.NAME_COUNRTY_LIST);
  }

  userRole() {
    this.loadDataFromApi(this.NAME_USER_ROLE);
  }

  getServiceUrl(name): string {
    if (name === this.NAME_CREATE_USER) {
      return UrlConstants.CREATE_USER;
    } else if (name === this.NAME_UPDATE_USER) {
      return UrlConstants.UPDATE_USER;
    } else if (name === this.NAME_VIEW_USER) {
      return UrlConstants.VIEW_ADMIN_USER;
    } else if (name === this.NAME_COUNRTY_LIST) {
      return UrlConstants.COUNTRY_LIST;
    } else if (name === this.NAME_USER_ROLE) {
      return UrlConstants.USER_ROLE;
    } else if (name === this.NAME_ACTIVE_DEACTIVE_USER) {
      return UrlConstants.ACTIVE_DEACTIVE_USER;
    }
  }

  doOnSubmit(e) {
    this.OnSubmit(this.NAME_CREATE_USER);
  }

  createUser() {
    this.message = '';
    this.state = true;
    const tag: any = document.getElementById('phone');
    if (tag.value !== '') {
      this.state = ProjectUtils.html.validateFeedback('phone', 'Create-User-Alert');
      if (this.state === false) {
        this.message = 'You have entered an invalid phone number.';
      }
    }
    if (this.state !== false) {
      this.showLoader();
      this.loadDataFromApi(this.NAME_CREATE_USER);
    }
  }

  handleLoadDataFromApi(name: string, data: any) {
    if (name === this.NAME_CREATE_USER) {
      this.handleLoadDataFromApiCreateUser(data);
    } else if (name === this.NAME_UPDATE_USER) {
      this.handleLoadDataFromApiUpdateUser(data);
    } else if (name === this.NAME_VIEW_USER) {
      this.handleLoadDataFromApiViewAdminUser(data);
    } else if (name === this.NAME_COUNRTY_LIST) {
      this.handleLoadDataFromApiCountryList(data);
    } else if (name === this.NAME_USER_ROLE) {
      this.handleLoadDataFromApiUserRole(data);
    } else if (name === this.NAME_ACTIVE_DEACTIVE_USER) {
      this.handleLoadDataFromApiActiveDeactiveUser(data);
    }
  }

  handleLoadDataFromApiCountryList(data) {
    this.countryDropList = data.padCountry;
  }

  handleLoadDataFromApiActiveDeactiveUser(data) {
    this.disabledField = data.user;
    this.state = true;
    if (this.btnString === 'Activate') {
      this.btnString = 'Deactivate';
      this.message = 'User has been Activated successfully.';
    } else {
      this.btnString = 'Activate';
      this.message = 'User has been Deactivated successfully.';
    }
    ProjectUtils.html.showMsgForDuration('Create-User-Alert');
    this.hideLoader();
  }

  handleLoadDataFromApiViewAdminUser(data) {
    this.SuperAdminDiable = false;
    this.infoMsg = '';
    const checkRole = this.CurrentUserRoleId;
    if (checkRole === 2) {
      if (data.roleId === '1') {
        this.SuperAdminDiable = true;
        this.infoMsg = 'You do not have permissions to modify this user. Contact your System Administrator.';
      }
    }
    this.viewUserArray = data;
    this.upadateUserModel.id.value = data.id;
    this.createUserModel.role.value = data.roleId;
    this.createUserModel.fName.value = data.firstName;
    this.createUserModel.lName.value = data.lastName;
    this.createUserModel.phone.value = data.phoneNo;
    this.createUserModel.address.value = data.address;
    this.createUserModel.city.value = data.addCity;
    this.createUserModel.email.value = data.email;
    this.createUserModel.password.value = data.password;
    this.createUserModel.confirmPassword.value = data.confirmPassword;
    this.createUserModel.zipCode.value = data.addPincode;
    this.createUserModel.state.value = data.addState;
    this.createUserModel.country.value = data.countryId;
    if (data.isActive === '1') {
      this.isActiveID = '0';
    } else {
      this.isActiveID = '1';
    }
    this.hideLoader();
  }

  handleLoadDataFromApiUserRole(data) {
    this.userRoleList = data.padRole;
    const roleDropdown = this.CurrentUserRoleId;
    if (roleDropdown === 1) {
      this.addSuperadminToList(this.userRoleList);
    } else if (roleDropdown === 2) {
      if (this.userType === 'Super Admin') {
        this.addSuperadminToList(this.userRoleList);
      } else {
        this.removeSuperAdmin(this.userRoleList);
      }
    }
  }

  addSuperadminToList(list: Array<any>) {
    list.splice(2, 1);
    list.splice(3, 1);
  }

  removeSuperAdmin(list: Array<any>) {
    list.splice(2, 1);
    list.splice(3, 1);
    list.splice(0, 1);
  }

  handleLoadDataFromApiCreateUser(data) {
    if (data.responseStatus.includes('Success')) {
      this.state = true;
      this.message = 'User has been created successfully.';
      ProjectUtils.html.showMsgForDuration('Create-User-Alert');
    } else {
      this.state = false;
      this.message = 'An account has already been created with this Email/Login.';
      ProjectUtils.html.showMsgForDuration('Create-User-Alert');
    }
    this.hideLoader();
  }

  handleLoadDataFromApiUpdateUser(data) {
    if (data.responseStatus === 'User updated successfully') {
      this.state = true;
      this.message = 'User has been updated successfully.';
      ProjectUtils.html.showMsgForDuration('Create-User-Alert');
    }
    this.hideLoader();
  }

  UpdateUser() {
    this.message = '';
    const userRoleId = this.CurrentUserRoleId;
    if (userRoleId === 2 && this.createUserModel.role.value === '1') {
      this.state = false;
      this.message = 'You do not have permission to update the Super Admin user details.';
      ProjectUtils.html.showMsgForDuration('Create-User-Alert');
    } else {
      const tag: any = document.getElementById('phone');
      if (tag.value !== '') {
        this.state = ProjectUtils.html.validateFeedback('phone', 'Create-User-Alert');
        if (this.state === false) {
          this.message = 'You have entered an invalid phone number.';
        }
      }
      if (this.state !== false) {
        this.showLoader();
        this.loadDataFromApi(this.NAME_UPDATE_USER);
      }
    }

  }

  viewUserDetails() {
    this.showLoader();
    this.loadDataFromApi(this.NAME_VIEW_USER);
  }

  restrictNumeric(e: any) {
    return ProjectUtils.html.numericValidation(e);
  }

  getNonSearchModelParams(name: any): any {
    if (name === this.NAME_VIEW_USER) {
      const obj = {
        user: {
          id: this.UserID
        }
      };
      const queryString = JSON.stringify(obj);
      return queryString;
    } else if (name === this.NAME_ACTIVE_DEACTIVE_USER) {
      const obj = {
        user: {
          id: this.UserID,
          isActive: this.isActiveID
        }
      };
      return obj;
    }
  }

  isActiveUser() {
    this.message = '';
    const userRoleId = this.CurrentUserRoleId;
    if (userRoleId === 2 && this.createUserModel.role.value === '1') {
      this.state = false;
      this.message = 'You do not have permission to Activate or Deactivate the Super Admin user.';
      ProjectUtils.html.showMsgForDuration('Create-User-Alert');
    } else {
      this.showLoader();
      this.loadDataFromApi(this.NAME_ACTIVE_DEACTIVE_USER);
    }
  }

  doOnReset() {
    this.message = '';
    if (this.viewUserArray.length !== 0) {
      this.createUserModel.fName.value = this.viewUserArray['firstName'];
      this.createUserModel.lName.value = this.viewUserArray['lastName'];
      this.createUserModel.role.value = this.viewUserArray['roleId'];
      this.createUserModel.phone.value = this.viewUserArray['phoneNo'];
      this.createUserModel.address.value = this.viewUserArray['address'];
      this.createUserModel.city.value = this.viewUserArray['addCity'];
      this.createUserModel.email.value = this.viewUserArray['email'];
      this.createUserModel.password.value = this.viewUserArray['password'];
      this.createUserModel.confirmPassword.value = this.viewUserArray['confirmPassword'];
      this.createUserModel.zipCode.value = this.viewUserArray['addPincode'];
      this.createUserModel.state.value = this.viewUserArray['addState'];
      this.createUserModel.country.value = this.viewUserArray['countryId'];
    } else {
      this.createUserModel = new CreateUserModel();
    }
  }

  onPaste(event) {
    ProjectUtils.html.numericValidationOnPaste(event);
  }

  xtBaseOnDestroy() {
    const index = this.constantService.routerNav.USER_MANAGEMENT_CREATE_USER.index;
    this.constantService.routerNav.USER_MANAGEMENT.links[index] = this.constantService.routerNav.USER_MANAGEMENT_CREATE_USER;
  }
}
