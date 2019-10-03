import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Apollo } from "apollo-angular";
import { AdmInterfaceSpecificationServices } from "src/app/services/admin/interfaceSpecification/adm-interface-specification.service";
import * as Queries from "src/app/services/admin/interfaceSpecification/adm-interface-specification-queries";
import { MatTableDataSource } from "@angular/material";
import { Subscription, Observable } from "rxjs";

@Component({
    selector: "app-adm-interface-spec-details-component",
    templateUrl: "./interface-spec-details.component.html"
})
export class AdmInterfaceSpecDetailsComponent implements OnInit, OnDestroy {
    private obs;
    private querySubscription: Subscription;
    isLoadingResults = false;
    detailsObject: any;
    services: AdmInterfaceSpecificationServices;
    displayedColumns: string[] = ["Name", "Type"];
    dataSource: any;

    constructor(private apollo: Apollo, private router: Router, private route: ActivatedRoute) {
        this.detailsObject = new Object();
    }

    ngOnInit() {
        console.log("ngOnInit");
        this.services = new AdmInterfaceSpecificationServices(this.apollo, this.router);
        this.getDetails().then(() => {
            this.dataSource = new MatTableDataSource(this.detailsObject.specifications);
        });
    }

    async getDetails() {
        this.isLoadingResults = true;
        await this.services.getDetails(this.route.snapshot.params._id).then((resp: any) => {
            console.log("got resp");
            console.log(resp);
            if (resp.ok) {
                this.detailsObject = resp.data;
            }
        });
        this.isLoadingResults = false;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngOnDestroy(): void {
        console.log("interface-spec-details ngOnDestroy()");
    }
}
