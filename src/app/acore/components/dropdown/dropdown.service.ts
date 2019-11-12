import { Injectable } from '@angular/core';
import { Utils, UrlConstants, ProjectUtils } from '../../utility';
import { BaseService } from '../../base';
import { HttpService } from '../../services';
import { DataDropDownOptions } from './dropdown.model';
import { DropdownBodyParameter } from './dropdown.model';
import { Router } from '@angular/router';
import { SessionExpService } from '../../guards';


@Injectable()

export class DropdownService extends BaseService {
      constructor(
            protected http: HttpService,
            protected router: Router,
            protected sessExp: SessionExpService
      ) { super(http, router, sessExp); }


      getDropDownData(url: string, ddOptions?: DataDropDownOptions | any) {
            const params = this.setMyParams(ddOptions);
            return this.getDataFromAPI(url, params);
      }

      errorChecking(ddOptions: DataDropDownOptions) {
            if (!ddOptions.keyName) {
                  throw new Error('Drop Down must have a "Key Name" attribute.');
            }
            if (!ddOptions.keyDesc) {
                  throw new Error('Drop Down must have a "Key Description" attribute.');
            }
      }

      dropDownSetting(ddOptions: DataDropDownOptions, mySettings: any, myTexts: any) {
            myTexts.defaultTitle = ddOptions.firstOptionText || 'Select a value';
            if (ddOptions.selectMulti) {
                  mySettings.selectionLimit = 0;
                  mySettings.autoUnselect = false;
                  mySettings.showCheckAll = true;
                  mySettings.showUncheckAll = true;
                  mySettings.closeOnSelect = false;
            } else {
                  mySettings.selectionLimit = 1;
                  mySettings.autoUnselect = true;
                  mySettings.closeOnSelect = true;
            }
      }

      doSorting(ddOptions: DataDropDownOptions, data: Array<any>) {
            if (ddOptions.sort) {
                  const sortKey = ddOptions.sortKey || ddOptions.keyDesc;
                  const sortOrder = ddOptions.sortOrder || 'asc';
                  Utils.ar_sorting(data, sortKey, sortOrder);
            }
      }

      setMyOption(ddOptions: DataDropDownOptions, data: Array<any>, ): Array<any> {

            if (typeof data[0] === 'object') {
                  this.doSorting(ddOptions, data);
            }


            let myOptions = [];
            if (Array.isArray(data)) {

                  if (ddOptions.simpleArray) {
                        data.forEach(item => {
                              myOptions.push({
                                    id: item,
                                    name: item
                              });
                        });
                  } else {
                        myOptions = data.map(item => {
                              return {
                                    id: this.setMyOptionsID(ddOptions, item),
                                    name: this.setMyOptionsName(ddOptions, item)
                              };
                        });
                  }
            }

            return myOptions;
      }

      setMyOptionsID(ddOptions: DataDropDownOptions, item: any): string {

            if (ddOptions.combineThemKey) {
                  let combinedValue = '';
                  ddOptions.combineThemKey.forEach((k) => {

                        if (k.type === 'key') {
                              combinedValue += item[k.value];
                        } else if (k.type === 'plain') {
                              combinedValue += k.value;
                        }
                  });

                  if (ddOptions.addStringToID) {
                        return ddOptions.addStringToID + item[ddOptions.keyName] + combinedValue;
                  }
                  return combinedValue;
            }
            return item[ddOptions.keyName];
      }


      setMyOptionsName(ddOptions: DataDropDownOptions, item: any): string {

            const myCombineFlag = ddOptions['combineThem'];

            if (myCombineFlag) {
                  return `${item[myCombineFlag[0]]} - ${item[myCombineFlag[1]]}`;
            } else if (ddOptions.combineThemName) {
                  let combinedValue = '';
                  ddOptions.combineThemName.forEach((k) => {

                        if (k.type === 'key') {
                              combinedValue += item[k.value];
                        } else if (k.type === 'plain') {
                              combinedValue += k.value;
                        }
                  });
                  return combinedValue;
            }

            return item[ddOptions.keyDesc];
      }


      download(url) {
            Utils.isNotEmpty(url)
                  .then(() => {
                        ProjectUtils.downloadGET(<any>url);
                  })
                  .catch(() => {
                        console.log('No download Link');
                  });

      }


      setMyParams(ddOptions: DataDropDownOptions) {

            if (ddOptions.initialParameter) {
                  const queryString = ProjectUtils.obj_MakeQueryStringFromObj(ddOptions.initialParameter);
                  return queryString;
            }
            return '';

      }
}
