import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCategoryCreateComponent } from './category-create.component';

describe('AdmCategoryCreateComponent', () => {
  let component: AdmCategoryCreateComponent;
  let fixture: ComponentFixture<AdmCategoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCategoryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
