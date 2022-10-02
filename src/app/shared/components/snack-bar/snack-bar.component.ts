import { Component, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from "@angular/material/snack-bar";

import { Alert } from "@shared/models/alert";

@Component({
    selector: "app-snack-bar",
    templateUrl: "./snack-bar.component.html",
    styleUrls: ["./snack-bar.component.scss"],
})
export class SnackBarComponent {
    constructor(
        public snackBarRef: MatSnackBarRef<SnackBarComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: Alert
    ) {}

    /**
     * スナックバーを閉じる
     */
    dismiss() {
        this.snackBarRef.dismiss();
    }
}
