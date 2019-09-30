import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmInterfaceSpecCreateComponent } from './interface-spec-create.component';

describe('AdmInterfaceSpecCreateComponent', () => {
  let component: AdmInterfaceSpecCreateComponent;
  let fixture: ComponentFixture<AdmInterfaceSpecCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmInterfaceSpecCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmInterfaceSpecCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
