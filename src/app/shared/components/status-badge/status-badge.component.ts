import { Component, Input } from "@angular/core";

@Component({
    selector: "app-status-badge",
    templateUrl: "./status-badge.component.html",
    styleUrls: ["./status-badge.component.scss"],
})
export class StatusBadgeComponent {
    /**
     * ラベル
     */
    @Input() label = "";

    /**
     * アイコン
     */
    @Input() icon: string | null = null;

    /**
     * ステータス
     */
    @Input() status = false;

    constructor() {}
}
