import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { UserGroupResponse } from "@iam/api/models";
import { UserGroupAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";

@UntilDestroy()
@Component({
    selector: "app-user-group-edit",
    templateUrl: "./user-group-edit.component.html",
    styleUrls: ["./user-group-edit.component.scss"],
})
export class UserGroupEditComponent implements OnInit {
    /**
     * ユーザグループID
     */
    userGroupId!: number;

    /**
     * ユーザグループ
     */
    userGroup!: UserGroupResponse;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userGroupAPIService: UserGroupAPIService,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        // パスパラメータからユーザグループIDを取得
        this.userGroupId = Number(this.activatedRoute.snapshot.paramMap.get("userGroupId"));

        // ユーザグループを取得
        this.userGroupAPIService
            .getUserGroup({ user_group_id: this.userGroupId })
            .pipe(untilDestroyed(this))
            .subscribe((response) => (this.userGroup = response));
    }

    /**
     * ユーザグループ編集のEventEmitter
     *
     * @param formGroup
     */
    submitEventEmitter(formGroup: UntypedFormGroup) {
        this.userGroupAPIService
            .updateUserGroup({ user_group_id: this.userGroupId, body: formGroup.value })
            .pipe(untilDestroyed(this))
            .subscribe(() => {
                this.alertService.success("ユーザグループを編集しました。");
                this.router.navigate(["../../"], {
                    queryParams: {},
                    queryParamsHandling: "merge",
                    relativeTo: this.activatedRoute,
                });
            });
    }

    /**
     * 編集キャンセルのEventEmitter
     */
    cancelEventEmitter() {
        this.router.navigate(["../../"], {
            queryParams: {},
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute,
        });
    }
}
