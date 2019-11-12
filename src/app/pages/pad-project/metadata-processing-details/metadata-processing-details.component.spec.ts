import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataProcessingDetailsComponent } from './metadata-processing-details.component';

describe('MetadataProcessingDetailsComponent', () => {
  let component: MetadataProcessingDetailsComponent;
  let fixture: ComponentFixture<MetadataProcessingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataProcessingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataProcessingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
