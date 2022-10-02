/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Component, Input, OnChanges, Self, SimpleChanges } from "@angular/core";
import { ControlValueAccessor, FormControlName } from "@angular/forms";

@Component({
    selector: "app-abstract-input",
    template: "",
    styles: [],
})
export abstract class AbstractInputComponent implements ControlValueAccessor, OnChanges {
    /**
     * ラベル
     */
    @Input() label = "";

    /**
     * プレースホルダー
     */
    @Input() placeholder!: string;

    constructor(@Self() public controlDir: FormControlName) {
        controlDir.valueAccessor = this;
    }

    writeValue(_: any) {}

    registerOnChange(_: any) {}

    registerOnTouched(_: any) {}

    setDisabledState(_: boolean) {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes["label"] !== undefined) {
            this.placeholder = this.label;
        }
    }
}
