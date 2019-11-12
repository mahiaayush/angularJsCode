import {
  Component, OnInit, ViewChildren,
  AfterViewInit, Input, OnChanges
} from '@angular/core';
import { Router } from '@angular/router';

import { ConstantService, LinkI, ProjectService } from '../../../services';

@Component({
  selector: 'app-tab-links',
  templateUrl: './tab-links.component.html',
  styleUrls: ['./tab-links.component.css']
})
export class TabLinksComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChildren('tabNavLinks') tabNavLinks: any;
  @Input() myNavData: any = {};
  @Input() activeLink: LinkI;

  @Input() hideTab = false;

  activeIndex: any;

  constructor(
    private router: Router,
    public constantService: ConstantService,
    private breadCrumnService: ProjectService
  ) {
    this.myNavData = constantService.routerNav.REPORT;
  }

  ngOnChanges() {
    this.activateLabelLink();
  }

  ngOnInit() {
  }


  activateLabelLink() {

    this.myNavData.links.find((item, i) => {
      if (item.label === this.activeLink.label) {
        this.activeIndex = i;
        return true;
      }
    });

    // this.breadCrumnService.sendBreadCurmData({
    //   activeLink: this.activeLink,
    //   navData: this.myNavData,
    //   hideTab: this.hideTab
    // });
  }

  ngAfterViewInit() {
    this.setClassActiveToNavLinks(this.activeIndex || 0);
  }



  myNavFunc(link: Array<string>, linkIndex: number, linkLabel: string, linkData: any) {
    this.router.navigate(link);
    this.setClassActiveToNavLinks(linkIndex);
  }

  setClassActiveToNavLinks(index: number = 0) {
    setTimeout(() => {
      this.tabNavLinks._results.forEach(element => {
        element.nativeElement.classList.remove('active');
      });
      if (this.tabNavLinks._results[index]) {
        this.tabNavLinks._results[index].nativeElement.classList.add('active');
      }
    }, 50);
  }


}
