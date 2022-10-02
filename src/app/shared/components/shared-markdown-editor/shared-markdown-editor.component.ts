import { Component, OnInit } from "@angular/core";
import { FormControlName } from "@angular/forms";

import { AbstractInputComponent } from "@shared/components/abstract-input/abstract-input.component";

@Component({
    selector: "app-shared-markdown-editor",
    templateUrl: "./shared-markdown-editor.component.html",
    styleUrls: ["./shared-markdown-editor.component.scss"],
})
export class SharedMarkdownEditorComponent extends AbstractInputComponent implements OnInit {
    constructor(controlDir: FormControlName) {
        super(controlDir);
    }

    ngOnInit(): void {
        if (!this.placeholder) {
            this.placeholder = this.label;
        }
    }
}
