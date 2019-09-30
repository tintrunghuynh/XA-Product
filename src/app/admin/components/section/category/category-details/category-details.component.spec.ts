import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCategoryDetailsComponent } from './category-details.component';

describe('AdmCategoryDetailsComponent', () => {
  let component: AdmCategoryDetailsComponent;
  let fixture: ComponentFixture<AdmCategoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCategoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
