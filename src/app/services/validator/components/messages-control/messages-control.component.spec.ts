import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MessagesControlComponent } from "./messages-control.component";

describe("MessagesControlComponent", () => {
  let component: MessagesControlComponent;
  let fixture: ComponentFixture<MessagesControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
