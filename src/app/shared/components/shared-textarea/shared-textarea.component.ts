import { Component, Input, OnInit } from "@angular/core";
import { FormControlName } from "@angular/forms";

import { AbstractInputComponent } from "@shared/components/abstract-input/abstract-input.component";

@Component({
    selector: "app-shared-textarea",
    templateUrl: "./shared-textarea.component.html",
    styleUrls: ["./shared-textarea.component.scss"],
})
export class SharedTextareaComponent extends AbstractInputComponent implements OnInit {
    /**
     * 列数
     */
    @Input() rows = 4;

    /**
     * サイズを自動変更するか
     */
    @Input() autosize = false;
    @Input() hint!: string;
    @Input() appearance: "legacy" | "standard" | "fill" | "outline" = "outline";

    constructor(controlDir: FormControlName) {
        super(controlDir);
    }

    ngOnInit(): void {
        if (!this.placeholder) {
            this.placeholder = this.label;
        }
    }
}
