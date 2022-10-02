import { Component, Input } from "@angular/core";

import { Status } from "@shared/enums/status";

@Component({
    selector: "app-status-indicator",
    templateUrl: "./status-indicator.component.html",
    styleUrls: ["./status-indicator.component.scss"],
})
export class StatusIndicatorComponent {
    /**
     * ステータステキスト
     */
    @Input() label = "";

    /**
     * ステータス
     */
    @Input() status: Status = Status.NORMAL;

    constructor() {}
}
