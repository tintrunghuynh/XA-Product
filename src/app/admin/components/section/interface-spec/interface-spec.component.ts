import { Component, OnInit, ViewChild } from "@angular/core";
import { Apollo, QueryRef, Mutation } from "apollo-angular";
import gql from "graphql-tag";
import { InterfaceSpecification } from "src/app/Models/Adm/interface-spec";
import { ActivatedRoute, Router } from "@angular/router";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-angular-link-http";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
@Component({
    selector: "app-adm-interface-spec-component",
    templateUrl: "./interface-spec.component.html"
})
export class AdmInterfaceSpecComponent implements OnInit {
    // *********** //
    displayedColumns: string[] = ["DE", "_id", "name", "status", "updatedDate", "createdDate"];
    data: InterfaceSpecification[] = [];
    dataSource;
    resp: any = {};
    isLoadingResults = true;
    // *********** //

    constructor(private apollo: Apollo) {

    }

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    ngOnInit() {
        // Get all interface-spec
        this.apollo.query({
            query: gql`{ getListInterfaceSpecifications { _id, name, status, updatedDate, createdDate} }`
        }).subscribe(res => {
            this.resp = res;
            this.data = this.resp.data.getListInterfaceSpecifications;
            this.dataSource = new MatTableDataSource(this.resp.data.getListInterfaceSpecifications);
            this.dataSource.sort = this.sort;
            this.isLoadingResults = false;
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
