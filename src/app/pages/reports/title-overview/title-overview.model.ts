import { BasicSearchModelI } from '../../../acore/base';

export class TitleOverviewModel {

      isbn: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Reporting period',
            apiKey: 'isbn',
            placeholder: 'Select a ISBN',
            name: 'isbn'
      };
      title: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Reporting period',
            apiKey: 'title',
            placeholder: 'Select a title',
            name: 'title'
      };
      author: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Reporting period',
            apiKey: 'author',
            placeholder: 'Select a author',
            name: 'author'
      };
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
      productProcessCode: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Reporting period',
            apiKey: 'productProcessCode',
            placeholder: 'Select a productProcessCode',
            name: 'productProcessCode'
      };
      firstFlag: BasicSearchModelI = {
            value: '1',
            defaultValue: null,
            label: 'Reporting period',
            apiKey: 'firstFlag',
            placeholder: 'Select a firstFlag',
            name: 'firstFlag'
      };
      // toDate: BasicSearchModelI = {
      //       value: '',
      //       defaultValue: null,
      //       label: 'Reporting period',
      //       apiKey: 'toDate',
      //       placeholder: 'Select a toDate',
      //       name: 'toDate'
      // };
      // fromDate: BasicSearchModelI = {
      //       value: '',
      //       defaultValue: null,
      //       label: 'Reporting period',
      //       apiKey: 'fromDate',
      //       placeholder: 'Select a fromDate',
      //       name: 'fromDate'
      // };
}


export class TitleOverviewDateModel {

      startDate = {
            apiKey: 'fromDate'
      };

      endDate = {
            apiKey: 'toDate'
      };
}
