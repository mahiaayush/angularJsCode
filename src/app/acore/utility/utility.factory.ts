import { AgGridUtilService } from './ag-grid';
import { UtilityService } from './utility.service';

export function utilityServiceFactory(ag: AgGridUtilService) {
      return new UtilityService(ag);
}

