import { BasicSearchModelI } from '../../../acore/base';

export class SearchUserModel {

      firstName: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'First Name',
            apiKey: 'firstName',
            placeholder: 'Select a firstName',
            name: 'firstName'
      };
      lastName: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Last Name',
            apiKey: 'lastName',
            placeholder: 'Select a lastName',
            name: 'lastName'
      };
      email: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Email',
            apiKey: 'email',
            placeholder: 'Select a email',
            name: 'email'
      };
}
