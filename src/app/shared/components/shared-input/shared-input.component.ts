import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormControlName } from "@angular/forms";

import { AbstractInputComponent } from "@shared/components/abstract-input/abstract-input.component";

@Component({
    selector: "app-shared-input",
    templateUrl: "./shared-input.component.html",
    styleUrls: ["./shared-input.component.scss"],
})
export class SharedInputComponent extends AbstractInputComponent implements OnInit, OnChanges {
    /**
     * アイコンクリックEventEmitter
     */
    @Output() iconEventEmitter: EventEmitter<void> = new EventEmitter<void>();

    /**
     * 入力タイプ
     */
    @Input() type: "text" | "number" | "password" | "date" = "text";

    /**
     * ヒント
     */
    @Input() hint!: string;

    /**
     * 外観
     */
    @Input() appearance: "legacy" | "standard" | "fill" | "outline" = "outline";

    /**
     * アイコン
     */
    @Input() icon: string | undefined;

    /**
     * プレフィックスに表示するアイコン
     */
    @Input() prefixIcon: string | undefined;

    /**
     * テキストを隠すかどうか
     */
    hide = true;

    constructor(controlDir: FormControlName) {
        super(controlDir);
    }

    ngOnInit(): void {
        if (!this.placeholder) {
            this.placeholder = this.label;
        }
    }

    /**
     * 入力タイプを取得
     */
    getInputType(): string {
        if (this.type === "date") {
            return "text";
        } else if (this.type !== "password") {
            return this.type;
        } else {
            return this.hide ? "password" : "text";
        }
    }

    /**
     * アイコンをクリックされた
     */
    onClickIcon() {
        this.iconEventEmitter.emit();
    }
}
