import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProductCreateComponent } from './product-create.component';

describe('AdmProductCreateComponent', () => {
  let component: AdmProductCreateComponent;
  let fixture: ComponentFixture<AdmProductCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmProductCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
