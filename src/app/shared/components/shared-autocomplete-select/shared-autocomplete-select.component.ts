import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from "@angular/core";
import { FormControlName } from "@angular/forms";
import { Observable, of } from "rxjs";

import { AbstractInputComponent } from "@shared/components/abstract-input/abstract-input.component";
import { SelectOption } from "@shared/models/select-option";

@Component({
    selector: "app-shared-autocomplete-select",
    templateUrl: "./shared-autocomplete-select.component.html",
    styleUrls: ["./shared-autocomplete-select.component.scss"],
})
export class SharedAutocompleteSelectComponent extends AbstractInputComponent implements OnInit {
    @ViewChild("searchInput") searchInput!: ElementRef<HTMLInputElement>;

    /**
     * 変更EventEmitter
     */
    @Output() changeEventEmitter = new EventEmitter<SelectOption>();

    /**
     * 選択肢リスト
     */
    @Input() options: SelectOption[] = [];

    /**
     * ヒント
     */
    @Input() hint!: string;

    /**
     * 外観
     */
    @Input() appearance: "legacy" | "standard" | "fill" | "outline" = "outline";

    /**
     * 不活性かどうか
     */
    @Input() disabled = false;

    filteredOptions: Observable<SelectOption[]> = of([]);

    constructor(controlDir: FormControlName) {
        super(controlDir);
    }

    ngOnInit(): void {
        if (!this.placeholder) {
            this.placeholder = this.label;
        }

        this.filteredOptions = of(this.options);
    }

    /**
     * 選択肢をフィルタリング
     */
    filterOptions() {
        const keyword = this.searchInput.nativeElement.value;
        this.filteredOptions = of(this.options.filter((option) => option.label.includes(keyword)));
    }

    /**
     * 削除ボタンをクリックした
     */
    onClickClear() {
        this.searchInput.nativeElement.value = "";
        this.filteredOptions = of(this.options);
    }

    /**
     * 選択肢を閉じた
     */
    onClose() {
        this.searchInput.nativeElement.value = "";
        this.filteredOptions = of(this.options);
    }

    /**
     * 入力値が変更された
     * @param value 入力値
     */
    onChange(value: string) {
        const option = this.options.find((option) => option.value === value);
        if (option) {
            this.changeEventEmitter.emit(option);
        }
    }
}
