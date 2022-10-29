import { Component } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { ClientAPIService } from "@iam/api/services";
import { ClientCredentialsDialogComponent } from "@iam/components/clients/client-credentials-dialog/client-credentials-dialog.component";

import { AlertService } from "@shared/services/alert.service";

@UntilDestroy()
@Component({
    selector: "app-client-new",
    templateUrl: "./client-new.component.html",
    styleUrls: ["./client-new.component.scss"],
})
export class ClientNewComponent {
    constructor(
        private matDialog: MatDialog,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private clientAPIService: ClientAPIService,
        private alertService: AlertService
    ) {}

    /**
     * クライアント作成のEventEmitter
     *
     * @param formGroup
     */
    submitEventEmitter(formGroup: UntypedFormGroup) {
        this.clientAPIService
            .createClient({ body: formGroup.value })
            .pipe(untilDestroyed(this))
            .subscribe((response) => {
                this.alertService.success("クライアントを新規作成しました。");
                this.router
                    .navigate(["../"], {
                        queryParams: {},
                        queryParamsHandling: "merge",
                        relativeTo: this.activatedRoute,
                    })
                    .then(() => {
                        this.matDialog.open(ClientCredentialsDialogComponent, {
                            data: response,
                        });
                    });
            });
    }

    /**
     * 作成キャンセルのEventEmitter
     */
    cancelEventEmitter() {
        this.router.navigate(["../"], {
            queryParams: {},
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute,
        });
    }
}
