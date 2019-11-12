import { Injectable } from '@angular/core';
import { BaseService } from './acore/base';
import { HttpService } from './acore/services/custom-http/';
import { CustomModalPopUpModel } from './acore/components/custom-modal-pop-up';
import { ConstantService } from './acore/services';
import { Router } from '@angular/router';

@Injectable()

export class AppService extends BaseService {
      constructor(
            protected http: HttpService,
            protected router: Router,
            private constantService: ConstantService
      ) {
            super(http, router);
      }

      createMyPopUpHttpError() {
            const basicSetting = new CustomModalPopUpModel();
            basicSetting.id = this.httpPopMsgid;
            basicSetting.title = 'Alert';
            basicSetting.noButtons = true;
            basicSetting.upperCross = true;
            return basicSetting;
      }

      createMyPopUpAutoLogout() {
            const basicSetting = new CustomModalPopUpModel();
            basicSetting.id = this.constantService.autoLogoutPopUpID;
            basicSetting.title = 'Alert';
            basicSetting.noButtons = true;
            basicSetting.upperCross = true;
            return basicSetting;
      }

      createMyPopUpSessionOut() {
            const basicSetting = new CustomModalPopUpModel();
            basicSetting.id = this.sessionOut;
            basicSetting.title = 'Alert';
            basicSetting.noButtons = true;
            basicSetting.upperCross = true;
            return basicSetting;
      }
}
