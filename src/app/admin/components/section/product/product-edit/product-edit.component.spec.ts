import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProductEditComponent } from './product-edit.component';

describe('AdmProductEditComponent', () => {
  let component: AdmProductEditComponent;
  let fixture: ComponentFixture<AdmProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmProductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
