import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmUserCreateComponent } from './user-create.component';

describe('AdmUserCreateComponent', () => {
  let component: AdmUserCreateComponent;
  let fixture: ComponentFixture<AdmUserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmUserCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
