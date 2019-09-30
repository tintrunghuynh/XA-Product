import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCartEditComponent } from './cart-edit.component';

describe('AdmCartEditComponent', () => {
  let component: AdmCartEditComponent;
  let fixture: ComponentFixture<AdmCartEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCartEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
