import { Injectable } from "@angular/core";
import { FormControl, Validators, FormArrayName, FormArray, AbstractControl, ValidatorFn, FormGroup } from "@angular/forms";

@Injectable({
    providedIn: "root"
})
export class GeneralValidationService {
    constructor() { }
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config = {
            required: `Required`,
            duplicate: `Already Exists`,
            invalid: `Invalid Format`,
            invalidEmailFormat: `Invalid Email Format`,
            minLength: `Minimum Length Is ${validatorValue}`,
            maxLength: `Maximum Length Is ${validatorValue}`,
            passwordConfirm: `Password Confirm Does Not Match`,
        };
        return config[validatorName];
    }

    static nameValidator(control: FormControl) {
        // MIN LENGTH
        if (control.value.length < 3) {
            return { minLength: 3 };
        }
        // MAX LENGTH
        if (control.value.length > 200) {
            return { maxLength: 200 };
        }
        return {};
    }

    static specificationsValidator(control: FormControl) {

        return {};
    }

    static descriptionsValidator(control: FormControl) {
        // MIN LENGTH
        if (control.value.length < 10) {
            return { minLength: true };
        }
        // MAX LENGTH
        if (control.value.length > 500) {
            return { maxLength: true };
        }
        return {};
    }

    static statusValidator(control: FormControl) {

        return {};
    }

    static emailValidator(control: FormControl) {
        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return { invalidEmailFormat: true };
        }
        return {};
    }
}
