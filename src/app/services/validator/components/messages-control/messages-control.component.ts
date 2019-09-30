import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormArray } from "@angular/forms";
import { GeneralValidationService } from "src/app/services/validator/general-validation.service";
@Component({
    selector: "app-messages-control",
    templateUrl: "./messages-control.component.html"
})
export class MessagesControlComponent implements OnInit {
    @Input() control: FormControl;
    constructor() {
    }

    ngOnInit() {
    }

    get errorMessage() {
        // Take errors from fields
        for (const propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName)) {
                return GeneralValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
        return null;
    }
}
