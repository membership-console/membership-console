/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Component, Input, Self } from "@angular/core";
import { ControlValueAccessor, FormArrayName } from "@angular/forms";

@Component({
    selector: "app-abstract-array-input",
    template: "",
    styles: [],
})
export class AbstractArrayInputComponent implements ControlValueAccessor {
    @Input() label = "";

    constructor(@Self() public controlDir: FormArrayName) {}

    writeValue(_: any) {}

    registerOnChange(_: any) {}

    registerOnTouched(_: any) {}

    setDisabledState(_: boolean) {}
}
