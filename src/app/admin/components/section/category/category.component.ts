import { Component, OnInit, ViewChild } from "@angular/core";
import { Apollo, QueryRef, Mutation } from "apollo-angular";
import gql from "graphql-tag";
import { Category } from "src/app/Models/Adm/category";
import { ActivatedRoute, Router } from "@angular/router";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-angular-link-http";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
// const categoryQuery = gql`
// query category($categoryId: String){
//     category(id: $categoryId){
//         _id
//         name
//         specification
//         status
//         createdDate
//         updatedDate
//     }
// }`;
@Component({
    selector: "app-adm-category-component",
    templateUrl: "./category.component.html"
})
export class AdmCategoryComponent implements OnInit {
    // *********** //
    displayedColumns: string[] = ["_id", "name", "status", "updatedDate", "createdDate"];
    data: Category[] = [];
    dataSource;
    resp: any = {};
    isLoadingResults = true;
    // *********** //

    constructor(private apollo: Apollo, private httpLink: HttpLink, private router: Router, private route: ActivatedRoute) {

    }

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    ngOnInit() {
        // Get all categories
        this.apollo.query({
            query: gql`{ getListCategories { _id, name, status, updatedDate, createdDate} }`
        }).subscribe(res => {
            this.resp = res;
            console.log("resp.data");
            console.log(this.resp.data);
            this.data = this.resp.data.categories;
            this.dataSource = new MatTableDataSource(this.resp.data.getListCategories);
            this.dataSource.sort = this.sort;
            this.isLoadingResults = false;
        });
    }
}
