

export class UrlConstants {
      static WILEY_BASE_URL = 'http://betawileypadservice.mpstechnologies.com/wileypad-service/rest/';
      // static WILEY_BASE_URL = 'http://10.50.8.93:8080/wileypad-service/rest/';

      static WILEY_BASE_URL_LOGIN = 'http://betawileypadservice.mpstechnologies.com/wileypad-service/';
      // static WILEY_BASE_URL_LOGIN = 'http://10.50.8.93:8080/wileypad-service/';

      /* **************  USER DETAILS  *************** */
      static LOGIN = UrlConstants.WILEY_BASE_URL_LOGIN + 'login';
      static USERACCOUNT = UrlConstants.WILEY_BASE_URL + 'ViewAdminUser';
      /* **************  USER DETAILS  *************** */

      /* **************  PAD PROJECT  *************** */

      /* **************  PAD PROJECT  *************** */

      /* **************  User Management  *************** */
      static CREATE_VENDOR = UrlConstants.WILEY_BASE_URL + 'vendorProfile';
      static CREATE_USER = UrlConstants.WILEY_BASE_URL + 'saveAdminUser';
      static SEARCH_VENDOR = UrlConstants.WILEY_BASE_URL + 'searchVendor';
      static VIEW_VENDOR = UrlConstants.WILEY_BASE_URL + 'viewVendor';
      static UPDATE_VENDOR = UrlConstants.WILEY_BASE_URL + 'updateVendor';
      static SEARCH_USER = UrlConstants.WILEY_BASE_URL + 'searchAdminUser';
      static ACTIVE_DEACTIVE_USER = UrlConstants.WILEY_BASE_URL + 'userActivate';
      static ACTIVE_DEACTIVE_VENDOR = UrlConstants.WILEY_BASE_URL + 'vendorActivate';
      static UPDATE_USER = UrlConstants.WILEY_BASE_URL + 'updateAdminUser';
      static VIEW_ADMIN_USER = UrlConstants.WILEY_BASE_URL + 'viewAdminUser';
      static SEARCH_TITLE = UrlConstants.WILEY_BASE_URL + 'searchTitle';
      static CONTENT_UPLOAD = UrlConstants.WILEY_BASE_URL + 'uploadedFiles';
      static DOWNLOAD_FILE = UrlConstants.WILEY_BASE_URL + 'downloadFiles';
      static UPDATE_TITLE = UrlConstants.WILEY_BASE_URL + 'updateTitle';
      static VIEW_TITLE = UrlConstants.WILEY_BASE_URL + 'viewTitle';
      static COUNTRY_LIST = UrlConstants.WILEY_BASE_URL + 'getCountryList';
      static USER_ROLE = UrlConstants.WILEY_BASE_URL + 'getPadRoleList';
      static PAD_STATIC_RESOURCES = UrlConstants.WILEY_BASE_URL + 'padStaticResourceList';
      static PAD_STATUS_RESOURCES_LIST = UrlConstants.WILEY_BASE_URL + 'padStatusResourceList';
      static AUTO_COMPLETE = UrlConstants.WILEY_BASE_URL + 'ajaxSearch';
      /* **************  User Management  *************** */


      /* **************  REPORTS  *************** */
      static META_PROCESSING_STATUS = UrlConstants.WILEY_BASE_URL + 'xmlProcessingReport';
      static META_PROCESSING_DETAILS = UrlConstants.WILEY_BASE_URL + 'xmlIsbnReport';
      static VENDOR_DETAILS = UrlConstants.WILEY_BASE_URL + 'conVendorDetails';
      static TITLE_STAGES = UrlConstants.WILEY_BASE_URL + 'titleStages';
      static TITLE_OVERVIEW = UrlConstants.WILEY_BASE_URL + 'titleOverview';
      static TITLE_DELIVERIES = UrlConstants.WILEY_BASE_URL + 'titleDeliveries';
      static TITLE_DELIVERIES_HISTORY = UrlConstants.WILEY_BASE_URL + 'contentHistory';
      static TITLE_PROCESSING = UrlConstants.WILEY_BASE_URL + 'titleProcessing';
      static TITLE_PROCESSING_HISTORY = UrlConstants.WILEY_BASE_URL + 'exportHistory';


      /* **************  REPORTS  *************** */
      static DOWNLOAD_PRICE_UPDATE = UrlConstants.WILEY_BASE_URL + 'priceUpdate';

      static METADATA_UPLOAD = UrlConstants.WILEY_BASE_URL + 'uploadfile/upload';
      static PRICE_UPDATE = UrlConstants.WILEY_BASE_URL + 'priceUpdate/priceUpload';
      static TESTING_INTERFACE = UrlConstants.WILEY_BASE_URL + 'executeCron';

}