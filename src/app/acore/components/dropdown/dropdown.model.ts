import { Subject } from 'rxjs/Subject';
import { LoaderComponent } from '../loader';

export interface CombineThemKey {
      type: 'key' | 'plain';
      value: string;
}


export interface DropDownOptionsI {
      name: string | number;
      id: string | number;
}

export interface ApiTriggerI {
      body: Array<DropdownBodyParameter>;
      url?: string;
}

export interface DropdownBodyParameter {
      key: string;
      value: string;
}

export class DataDropDownOptions {
      loader?: LoaderComponent | any;
      serviceURL?: string;
      keyName?: string;
      keyDesc?: string;
      firstOptionText?: string;
      firstOptionValue?: string;
      modelName?: string;
      multipleState = false;
      sizeCount = 0;
      selectMulti = false;
      combineThemName?: Array<CombineThemKey>;
      combineThemKey?: Array<CombineThemKey>;
      combineThem?: Array<string>;
      sort?: boolean;
      sortKey?: string;
      sortOrder?: 'asc' | 'dsc' = 'asc';
      isDownloadable?: boolean;
      initialParameter: any;
      fetchDataOnClick = false;
      ownLoader = false;
      addStringToID = '';
      simpleArray = false;
}
