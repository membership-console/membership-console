import { Component, Input } from "@angular/core";

@Component({
    selector: "app-flat-button",
    templateUrl: "./flat-button.component.html",
    styleUrls: ["./flat-button.component.scss"],
})
export class FlatButtonComponent {
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
    @Input() color: "primary" | "accent" | "warn" = "primary";
}
