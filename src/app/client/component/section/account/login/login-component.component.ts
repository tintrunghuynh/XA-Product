import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-client-login-component',
    templateUrl: './login-component.component.html',
})
export class LoginComponent implements OnInit {

    credentials = {
        email: '',
        password: ''
    };

    constructor() { }

    ngOnInit() {
    }

    login() {

    }
}
