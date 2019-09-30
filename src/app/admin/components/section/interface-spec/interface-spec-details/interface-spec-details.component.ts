import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { AdmInterfaceSpecificationServices } from 'src/app/services/admin/interfaceSpecification/adm-interface-specification.service';
import { GeneralValidationService } from 'src/app/services/validator/general-validation.service';
import { FieldTypes } from 'src/app/Models/Enum/interfaceSpecificationFields';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-adm-interface-spec-details-component',
    templateUrl: './interface-spec-details.component.html'
})
export class AdmInterfaceSpecDetailsComponent implements OnInit {
    isLoadingResults = false;
    detailsObject: any;
    services: AdmInterfaceSpecificationServices;
    displayedColumns: string[] = ['Name', 'Type'];
    dataSource: any;

    constructor(private apollo: Apollo, private router: Router, private route: ActivatedRoute) {
        this.detailsObject = new Object();
    }

    async ngOnInit() {
        console.log('ngOnInit');
        this.services = new AdmInterfaceSpecificationServices(this.apollo, this.router);
        await this.getDetails();
        this.dataSource = new MatTableDataSource(this.detailsObject.specifications);
    }

    async getDetails() {
        this.isLoadingResults = true;
        console.log('getdetails()');
        await this.services.getDetails(this.route.snapshot.params._id).then((resp: any) => {
            console.log('got resp');
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
}
