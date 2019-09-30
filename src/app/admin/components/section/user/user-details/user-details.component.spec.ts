import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmUserDetailsComponent } from './user-details.component';

describe('AdmUserDetailsComponent', () => {
  let component: AdmUserDetailsComponent;
  let fixture: ComponentFixture<AdmUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
