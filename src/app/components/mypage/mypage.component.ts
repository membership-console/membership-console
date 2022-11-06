import { Component, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { UserResponse } from "@iam/api/models";
import { UserAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";

@UntilDestroy()
@Component({
    selector: "app-mypage",
    templateUrl: "./mypage.component.html",
    styleUrls: ["./mypage.component.scss"],
})
export class MypageComponent implements OnInit {
    /**
     * ログインユーザ
     */
    loginUser!: UserResponse;

    /**
     * パスワード変更のフォーム
     */
    changePasswordForm!: UntypedFormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userAPIService: UserAPIService,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        this.userAPIService
            .getLoginUser()
            .pipe(untilDestroyed(this))
            .subscribe((response) => (this.loginUser = response));

        this.changePasswordForm = this.formBuilder.group({
            oldPassword: [
                null,
                [Validators.required, Validators.minLength(8), Validators.maxLength(32)],
            ],
            newPassword: [
                null,
                [Validators.required, Validators.minLength(8), Validators.maxLength(32)],
            ],
            confirmPassword: [
                null,
                [Validators.required, Validators.minLength(8), Validators.maxLength(32)],
            ],
        });
    }

    /**
     * パスワード変更のフォーム送信
     */
    onSubmit() {
        if (this.changePasswordForm.valid) {
            // 新しいパスワードと確認パスワードが同じかどうか確認
            if (
                this.changePasswordForm.value["newPassword"] ===
                this.changePasswordForm.value["confirmPassword"]
            ) {
                this.userAPIService
                    .updateLoginUserPassword({ body: this.changePasswordForm.value })
                    .pipe(untilDestroyed(this))
                    .subscribe(() => {
                        this.alertService.success("パスワードを変更しました。");
                        this.router.navigate(["/dashboard"], {
                            queryParams: {},
                            queryParamsHandling: "merge",
                            relativeTo: this.activatedRoute,
                        });
                    });
            } else {
                this.alertService.error("新しいパスワードと確認のパスワードが違います。");
            }
        }
    }

    /**
     * パスワード変更のキャンセル
     */
    onCancel() {
        this.router.navigate(["/dashboard"], {
            queryParams: {},
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute,
        });
    }
}
