import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmUserComponent } from './usercomponent';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdmUserComponent', () => {
    let component: AdmUserComponent;
    let fixture: ComponentFixture<AdmUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdmUserComponent],
            schemas: [
                NO_ERRORS_SCHEMA
            ],
            providers: [Apollo],
            imports: [
                RouterTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdmUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
