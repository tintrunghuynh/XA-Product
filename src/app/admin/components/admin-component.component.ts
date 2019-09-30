import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-admin-component",
    templateUrl: "./admin-component.component.html",
})
export class AdminComponent implements OnInit {
    title = "Admin Panel";
    constructor() { }

    ngOnInit() {
    }

}
