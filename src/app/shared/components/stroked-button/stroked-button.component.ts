import { Component, Input } from "@angular/core";

@Component({
    selector: "app-stroked-button",
    templateUrl: "./stroked-button.component.html",
    styleUrls: ["./stroked-button.component.scss"],
})
export class StrokedButtonComponent {
    /**
     * アイコン
     */
    @Input() icon: string | undefined = undefined;

    /**
     * ラベル
     */
    @Input() label = "";

    /**
     * ボタン幅
     */
    @Input() minWidth = "110px";

    /**
     * ボタンタイプ
     */
    @Input() type: "submit" | "button" | "reset" = "button";

    /**
     * ボタンの有効性
     */
    @Input() disabled = false;

    /**
     * ボタン色
     */
    @Input() color: "primary" | "accent" | "warn" | null = null;
}
