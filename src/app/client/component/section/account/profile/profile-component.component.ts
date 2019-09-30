import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'app-client-profile-component',
    templateUrl: './profile-component.component.html',
})
export class ProfileComponent implements OnInit {

    constructor(private apollo: Apollo) { }

    ngOnInit() {

    }
}
