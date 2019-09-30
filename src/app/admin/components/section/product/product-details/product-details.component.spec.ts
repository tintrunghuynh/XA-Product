import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProductDetailsComponent } from './product-details.component';

describe('AdmProductDetailsComponent', () => {
  let component: AdmProductDetailsComponent;
  let fixture: ComponentFixture<AdmProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
