import { BasicSearchModelI } from '../../../acore/base';

export class MetadataProcessiongDetailsModel {

      isbn: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'ISBN',
            apiKey: 'isbn',
            placeholder: 'Select a isbn',
            name: 'isbn'
      };

}
