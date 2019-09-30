import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmInterfaceSpecComponent } from './interface-spec.component';

describe('AdmInterfaceSpecComponent', () => {
  let component: AdmInterfaceSpecComponent;
  let fixture: ComponentFixture<AdmInterfaceSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmInterfaceSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmInterfaceSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
