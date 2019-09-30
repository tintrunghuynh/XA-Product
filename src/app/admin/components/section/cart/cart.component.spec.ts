import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCartComponent } from './cart.component';

describe('AdmCartComponent', () => {
  let component: AdmCartComponent;
  let fixture: ComponentFixture<AdmCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
