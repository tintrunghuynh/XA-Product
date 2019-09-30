import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCartDetailsComponent } from './cart-details.component';

describe('AdmCartDetailsComponent', () => {
  let component: AdmCartDetailsComponent;
  let fixture: ComponentFixture<AdmCartDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCartDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
