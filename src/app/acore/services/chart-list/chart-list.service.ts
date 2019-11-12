import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

interface ChartDataI {
      graphList: Array<any>;
      theme: 'default' | 'dark' | 'light';
}

@Injectable()

export class ChartListService {

      communicate: Subject<ChartDataI> = new Subject();


      constructor() {

      }

      sendData(data: ChartDataI) {
            this.communicate.next(data);
      }

}
