import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProductComponent } from './product.component';

describe('AdmProductComponent', () => {
  let component: AdmProductComponent;
  let fixture: ComponentFixture<AdmProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
