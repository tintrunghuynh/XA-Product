import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile-component.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Apollo } from 'apollo-angular';

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileComponent],
            schemas: [
                NO_ERRORS_SCHEMA
            ],
            providers: [Apollo]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
