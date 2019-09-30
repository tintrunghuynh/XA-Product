import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdmNavComponent } from "./nav.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("AdmNavComponent", () => {
    let component: AdmNavComponent;
    let fixture: ComponentFixture<AdmNavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdmNavComponent],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdmNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
