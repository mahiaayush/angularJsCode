import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SearchTitleComponent } from './search-title/search-title.component';
import { MetadataUploadComponent } from './metadata-upload/metadata-upload.component';
import { MetadataProcessingStatusComponent } from './metadata-processing-status/metadata-processing-status.component';
import { PriceUpdateComponent } from './price-update/price-update.component';
import { UpdateTitleComponent } from './update-title/update-title.component';
import { MetadataProcessingDetailsComponent } from './metadata-processing-details/metadata-processing-details.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';

export const routes: Routes = [
      {
            path: 'search_title',
            component: SearchTitleComponent
      },
      // {
      //       path: 'history',
      //       component: VendorDetailsComponent
      // },
      {
            path: 'meta_data_upload',
            component: MetadataUploadComponent
      },
      {
            path: 'meta_data_processing',
            component: MetadataProcessingStatusComponent
      },
      {
            path: 'price_update',
            component: PriceUpdateComponent
      },
      {
            path: 'meta_data_processing_details',
            component: MetadataProcessingDetailsComponent
      }

];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
