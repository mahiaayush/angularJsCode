import {
  Component, OnInit, Input,
  Output, EventEmitter, OnChanges,
  ViewChildren,
  SimpleChanges
} from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @ViewChildren('me') liEle: any;


  @Input() totalPages: number = null;
  @Input() maxPagesSize: number = null;
  @Output() pageChanged: EventEmitter<number | any> = new EventEmitter();
  @Input() newSetup: Subject<any> = new Subject();
  @Input() totalEntries: number = null;
  @Input() pageSize: number = null;

  showingStart = 1;
  showingEnd = 10;

  enableNext = true;
  enablePre = true;

  defaultMaxPageSize = 5;

  pagesArray: Array<number> = [];
  lastSelectedPageEle: any = null;
  lastSelectedPage = 0;

  changeFlag = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    //   console.log(changes);
  }

  ngOnInit() {
    this.newSetup.subscribe((num) => {
      this.totalPages = num;
      this.generatePages();
    });
  }

  generatePages() {


    this.maxPagesSize = this.maxPagesSize || this.defaultMaxPageSize;
    const pages = this.maxPagesSize < this.totalPages ? this.maxPagesSize : this.totalPages;

    this.pagesArray = [];
    for (let i = 0; i < pages || 0; i++) {
      this.pagesArray.push(i + 1);
    }
    if (this.totalPages) {
      setTimeout(() => {
        this.highLightElement(1);
      }, 100);
    }

  }


  highLightElement(pageNum: string | number) {
    this.liEle._results.forEach(element => {
      element.nativeElement.classList.remove('active');
    });

    pageNum = this.generateNewPageNumbers(pageNum);
    this.setShowingEntries(pageNum);
    const selectedPageEle = this.findElement(<number>pageNum);

    setTimeout(() => {
      if (this.liEle._results[selectedPageEle]) {
        this.liEle._results[selectedPageEle].nativeElement.classList.add('active');
      }

    }, 100);


    this.pageChanged.emit(pageNum);
  }

  onPageClick(pageNum: string | number, ele) {
    this.highLightElement(pageNum);
  }

  setShowingEntries(pageNum: number | any) {

    if ((typeof pageNum === 'number') && (typeof this.pageSize === 'number')) {
      this.showingStart = ((pageNum - 1) * this.pageSize) + 1;
      this.showingEnd = ((pageNum) * this.pageSize);
      if (this.showingEnd > this.totalEntries) {
        this.showingEnd = this.totalEntries;
        this.enableNext = true;
      } else {
        this.enableNext = false;
      }
      if (this.showingStart === 1) {
        this.enablePre = true;
      } else {
        this.enablePre = false;
      }


    }
  }

  findElement(pageNum: number) {
    let retValue = null;
    this.pagesArray.forEach((element, idx) => {
      if (element === pageNum) {
        retValue = idx;
      }
    });

    return retValue;
  }

  generateNewPageNumbers(number) {

    this.changeFlag = 0;
    switch (number) {
      case 'first': number = 1;
        break;
      case 'last': number = this.totalPages;
        break;

      case 'next': number = this.lastSelectedPage === this.totalPages ? this.lastSelectedPage : this.lastSelectedPage + 1;
        this.changeFlag = 1;
        break;

      case 'prev': number = this.lastSelectedPage === 1 ? this.lastSelectedPage : this.lastSelectedPage - 1;
        break;
    }

    this.lastSelectedPage = number;

    if (this.pagesArray[0] > number) {

      if (this.pagesArray[0] !== 1) {
        this.pagesArray = this.pagesArray.map((num) => {
          return num - 1;
        });
      }




    } else if (number > this.pagesArray[this.pagesArray.length - 1]) {
      this.pagesArray = this.pagesArray.map((num) => {
        return num + 1;
      });
    }

    if (number === 1) {
      this.pagesArray = this.pagesArray.map((num, index) => {
        return index + 1;
      });
    }



    if (number === this.totalPages) {
      let t = this.totalPages;
      this.pagesArray = this.pagesArray.map((num, index) => {

        return t--;
      });

      this.pagesArray = this.pagesArray.reverse();

    }




    return number;

  }


}
