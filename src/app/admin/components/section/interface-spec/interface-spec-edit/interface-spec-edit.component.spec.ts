import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmInterfaceSpecEditComponent } from './interface-spec-edit.component';

describe('AdmInterfaceSpecEditComponent', () => {
  let component: AdmInterfaceSpecEditComponent;
  let fixture: ComponentFixture<AdmInterfaceSpecEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmInterfaceSpecEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmInterfaceSpecEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
