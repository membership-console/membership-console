import { Component } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { UserGroupAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";

@UntilDestroy()
@Component({
    selector: "app-user-group-new",
    templateUrl: "./user-group-new.component.html",
    styleUrls: ["./user-group-new.component.scss"],
})
export class UserGroupNewComponent {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userGroupAPIService: UserGroupAPIService,
        private alertService: AlertService
    ) {}

    /**
     * ユーザグループ作成のEventEmitter
     *
     * @param formGroup
     */
    submitEventEmitter(formGroup: UntypedFormGroup) {
        this.userGroupAPIService
            .createUserGroup({ body: formGroup.value })
            .pipe(untilDestroyed(this))
            .subscribe(() => {
                this.alertService.success("ユーザグループを新規作成しました。");
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
