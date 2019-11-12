import { BasicSearchModelI } from '../../../acore/base';

export class TitleStagesModel {

      productSponsor: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Reporting period',
            apiKey: 'productSponsor',
            placeholder: 'Select a Product Sponsor',
            name: 'productSponsor'
      };

      productLine: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Reporting period',
            apiKey: 'productLine',
            placeholder: 'Select a productLine',
            name: 'productLine'
      };

      firstFlag: BasicSearchModelI = {
            value: '1',
            defaultValue: null,
            label: 'Reporting period',
            apiKey: 'firstFlag',
            placeholder: 'Select a firstFlag',
            name: 'firstFlag'
      };
}
