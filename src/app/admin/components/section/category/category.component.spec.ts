import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCategoryComponent } from './category.component';

describe('AdmCategoryComponent', () => {
  let component: AdmCategoryComponent;
  let fixture: ComponentFixture<AdmCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
