

export interface LinkI {
      label: string;
      routerLink: Array<string>;
      breadCrumb: Array<string>;
}

export class TopMenuNavigationData {


      /*****************************PAD_PROJECT***************************** */
      PAD_PROJECT_SEARCH_TITLE = {
            label: 'Search Title',
            routerLink: ['pages', 'pad_project', 'search_title'],
            breadCrumb: ['Pad Project', 'Search Title'],
            enable: false,
            index: 0
      };

      PAD_PROJECT_META_DATA_UPLOAD = {
            label: 'Metadata Upload',
            routerLink: ['pages', 'pad_project', 'meta_data_upload'],
            breadCrumb: ['Pad Project', 'Meta Data Upload'],
            enable: false,
            index: 1
      };

      PAD_PROJECT_METADATA_PROCESSING_STATUS = {
            label: 'Metadata Processing Status',
            routerLink: ['pages', 'pad_project', 'meta_data_processing'],
            breadCrumb: ['Pad Project', 'Meta Data Processing'],
            enable: false,
            index: 2
      };

      PAD_PROJECT_PRICE_UPDATE = {
            label: 'Price Update',
            routerLink: ['pages', 'pad_project', 'price_update'],
            breadCrumb: ['Pad Project', 'Price Update'],
            enable: false,
            index: 3
      };
      /*****************************PAD_PROJECT***************************** */



      /*****************************REPORT***************************** */
      REPORT_TITLE_STAGES = {
            label: 'Title Stages',
            routerLink: ['pages', 'reports', 'stages'],
            breadCrumb: ['Report', 'Title States'],
            enable: false,
            index: 0
      };
      REPORT_TITLE_OVERVIEW = {
            label: 'Title Overview',
            routerLink: ['pages', 'reports', 'overview'],
            breadCrumb: ['Report', 'Title Overview'],
            enable: false,
            index: 1
      };
      REPORT_TITLE_PROCESSING = {
            label: 'Title Processing',
            routerLink: ['pages', 'reports', 'processing'],
            breadCrumb: ['Report', 'Title Processing'],
            enable: false,
            index: 2
      };
      REPORT_TITLE_DELIVERIES = {
            label: 'Title Deliveries',
            routerLink: ['pages', 'reports', 'deliveries'],
            breadCrumb: ['Report', 'Title Deliveries'],
            enable: false,
            index: 3
      };
      /*****************************REPORT***************************** */



      /*****************************USER_MANAGEMENT***************************** */
      USER_MANAGEMENT_CREATE_VENDOR = {
            label: 'Create Vendor',
            routerLink: ['pages', 'user_management', 'create_vendor'],
            breadCrumb: ['User Management', 'Create Vendor'],
            enable: false,
            index: 0
      };
      USER_MANAGEMENT_SEARCH_VENDOR = {
            label: 'Search Vendor',
            routerLink: ['pages', 'user_management', 'search_vendor'],
            breadCrumb: ['User Management', 'Search Vendor'],
            enable: false,
            index: 1
      };
      USER_MANAGEMENT_CREATE_USER = {
            label: 'Create User',
            routerLink: ['pages', 'user_management', 'create_user'],
            breadCrumb: ['User Management', 'Create User'],
            enable: false,
            index: 2
      };

      USER_MANAGEMENT_SEARCH_USER = {
            label: 'Search User',
            routerLink: ['pages', 'user_management', 'search_user'],
            breadCrumb: ['User Management', 'Search User'],
            enable: false,
            index: 3
      };

      USER_MANGEMENT_UPDATE_USER = {
            label: 'Update User',
            routerLink: ['pages', 'user_management', 'update_user'],
            breadCrumb: ['User Management', 'Update User'],
            enable: true,
            index: 2
      };
      USER_MANGEMENT_UPDATE_VENDOR = {
            label: 'Update Vendor',
            routerLink: ['pages', 'user_management', 'update_vendor'],
            breadCrumb: ['User Management', 'Update Vendor'],
            enable: true,
            index: 0
      };



      /*****************************USER_MANAGEMENT***************************** */

      PAD_PROJECT_LABEL = 'Pad Project';
      REPORT_LABEL = 'Report';
      USER_MANAGEMENT_LABEL = 'User Management';

      TOP_NAV_LINKS = [
            this.PAD_PROJECT_SEARCH_TITLE,
            this.PAD_PROJECT_META_DATA_UPLOAD,
            this.PAD_PROJECT_METADATA_PROCESSING_STATUS,
            this.PAD_PROJECT_PRICE_UPDATE,
            this.REPORT_TITLE_STAGES,
            this.REPORT_TITLE_OVERVIEW,
            this.REPORT_TITLE_PROCESSING,
            this.REPORT_TITLE_DELIVERIES,
            this.USER_MANAGEMENT_CREATE_VENDOR,
            this.USER_MANAGEMENT_SEARCH_VENDOR,
            this.USER_MANAGEMENT_CREATE_USER,
            this.USER_MANAGEMENT_SEARCH_USER
      ];

      PAD_PROJECT = {
            links: [
                  this.PAD_PROJECT_SEARCH_TITLE,
                  this.PAD_PROJECT_META_DATA_UPLOAD,
                  this.PAD_PROJECT_METADATA_PROCESSING_STATUS,
                  this.PAD_PROJECT_PRICE_UPDATE
            ],
            label: 'Pad Project'
      };
      REPORT = {
            links: [
                  this.REPORT_TITLE_STAGES,
                  this.REPORT_TITLE_OVERVIEW,
                  this.REPORT_TITLE_PROCESSING,
                  this.REPORT_TITLE_DELIVERIES
            ],
            label: 'Report'
      };

      USER_MANAGEMENT = {
            links: [
                  this.USER_MANAGEMENT_CREATE_VENDOR,
                  this.USER_MANAGEMENT_SEARCH_VENDOR,
                  this.USER_MANAGEMENT_CREATE_USER,
                  this.USER_MANAGEMENT_SEARCH_USER
            ],
            label: 'User Management'
      };




      dashboard = this.PAD_PROJECT.links[0].routerLink;
      dashboarHTMLlink = ['pad_project', 'search_title'];

      myAccount = {
            links: [{
                  label: 'My Account',
                  routerLink: ['pages', 'pad_project', 'search_title'],
                  breadCrumb: ['My Account'],
                  enable: true,
                  index: 0
            }],
            label: 'User Management'
      };


      tesingInterface = {
            links: [{
                  label: 'Testing Interface',
                  routerLink: ['pages', 'testingInterface'],
                  breadCrumb: ['Testing Interface'],
                  enable: true,
                  index: 0
            }],
            label: 'Home'
      };

}
