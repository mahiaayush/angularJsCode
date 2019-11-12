import { BaseSearchModel, BasicSearchModelI } from '../../../acore/base/base.search.model';

export class SecurityCheckModel extends BaseSearchModel {

      // user_id: any;
      // security_que: any;
      // security_ans: any;
      // password: any;
      // confirmpassword: any;



      user_id: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'user id',
            apiKey: 'user_id',
            placeholder: 'user id',
            name: 'user_id'
      };
      security_que: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'security que',
            apiKey: 'security_que',
            placeholder: 'Security Question',
            name: 'security_que'
      };
      security_ans: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'security que',
            apiKey: 'security_ans',
            placeholder: 'Security Answer',
            name: 'security_ans'
      };
      password: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'password',
            apiKey: 'password',
            placeholder: 'password',
            name: 'password'
      };
      confirmpassword: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'confirmpassword',
            apiKey: 'confirmpassword',
            placeholder: 'confirm password',
            name: 'confirmpassword'
      };
}
