import { SessionObject } from './session-object';
import { Utils } from '../util';

export class ProjectUtils extends Utils {

      public static IS_LOCALSTORAGE = false;
      public static GRIDWIDTH = 1180;

      public static refresh_key = 'refresh-time';

      public static setSessionObject(sessionObject: SessionObject) {
            ProjectUtils.setStorage('sessionObject', JSON.stringify(sessionObject));
      }

      public static getSessionObject(): SessionObject {
            let sessionObject = null;
            sessionObject = ProjectUtils.getStorage('sessionObject');
            if (typeof sessionObject === 'string') {
                  sessionObject = <SessionObject>JSON.parse(sessionObject);
            }


            return sessionObject;
      }

      public static clearSessionObjects() {
            ProjectUtils.removeStorage('sessionObject');
            ProjectUtils.removeStorage('TIMER');
      }



      public static setStorage(name: string, val: any) {
            if (typeof val === 'object') {
                  val = JSON.stringify(val);
            }
            if (ProjectUtils.IS_LOCALSTORAGE) {
                  localStorage.setItem(name, val);
            } else {
                  sessionStorage.setItem(name, val);
            }
      }

      public static getStorage(name: string) {
            if (ProjectUtils.IS_LOCALSTORAGE) {
                  return localStorage.getItem(name);
            } else {
                  return sessionStorage.getItem(name);
            }
      }

      public static removeStorage(name: string) {
            if (ProjectUtils.IS_LOCALSTORAGE) {
                  localStorage.removeItem(name);
            } else {
                  sessionStorage.removeItem(name);
            }
      }


      public static setDashBoardPost(dashBoardSearchModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.dashBoardPost = dashBoardSearchModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getDashBoardPost() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.dashBoardPost;
      }

      public static setDashBoardSec(dashBoardSecSearchModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.dashBoardSec = dashBoardSecSearchModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getDashBoardSec() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.dashBoardSec;
      }

      public static setCounterReports(counterReportsSearchModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.counterReports = counterReportsSearchModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getCounterReports() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.counterReports;
      }
      public static setDynamicReports(dynamicReportsSearchModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.dynamicReports = dynamicReportsSearchModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getDynamicReports() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.dynamicReports;
      }


      public static setCustomReports(customReportsSearchModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.customReports = customReportsSearchModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getCustomReports() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.sourceReports;
      }

      public static setSourceReports(sourceReportsSearchModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.sourceReports = sourceReportsSearchModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static setIssnIsbnReports(isnIsbnReportsSearchModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.issnIsbnReports = isnIsbnReportsSearchModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getSourceReports() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.sourceReports;
      }

      public static getIssnIsbnReports() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.issnIsbnReports;
      }


      public static setDashBoardCharts(sourceDashBoardCharts: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.dashBoardCharts = sourceDashBoardCharts;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getDashBoardCharts() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.dashBoardCharts;
      }

      public static setZeroUsageJournal(zeroUsageSearchModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.zeroUsageJournal = zeroUsageSearchModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getZeroUsageJournal() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.zeroUsageJournal;
      }

      public static setTitleStages(titleStagesModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.titleStages = titleStagesModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getTitleStages() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.titleStages;
      }

      public static setTitleProcessing(titleProcessingModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.titleProcessing = titleProcessingModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getTitleProcessing() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.titleProcessing;
      }

      public static setTitleOverview(titleOverviewModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.titleOverview = titleOverviewModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getTitleOverview() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.titleOverview;
      }

      public static setTitleDeliveries(titleDeliveriesModel: any) {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            sessionObject.titleDeliveries = titleDeliveriesModel;
            ProjectUtils.setSessionObject(sessionObject);
      }

      public static getTitleDeliveries() {
            const sessionObject: SessionObject = ProjectUtils.getSessionObject();
            return sessionObject.titleDeliveries;
      }


      public static svgCsv(value: any) {
            if ((value.value).includes('csv')) {
                  return '<img src="./assets/images/csv.svg"  class="curPointer" />';
            }
            return 'File not available';
      }

      public static svgExcel(value: any) {
            if ((value.value).includes('xls')) {
                  return '<img src="./assets/images/excel.svg"  class="curPointer" />';
            }
            return 'File not available';
      }
      public static svgZip(value: any) {
            if ((value.value).includes('zip')) {
                  return '<img src="./assets/images/zip.svg" class="curPointer" />';
            }
            return 'File not available';
      }
      public static svgText(value: any) {
            if ((value.value).includes('txt')) {
                  return '<i class="fa fa-file-text curPointer" style="font-size:20px"></i>';
            }
            return 'File not available';
      }
      public static svgHtml(value: any) {
            if ((value.value).includes('html')) {
                  return '<i class="fa fa-html5 curPointer" style="font-size:20px"></i>';
            }
            return 'File not available';
      }
      public static svgXml(value: any) {
            if ((value.value).includes('xml')) {
                  return '<i class="fa fa-file-code-o curPointer" style="font-size:20px"></i>';
            }
            return 'File not available';
      }
      // 'csv,xls,xml,html,txt'
      public static ag_SetWidth(perc: number) {
            return (ProjectUtils.GRIDWIDTH * perc) / 100;
      }

      public static ag_ColorDiv(header: any) {
            // color = '#090' || '#F90';
            // if(header === ){
            const temp = '<div style="width:10px;height:10px;border:1px solid #000; background:#090;"></div>';
            return temp;
            // }else if(header === ){
            //       const temp = '<div style="width:10px;height:10px;border:1px solid #000; background: #F90";"></div>';
            //       return temp;
            // }

      }

      public static message(value: any) {
            const anchor = '<a href="javascript:;">' + value.value + '</a>';
            return anchor;
      }

      public static viewerMsg(value: any) {
            let anchor;
            const userRoleId = ProjectUtils.getSessionObject().userDetails['padUser'].roleId;
            if (userRoleId !== 4) {
                  anchor = '<a href="javascript:;">' + value.value + '</a>';
            } else {
                  anchor = value.value;
            }

            return anchor;
      }

      public static HistoryLink(param: any) {
            let anchor;
            const userRoleId = ProjectUtils.getSessionObject().userDetails['padUser'].roleId;
            if (userRoleId !== 4) {
                  anchor = '<a href="javascript:;"><img src="assets/images/history.png" style="width:20px"/></a>';
            } else {
                  anchor = '<img src="assets/images/history.png" style="width:20px"/>';
            }

            return anchor;
      }

      public static createLink(value: any) {

            let anchor;
            if (value.data.uploadedfilestatus !== 'Processed') {
                  anchor = '<a href="javascript:;">' + value.value + '</a>';
            } else {
                  anchor = value.value;
            }
            return anchor;

      }


      public static comments(value: any) {
            const anchor = '<a href="javascript:;">Details</a>';
            return anchor;

      }

      public static dateTimeToDate(value: any) {
            const date = value.value;
            console.log(date);
            return date;
      }

      public static filterDataFromDataKey(data: any) {
            if (data['data']) {
                  return data['data'];
            } else {
                  return data;
            }
      }


      public static getUserDetailStatus(sessionOj: SessionObject): boolean {
            const retValue = sessionOj && sessionOj.userDetails &&
                  (sessionOj.userDetails[sessionOj.userDetailsStatusKey] === sessionOj.userDetailStatusValue);
            return retValue;
      }

      public static setRefreshTime() {

            if (location.href.includes('page')) {
                  localStorage.setItem(ProjectUtils.refresh_key, Date.now().toString());
            }


      }

      public static getRefreshTime(): string {
            return localStorage.getItem(ProjectUtils.refresh_key);
      }

      public static checkIfReloadTookPlace(): Promise<any> {
            const refreshTime = parseInt(ProjectUtils.getRefreshTime(), 10);
            const currentTime = Date.now();
            const diff = (currentTime - refreshTime) / 1000;

            console.log('checkIfReloadTookPlace', diff);

            return new Promise((resolve, reject) => {
                  if (diff < 6) {
                        resolve(diff);
                  } else {
                        reject(diff);
                  }
            });
      }


}
