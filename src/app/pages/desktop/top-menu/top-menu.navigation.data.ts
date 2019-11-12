

export interface LinkI {
      label: string;
      routerLink: Array<string | string>;
      breadCrumb: Array<string>;
}

export class TopMenuNavigationData {

      public static PAD_PROJECT = {
            links: [
                  {
                        label: 'Search Title',
                        routerLink: ['pages', 'pad_project', 'search_title'],
                        breadCrumb: ['Pad Project', 'Search Title']
                  },
                  {
                        label: 'Metadata Upload',
                        routerLink: ['pages', 'pad_project', 'meta_data_upload'],
                        breadCrumb: ['Pad Project', 'Meta Data Upload']
                  },
                  {
                        label: 'Metadata Processing Status',
                        routerLink: ['pages', 'pad_project', 'meta_data_processing'],
                        breadCrumb: ['Pad Project', 'Meta Data Processing']
                  },
                  {
                        label: 'Price Update',
                        routerLink: ['pages', 'pad_project', 'price_update'],
                        breadCrumb: []
                  }
            ],
            label: 'Pad Project'
      };

      public static REPORT = {
            links: [
                  {
                        label: 'Title Stages',
                        routerLink: ['pages', 'reports', 'stages'],
                        breadCrumb: ['Report', 'Title States']
                  },
                  {
                        label: 'Title Overview',
                        routerLink: ['pages', 'reports', 'overview'],
                        breadCrumb: ['Report', 'Title Overview']
                  },
                  {
                        label: 'Title Processing',
                        routerLink: ['pages', 'reports', 'processing'],
                        breadCrumb: ['Report', 'Title Processing']
                  },
                  {
                        label: 'Title Deliveries',
                        routerLink: ['pages', 'reports', 'deliveries'],
                        breadCrumb: ['Report', 'Title Deliveries']
                  }
            ],
            label: 'Report'
      };

      public static USER_MANAGEMENT = {
            links: [
                  {
                        label: 'Create Vendor',
                        routerLink: ['pages', 'user_management', 'create_vendor'],
                        breadCrumb: ['User Management', 'Create Vendor']
                  },
                  {
                        label: 'Search Vendor',
                        routerLink: ['pages', 'user_management', 'search_vendor'],
                        breadCrumb: ['User Management', 'Search Vendor']
                  },
                  {
                        label: 'Create User',
                        routerLink: ['pages', 'user_management', 'create_user'],
                        breadCrumb: ['User Management', 'Create User']
                  },
                  {
                        label: 'Search User',
                        routerLink: ['pages', 'user_management', 'search_user'],
                        breadCrumb: ['User Management', 'Search User']
                  }
            ],
            label: 'User Management'
      };

      public static dashboard = TopMenuNavigationData.PAD_PROJECT.links[0].routerLink;
      public static dashboarHTMLlink = ['pad_project', 'search_title'];

}
