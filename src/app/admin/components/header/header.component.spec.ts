import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdmHeaderComponent } from "./header.component";

describe("AppAdmHeaderComponent", () => {
  let component: AdmHeaderComponent;
  let fixture: ComponentFixture<AdmHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
