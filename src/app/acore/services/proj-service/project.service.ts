import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class ProjectService {

      sendBread = new Subject<any>();

      sendBreadCurmData(data: any) {
            this.sendBread.next(data);
      }

      constructor() {

      }
}
