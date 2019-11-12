import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleStagesComponent } from './title-stages.component';

describe('TitleStagesComponent', () => {
  let component: TitleStagesComponent;
  let fixture: ComponentFixture<TitleStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
