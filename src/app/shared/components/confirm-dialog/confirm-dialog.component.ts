import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

type DialogData = {
    title: string;
    message: string;
};

@Component({
    selector: "app-confirm-dialog",
    templateUrl: "./confirm-dialog.component.html",
    styleUrls: ["./confirm-dialog.component.scss"],
})
export class ConfirmDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private matDialogRef: MatDialogRef<ConfirmDialogComponent>
    ) {}

    /**
     * 確認ダイアログを表示
     */
    confirm(result: boolean): void {
        this.matDialogRef.close(result);
    }
}
