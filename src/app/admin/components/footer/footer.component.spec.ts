import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdmFooterComponent } from "./footer.component";

describe("AdmFooterComponent", () => {
  let component: AdmFooterComponent;
  let fixture: ComponentFixture<AdmFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
