import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityCheckModel } from '../security-check/security-check.model';
import { BaseComponent } from '../../../../app/acore/base/base.component';
import { SecurityCheckService } from '../security-check/security-check.service';
import { ProjectUtils, UrlConstants } from '../../../acore/utility';
@Component({
  selector: 'app-security-check',
  templateUrl: './security-check.component.html',
  styleUrls: ['./security-check.component.css'],
  providers: [SecurityCheckService]
})
export class SecurityCheckComponent extends BaseComponent {

  NAME_SECURITY_CHECK = 'SECURITY_CHECK';
  securitycheckModel: SecurityCheckModel;
  ngModel: any;
  resetUser: any;
  error: any;
  ischanged = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,

    protected securitycheckService: SecurityCheckService,
  ) {
    super(securitycheckService);

    this.initbyRouter();



  }
  initSearchModels() {
    this.securitycheckModel = new SecurityCheckModel();
  }

  initbyRouter() {

    this.securitycheckModel.user_id.value = this.route.snapshot.queryParamMap.get('userid');
    this.securitycheckModel.security_que.value = this.route.snapshot.queryParamMap.get('question');
  }

  getSearchModel(name: string) {
    if (name === this.NAME_SECURITY_CHECK) {



      return this.securitycheckModel;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_SECURITY_CHECK) {
      return '';
    }
  }
  handleLoadDataFromApi(name: string, data: any) {
    if (name === this.NAME_SECURITY_CHECK) {
      console.log('To_Reset_Username', data);
      // this.router.navigate(['../../securityCheck', { userid: data[0]['user_id'], question: data[0]['Question'] }]);
      if (ProjectUtils.isEmpty(data['error']) || data['error'] === 'null') {
        this.ischanged = true;

      } else {
        this.error = data['error'];
        this.ischanged = false;
      }
    }
  }
  // getSearchModel(): any {
  //   if (ProjectUtils.isEmpty(this.securitycheckModel)) {
  //     if (ProjectUtils.isEmpty(this.securitycheckModel)) {
  //       this.securitycheckModel = new SecurityCheckModel();
  //     }
  //     this.securitycheckModel.user_id = this.route.snapshot.queryParamMap.get('userid');
  //     this.securitycheckModel.security_que = this.route.snapshot.queryParamMap.get('question');
  //     console.log(this.securitycheckModel.user_id, this.securitycheckModel.security_que);
  //     this.ngModel = this.securitycheckModel.security_ans;
  //   }
  //   return this.securitycheckModel;
  // }



  OnSubmit() {

    this.loadDataFromApi(this.NAME_SECURITY_CHECK);
    //   .subscribe((userDetails) => {
    //   console.log('To_Reset_Username', userDetails);
    //   // this.router.navigate(['../../securityCheck', { userid: data[0]['user_id'], question: data[0]['Question'] }]);
    //   if (ProjectUtils.isEmpty(userDetails['error']) || userDetails['error'] === 'null') {
    //     this.ischanged = true;

    //   } else {
    //     this.error = userDetails['error'];
    //     this.ischanged = false;
    //   }

    // });





    // let body: any = '';
    // body += this.securitycheckService.setParamValue(body, 'user_id', this.securitycheckModel.user_id);
    // body += this.securitycheckService.setParamValue(body, 'security_que', this.securitycheckModel.security_que);
    // body += this.securitycheckService.setParamValue(body, 'security_ans', this.securitycheckModel.security_ans);

    // console.log(body);

    // this.resetUser = this.securitycheckService.checksecurity(body).subscribe(data => {

    //   if (ProjectUtils.isEmpty(data['error'])) {
    //     this.ischanged = true;

    //   } else {
    //     this.error = data['error'];
    //     this.ischanged = false;
    //   }


    //   console.log('To_Reset_Username', data);

    // });
  }

}
