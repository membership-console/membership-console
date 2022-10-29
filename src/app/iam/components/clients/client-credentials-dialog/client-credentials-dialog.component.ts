import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { ClientCredentialsResponse } from "@iam/api/models";

import { DownloadBlobService } from "@shared/services/download-blob.service";

@Component({
    selector: "app-client-credentials-dialog",
    templateUrl: "./client-credentials-dialog.component.html",
    styleUrls: ["./client-credentials-dialog.component.scss"],
})
export class ClientCredentialsDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: ClientCredentialsResponse,
        private matDialogRef: MatDialogRef<ClientCredentialsDialogComponent>,
        private downloadBlobService: DownloadBlobService
    ) {}

    /**
     * 認証情報をダウンロード
     */
    downloadCredentials(): void {
        const credentials = {
            client_id: this.data.clientId,
            client_secret: this.data.clientSecret,
        };
        this.downloadBlobService.download(
            new Blob([JSON.stringify(credentials, null, 2)]),
            "credentials.json"
        );
        this.close();
    }

    /**
     * ダイアログを閉じる
     */
    close(): void {
        this.matDialogRef.close();
    }
}
