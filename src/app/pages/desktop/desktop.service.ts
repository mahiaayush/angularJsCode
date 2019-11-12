import { Injectable } from '@angular/core';
import { BaseService } from '../../acore/base';
import { HttpService } from '../../acore/services';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { SessionExpService } from '../../acore/guards';

@Injectable()

export class DesktopService extends BaseService {

      tabLinks = new Subject();
      tabLiksToToMenu = new Subject();

      constructor(
            protected http: HttpService,
            protected router: Router,
            protected sessionExpService: SessionExpService
      ) {
            super(http, router, sessionExpService);
      }

      sendTabLinks(data) {
            this.tabLinks.next(data);
      }

      sendTabLinkToTopMenu(data) {
            this.tabLiksToToMenu.next(data);
      }

}
