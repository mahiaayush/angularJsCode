import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../services/custom-http/';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import 'rxjs/add/observable/throw';

import { ProjectUtils, SessionObject } from '../utility';

import { SessionExpService } from '../guards/session-exp/session-exp.service';

import { Router } from '@angular/router';
declare var $;


@Injectable()

export abstract class BaseService {


      httpPopMsgid = 'http-error';
      sessionOut = 'session-out';


      showModalUp(id: string) {
            $(`#${id}`).modal('show');
      }

      hideModalUp(id: string) {
            $(`#${id}`).modal('hide');
      }



      getServiceUrl(name: string): string {
            return null;
      }

      constructor(
            protected http?: HttpService,
            protected router?: Router,
            protected sessionExpService?: SessionExpService
      ) {
      }



      uploadFile(event: any, strURL: string, nameinForm: string, otherBody?: any): Observable<any> {
            let tokenId = null;
            const sessionObj: SessionObject = ProjectUtils.getSessionObject();
            tokenId = sessionObj && sessionObj.userDetails.token;
            return this.http.uploadData(event, strURL, nameinForm, otherBody, tokenId);
      }

      uploadData(strURL: string, body: any) {
            return this.http.extractPostData(strURL, body, '')
                  .map(this.extractData)
                  .catch(this.handleError);
      }


      getDataFromAPI(strURL: string, body: any, responseType?: string): Observable<any> {

            let tokenId = null;
            const sessionObj: SessionObject = ProjectUtils.getSessionObject();
            tokenId = sessionObj && sessionObj.userDetails.token;
            if (!responseType) {
                  this.getResponseType();
            }
            // body = this.getBasicRequiredQueryString(body);
            // if (body[0] === '&') {
            //       body = '?' + body.substring(1);
            // } else if (body[0] !== '?') {
            //       body = '?' + body;
            // }
            // strURL += body;
            return this.http.extractPostData(strURL, body, tokenId, responseType)
                  .map(this.extractData)
                  .catch(this.handleError);
      }


      getBasicRequiredQueryString(queryString: string): string {  // Working in this project
            const userDetails = ProjectUtils.getSessionObject().userDetails;
            queryString += '&user_id=' + '1864470'; // userDetails.userID;
            return queryString;
      }


      getResponseType(): string {
            return '';
      }


      protected extractData(res: any) {

            return res;
      }

      protected handleError = (error: any) => {
            // In a real world app, we might use a remote logging infrastructure
            // We'd also dig deeper into the error to get a better message
            this.showModalUp(this.httpPopMsgid);

            const errMsg = (error.message) ? error.message :
                  error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg); // log to console instead
            return Observable.throw(errMsg);
      }



      apiSessionCheck(obj: any): boolean {
            if (obj['message'] === 'Invalid Session') {
                  this.showModalUp(this.sessionOut);
                  this.sessionExpService.unsubscribeTimer();
                  ProjectUtils.clearSessionObjects();
                  this.router.navigate(['']);
                  return false;
            }
            return true;
      }

}


