import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLinksComponent } from './tab-links.component';

describe('TabLinksComponent', () => {
  let component: TabLinksComponent;
  let fixture: ComponentFixture<TabLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
