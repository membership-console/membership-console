import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControlName } from "@angular/forms";

import { AbstractInputComponent } from "@shared/components/abstract-input/abstract-input.component";
import { SelectOption } from "@shared/models/select-option";

@Component({
    selector: "app-shared-toggle-button",
    templateUrl: "./shared-toggle-button.component.html",
    styleUrls: ["./shared-toggle-button.component.scss"],
})
export class SharedToggleButtonComponent extends AbstractInputComponent implements OnInit {
    /**
     * 変更EventEmitter
     */
    @Output() changeEventEmitter = new EventEmitter<SelectOption>();

    /**
     * ヒント
     */
    @Input() hint!: string;

    /**
     * 選択肢リスト
     */
    @Input() options: SelectOption[] = [];

    /**
     * デフォルトで選択される選択肢
     */
    @Input() defaultOption?: SelectOption;

    /**
     * 複数選択可能かどうか
     */
    @Input() multiple = false;

    constructor(controlDir: FormControlName) {
        super(controlDir);
    }

    ngOnInit(): void {
        if (!this.placeholder) {
            this.placeholder = this.label;
        }

        if (this.defaultOption) {
            this.controlDir.control.setValue(this.defaultOption.value);
        }

        const value = this.controlDir.control.value;
        if (value === undefined || value === null || value === "") {
            this.controlDir.control.setValue(this.options[0].value);
        }
    }

    /**
     * 入力値が変更された
     *
     * @param value 入力値
     */
    onChange(value: string) {
        const option = this.options.find((option) => option.value === value);
        if (option) {
            this.changeEventEmitter.emit(option);
        }
    }
}
