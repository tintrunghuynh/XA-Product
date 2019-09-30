import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register-component.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
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
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
