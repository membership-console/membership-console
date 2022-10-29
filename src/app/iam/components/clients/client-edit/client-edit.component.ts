import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { ClientResponse } from "@iam/api/models";
import { ClientAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";

@UntilDestroy()
@Component({
    selector: "app-client-edit",
    templateUrl: "./client-edit.component.html",
    styleUrls: ["./client-edit.component.scss"],
})
export class ClientEditComponent implements OnInit {
    /**
     * ID
     */
    id!: string;

    /**
     * クライアント
     */
    client!: ClientResponse;

    constructor(
        private matDialog: MatDialog,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private clientAPIService: ClientAPIService,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        // パスパラメータからユーザグループIDを取得
        this.id = this.activatedRoute.snapshot.paramMap.get("id") as string;

        // ユーザグループを取得
        this.clientAPIService
            .getClient({ id: this.id })
            .pipe(untilDestroyed(this))
            .subscribe((response) => (this.client = response));
    }

    /**
     * クライアント更新のEventEmitter
     *
     * @param formGroup
     */
    submitEventEmitter(formGroup: UntypedFormGroup) {
        this.clientAPIService
            .updateClient({ id: this.id, body: formGroup.value })
            .pipe(untilDestroyed(this))
            .subscribe(() => {
                this.alertService.success("クライアントを編集しました。");
                this.router.navigate(["../../"], {
                    queryParams: {},
                    queryParamsHandling: "merge",
                    relativeTo: this.activatedRoute,
                });
            });
    }

    /**
     * 更新キャンセルのEventEmitter
     */
    cancelEventEmitter() {
        this.router.navigate(["../../"], {
            queryParams: {},
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute,
        });
    }
}
