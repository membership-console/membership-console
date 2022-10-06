import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormArrayName, UntypedFormBuilder, UntypedFormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Observable, of } from "rxjs";

import { AbstractArrayInputComponent } from "@shared/components/abstract-array-input/abstract-array-input.component";
import { SelectOption } from "@shared/models/select-option";

@UntilDestroy()
@Component({
    selector: "app-shared-autocomplete-chip-input",
    templateUrl: "./shared-autocomplete-chip-input.component.html",
    styleUrls: ["./shared-autocomplete-chip-input.component.scss"],
})
export class SharedAutocompleteChipInputComponent
    extends AbstractArrayInputComponent
    implements OnInit
{
    @ViewChild("input") input!: ElementRef<HTMLInputElement>;

    /**
     * 選択肢リスト
     */
    @Input() options: SelectOption[] = [];

    /**
     * プレースホルダー
     */
    @Input() placeholder!: string;

    /**
     * ヒント
     */
    @Input() hint!: string;

    /**
     * 外観
     */
    @Input() appearance: "legacy" | "standard" | "fill" | "outline" = "outline";

    /**
     * 入力値をchipとして作成可能か
     */
    @Input() creatable = false;

    /**
     * 入力値を分割するキーコード
     */
    separatorKeysCodes: number[] = [ENTER, COMMA];

    /**
     * 選択された選択肢リスト
     */
    selectedOptions: string[] = [];

    /**
     * フィルターされた選択肢リスト
     */
    filteredOptions: Observable<string[]> = of([]);

    /**
     * フォーム
     */
    form: UntypedFormControl = new UntypedFormControl();

    constructor(controlDir: FormArrayName, private formBuilder: UntypedFormBuilder) {
        super(controlDir);
    }

    ngOnInit(): void {
        if (!this.placeholder) {
            this.placeholder = this.label;
        }

        this.controlDir.control.value.map((value: string) => {
            if (value === "") {
                return;
            }

            const option = this.findOptionByValue(value);
            if (option) {
                this.selectedOptions.push(option.label);
            } else if (this.creatable) {
                this.selectedOptions.push(value);
            }
        });
        this.setFilteredOptions();

        this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
            if (typeof value === "string") {
                this.filteredOptions = of(
                    this.options
                        .filter(
                            (option) =>
                                option.label.toLowerCase().includes(value.toLowerCase()) &&
                                !this.selectedOptions.includes(option.label)
                        )
                        .map((option) => option.label)
                );
            }
        });
    }

    /**
     * 入力値を追加
     * @param event
     */
    add(event: MatChipInputEvent) {
        if (!this.creatable) {
            return;
        }

        const value = (event.value || "").trim();
        if (value) {
            this.selectedOptions.push(value);
            if (this.controlDir.control.controls[0]?.value === "") {
                this.controlDir.control.controls[0]?.setValue(value);
            } else {
                this.controlDir.control.push(this.formBuilder.control(value));
            }
        }

        event.chipInput?.clear();
        this.form.setValue(null);
    }

    /**
     * 選択肢を削除
     *
     * @param option 選択肢
     */
    remove(option: string) {
        const index = this.selectedOptions.indexOf(option);
        if (index >= 0) {
            this.controlDir.control.removeAt(index);
            this.selectedOptions.splice(index, 1);
            this.setFilteredOptions();
        }
    }

    /**
     * 選択肢を選択
     *
     * @param event
     */
    selected(event: MatAutocompleteSelectedEvent): void {
        const value = event.option.viewValue;
        if (value) {
            this.selectedOptions.push(value);
            this.input.nativeElement.value = "";
            this.form.setValue(null);

            const option = this.findOptionByLabel(value);
            if (this.controlDir.control.controls[0]?.value === "") {
                this.controlDir.control.controls[0].setValue(option?.value);
            } else {
                this.controlDir.control.push(this.formBuilder.control(option?.value));
            }

            this.setFilteredOptions();
        }
    }

    /**
     * フィルターされた選択肢リストをセット
     */
    setFilteredOptions() {
        this.filteredOptions = of(
            this.options
                .filter((option) => !this.selectedOptions.includes(option.label))
                .map((option) => option.label)
        );
    }

    /**
     * ラベルから選択肢を検索
     *
     * @param label ラベル
     */
    findOptionByLabel(label: string): SelectOption | undefined {
        return this.options.find((option) => option.label === label);
    }

    /**
     * 値から選択肢を検索
     *
     * @param value 値
     */
    findOptionByValue(value: unknown): SelectOption | undefined {
        return this.options.find((option) => option.value === value);
    }
}
