import { Overlay } from "@angular/cdk/overlay";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";

import { ConfirmDialogComponent } from "@shared/components/confirm-dialog/confirm-dialog.component";
import { SnackBarComponent } from "@shared/components/snack-bar/snack-bar.component";

@Injectable({
    providedIn: "root",
})
export class AlertService {
    constructor(
        private matDialog: MatDialog,
        private snackBar: MatSnackBar,
        private overlay: Overlay
    ) {}

    /**
     * SUCCESSスナックバーを表示
     *
     * @param message メッセージ
     */
    public success(message: string): void {
        this.snackBar.openFromComponent(SnackBarComponent, {
            duration: 5000,
            data: { message: message, level: "SUCCESS" },
        });
    }

    /**
     * WARNスナックバーを表示
     *
     * @param message メッセージ
     */
    public warn(message: string): void {
        this.snackBar.openFromComponent(SnackBarComponent, {
            duration: 5000,
            data: { message: message, level: "WARN" },
        });
    }

    /**
     * ERRORスナックバーを表示
     *
     * @param message メッセージ
     */
    public error(message: string): void {
        this.snackBar.openFromComponent(SnackBarComponent, {
            duration: 10000,
            data: { message: message, level: "ERROR" },
        });
    }

    /**
     * 確認ダイアログを表示
     *
     * @param title タイトル
     * @param message メッセージ
     */
    confirm(title: string, message: string): Observable<boolean> {
        return this.matDialog
            .open(ConfirmDialogComponent, {
                data: {
                    title: title,
                    message: message,
                },
                scrollStrategy: this.overlay.scrollStrategies.noop(),
            })
            .afterClosed();
    }
}
