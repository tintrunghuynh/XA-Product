import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmInterfaceSpecDetailsComponent } from './interface-spec-details.component';

describe('AdmInterfaceSpecDetailsComponent', () => {
  let component: AdmInterfaceSpecDetailsComponent;
  let fixture: ComponentFixture<AdmInterfaceSpecDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmInterfaceSpecDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmInterfaceSpecDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
