import { Component } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { ClientAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";

@UntilDestroy()
@Component({
    selector: "app-client-new",
    templateUrl: "./client-new.component.html",
    styleUrls: ["./client-new.component.scss"],
})
export class ClientNewComponent {
    constructor(
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
                // TODO: クライアントID、シークレットを表示
                console.log(response);
                this.alertService.success("クライアントを新規作成しました。");
                this.router.navigate(["../"], {
                    queryParams: {},
                    queryParamsHandling: "merge",
                    relativeTo: this.activatedRoute,
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
