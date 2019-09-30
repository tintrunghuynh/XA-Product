import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComponent } from './client-component.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ClientComponent', () => {
    let component: ClientComponent;
    let fixture: ComponentFixture<ClientComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClientComponent],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
