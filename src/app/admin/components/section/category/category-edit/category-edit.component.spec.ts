import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCategoryEditComponent } from './category-edit.component';

describe('AdmCategoryEditComponent', () => {
  let component: AdmCategoryEditComponent;
  let fixture: ComponentFixture<AdmCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
