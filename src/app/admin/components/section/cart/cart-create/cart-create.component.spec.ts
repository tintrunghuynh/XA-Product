import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCartCreateComponent } from './cart-create.component';

describe('AdmCartCreateComponent', () => {
  let component: AdmCartCreateComponent;
  let fixture: ComponentFixture<AdmCartCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCartCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCartCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
