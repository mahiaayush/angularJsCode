import { BasicSearchModelI } from '../../../acore/base';

export class LoginModel {

      userName: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'User Name',
            apiKey: 'email',
            placeholder: 'User Name',
            name: 'userName'
      };


      password: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Password',
            apiKey: 'password',
            placeholder: 'Password',
            name: 'password'
      };
}
