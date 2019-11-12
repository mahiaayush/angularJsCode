import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridOptions } from 'ag-grid';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import { BaseService } from '../../acore/base';
import { HttpService } from '../../acore/services';
import { Router } from '@angular/router';
import { SessionExpService } from '../../acore/guards';
import { UtilityService, ProjectUtils } from '././../../acore/utility';


@Injectable()

export class TestingInterfaceService extends BaseService {
      constructor(
            protected http: HttpService,
            protected router: Router,
            protected sessionExpService: SessionExpService,
            private us: UtilityService
      ) {
            super(http, router, sessionExpService);
      }

      PODTitlesCron = [{
            croneValue: 'XMLCrone',
            display: 'Trigger MetaData Ingestion Process'
      },
      {
            croneValue: 'ContentUploadCron',
            display: 'Trigger Content Upload Process'
      },
      {
            croneValue: 'QCCrone',
            display: 'Trigger QC Process'
      },
      {
            croneValue: 'copyFiles',
            display: 'Copy Content for QA'
      },
      {
            croneValue: 'manualQa',
            display: 'Manual QA Process'
      },
      {
            croneValue: 'ContentDistributionCron',
            display: 'Trigger Distribution Process'
      },
      {
            croneValue: 'VendorFeedCron',
            display: 'Get Vendor FeedBack'
      },
      {
            croneValue: 'XmlProcess',
            display: 'Generate Product Status Xml'
      },
      {
            croneValue: 'EmailNotifications',
            display: 'Send Daily Email Notifications'
      }];

      NonPODTitlesCron = [
            {
                  croneValue: 'XMLCroneNonPod',
                  display: 'Trigger MetaData Ingestion Process For Non-POD'
            },
            {
                  croneValue: 'ContentUploadCronNonPod',
                  display: 'Trigger Content Upload Process For Non-POD'
            },
            {
                  croneValue: 'manualQaNonPod',
                  display: 'Manual QA Process For Non-POD'
            },
            {
                  croneValue: 'ContentDistributionCronNonPod',
                  display: 'Trigger Distribution Process For Non-POD'
            },
            {
                  croneValue: 'VendorFeedCronNonPod',
                  display: 'Get Vendor FeedBack For Non-POD'
            },
            {
                  croneValue: 'EmailNotificationsNonPod',
                  display: 'Send Daily Email Notifications For Non-POD'
            },
            {
                  croneValue: 'XmlProcessNonPod',
                  display: 'Generate Product Status Xml For Non-POD'
            }];

      PriceChangeWorkFlow = [{
            croneValue: 'copyCovers',
            display: 'Copy Covers for price Update'
      },
      {
            croneValue: 'uploadCovers',
            display: 'Upload Covers after price update'
      },
      {
            croneValue: 'coverDistribution',
            display: 'Trigger Cover Distribution'
      }];

      TestConnections = [{
            croneValue: 'FtpCronUploadTest',
            display: 'Ftp Upload Test Case for All Vendors'
      },
      {
            croneValue: 'FtpCronDownloadTest',
            display: 'Ftp Download Test Case for All Vendors'
      }];
}
