import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, NgForm, Validators, FormArray, FormControl, AbstractControl } from "@angular/forms";
import { Apollo } from "apollo-angular";
import { AdmInterfaceSpecificationServices } from "src/app/services/admin/interfaceSpecification/adm-interface-specification.service";
import { GeneralValidationService } from "src/app/services/validator/general-validation.service";
import { FieldTypes, Category, Status } from "src/app/Models/Enum/interfaceSpecificationFields";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Subject } from "rxjs";
@Component({
    selector: "app-adm-interface-spec-create-component",
    templateUrl: "./interface-spec-create.component.html"
})
export class AdmInterfaceSpecCreateComponent implements OnInit, OnDestroy {
    private unsubscribe$ = new Subject<void>();
    FORM: FormGroup;
    services: AdmInterfaceSpecificationServices;
    isLoadingResults = false;
    fieldTypes: any = {};
    categories: any = {};
    status: any = {};
    initForFirst = true; // Init valueChange EventListenner for the very first  Element of Specifications
    errorMSG: any;
    constructor(private apollo: Apollo, private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.services = new AdmInterfaceSpecificationServices(this.apollo, this.router);
        this.fieldTypes = Object.values(FieldTypes).filter(((val) => isNaN(Number(val)))); // Loading Dropdown List Of Specification's Types
        this.categories = Object.values(Category).filter(((val) => isNaN(Number(val)))); // Loading Dropdown List Of Category
        this.status = Object.values(Status).filter(((val) => isNaN(Number(val)))); // Loading Dropdown List Of Status
        this.FORM = this.formBuilder.group({ // Init Interface Specification Form
            name: ["1234297", [
                Validators.required,
                GeneralValidationService.nameValidator]
            ],
            category: ["", Validators.required],
            specifications: this.formBuilder.array([
                this.getFieldList()
            ]),
            descriptions: ["this is description", Validators.required],
            status: ["", Validators.required],
        });
    }

    removeError(control: AbstractControl, error: string) {
        const err = control.errors; // Get Error
        if (err) {
            delete err[error]; // Delete Error
            if (!Object.keys(err).length) { // If No Error Is Left
                control.setErrors(null); // set control errors to null making it VALID
            } else {
                control.setErrors(err); // controls got other errors so set them back
            }
        }
    }

    getFieldList() {
        const formGroup: FormGroup = this.formBuilder.group({
            fieldName: [
                "", [
                    Validators.required,
                    GeneralValidationService.nameValidator
                ]
            ],
            fieldType: ["", Validators.required]
        });
        /**
         *  Loop for checking duplicate fieldName in Field Array
         *  * Checking the `Value Change`
         *  => If more than 1 fieldName.value of a element is equals to `Value Change`, set Duplicate Error to the fieldName of 2nd, 3rd... elements
         *  * Checking the `Old Value`
         *  => If the fieldName.value of a element equals is equals to `Old Value` and it has Duplicate Error, remove the Duplicate Error, not apply to 2nd, 3rd... elements.
         */
        let oldValue: any;
        formGroup.valueChanges.subscribe((valueChange) => { // Occurred If TYPING in a field
            let firstEqualValueChange = true;
            let firstDupOldValue = true;
            const arr = (this.FORM.controls.specifications as FormArray).controls;
            // tslint:disable-next-line: prefer-for-of
            for (let index = 0; index < arr.length; index++) { // Loop for checking duplicate fieldName in Field Array
                const element = arr[index] as FormGroup;
                if (valueChange.fieldName === element.controls.fieldName.value) { // Checking the Value Change
                    if (firstEqualValueChange) {
                        if (element.controls.fieldName.hasError("duplicate")) {
                            this.removeError(element.controls.fieldName, "duplicate");
                        }
                        firstEqualValueChange = false;
                    } else if ((element.controls.fieldName as FormControl).valid) { // If FormControl has another Errors, avoid to set new Error
                        (element.controls.fieldName as FormControl).setErrors({ duplicate: true });
                    }
                }
                if (oldValue && oldValue.fieldName === element.controls.fieldName.value) { // Checking the Old Value
                    if (firstDupOldValue && element.controls.fieldName.hasError("duplicate")) {
                        this.removeError(element.controls.fieldName, "duplicate");
                    }
                    firstDupOldValue = false;
                } // End fieldName EventListenner
            }
            oldValue = valueChange;
        });
        return formGroup;
    }

    getSpecificationArray(): AbstractControl[] {
        return (this.FORM.controls.specifications as FormArray).controls;
    }

    drop(event: CdkDragDrop<FormGroup[]>) {
        if (event.previousIndex === event.currentIndex) { // Drag but Drop at same position
            return;
        }
        const array = (this.FORM.controls.specifications as FormArray);
        moveItemInArray(array.controls, event.previousIndex, event.currentIndex);
        moveItemInArray(array.value, event.previousIndex, event.currentIndex);
        // Reassign Errors Message
        let lowerIdx: number;
        let higherIdx: number;
        let isFW: boolean; // FLAG : the element move backward or forward
        const valueCheck = (array.controls[event.currentIndex] as FormGroup).controls.fieldName.value;
        let firstEqual = true;
        if (event.previousIndex > event.currentIndex) { // Backward
            lowerIdx = event.currentIndex;
            higherIdx = event.previousIndex;
            isFW = false;
        } else if (event.previousIndex < event.currentIndex) { // Forward
            lowerIdx = event.previousIndex;
            higherIdx = event.currentIndex;
            isFW = true;
        }
        console.log("check swap");
        // Drag&Drop copy the DOM (include Duplicate Error Message). So need to Reassign Duplicate Error
        if ((isFW && !(array.controls[event.currentIndex] as FormGroup).controls.fieldName.hasError("duplicate")) // Forward, handle if the dragElement hasn't Duplicate Error. Case: no duplicate into duplicate
            || ((!isFW && (array.controls[event.currentIndex] as FormGroup).controls.fieldName.hasError("duplicate")))) { // Backward, handle if the dragElement has Duplicate Error. Case: duplicate into no duplicate
            if (isFW) {
                console.log("Dropped Forward && lowerElement has duplicate error");
            } else {
                console.log("Dropped Backward && higherElement has duplicate error");
            }
            for (let index = 0; index < higherIdx + 1; index++) {
                const element = array.controls[index] as FormGroup;
                if (element.controls.fieldName.value === valueCheck) {
                    if (firstEqual) {
                        if (element.controls.fieldName.hasError("duplicate")) {
                            this.removeError(element.controls.fieldName, "duplicate");
                        }
                        firstEqual = false;
                    } else if ((element.controls.fieldName as FormControl).valid) { // If FormControl has another Errors, avoid to set new Error
                        (element.controls.fieldName as FormControl).setErrors({ duplicate: true });
                    }
                }
            }
        }
    }

    get checkoutForm() {
        return this.FORM.controls;
    }

    addRow() {
        const control = this.FORM.controls.specifications as FormArray;
        control.push(this.getFieldList());
    }

    removeRow(index: number) {
        const formArray = this.FORM.controls.specifications as FormArray;
        const deleteValue = (formArray.controls[index] as FormGroup).controls;
        formArray.removeAt(index);
        let firstDupOldValue = true;
        for (let indexLoop = 0; indexLoop < formArray.length; indexLoop++) { // Loop for checking duplicate fieldName in Field Array
            const element = formArray.controls[indexLoop] as FormGroup;
            if (deleteValue.fieldName.value === element.controls.fieldName.value) { // Checking the Old Value
                if (firstDupOldValue) {
                    if (element.controls.fieldName.hasError("duplicate")) {
                        this.removeError(element.controls.fieldName, "duplicate");
                    }
                    firstDupOldValue = false;
                }
            }
        }
    }

    async onSubmit(form) {
        const FORM: NgForm = form;
        this.isLoadingResults = true;
        let acceptName = true;
        const nameControl = FORM.form.get("name");

        // *[Server-Side] Check Name Duplicate Or Not
        await this.services.isNameExists(nameControl.value).then((resp: boolean) => {
            console.log("services.isNameExists() resp");
            console.log(resp);
            if (resp === true) { // Exists
                console.log("The Name Is Duplicate");
                nameControl.setErrors({ duplicate: true }); // Set Duplicate Error
                acceptName = false;
            }
        }).catch((error) => {
            console.log("Error");
            console.log(error);
            this.errorMSG = error;
        });
        // Stop Create The Interface If Has Error From The Server
        if (!acceptName) {
            console.log("Reject To Create");
            this.isLoadingResults = false;
            return;
        }
        // Create The Interface
        console.log("CREATING - Sending Request To Server");
        await this.services.create(FORM).then((resp: any) => {
            if (resp.ok) {
                console.log("Created");
                this.router.navigate(["admin/interfaceSpecification/details/", resp.data._id]);
            } else if (!resp.ok) {
                console.log("Error, Canot Create");
                this.errorMSG = resp.errorMessage.message; // Error Message By GrapqhQL Server
            }

        }).catch((error) => {
            console.log(error);
            this.errorMSG = error; // Error From System

        });
        this.isLoadingResults = false;
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
