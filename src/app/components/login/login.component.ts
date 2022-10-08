import { Component, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { AuthAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";
import { whiteSpaceValidator } from "@shared/validators/white-space.validator";

@UntilDestroy()
@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    /**
     * フォーム
     */
    form!: UntypedFormGroup;

    constructor(
        private alertService: AlertService,
        private formBuilder: FormBuilder,
        private router: Router,
        private authAPIService: AuthAPIService
    ) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            // メールアドレス
            email: [null, [Validators.required, Validators.email, whiteSpaceValidator]],
            // パスワード
            password: [
                null,
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(32),
                    whiteSpaceValidator,
                ],
            ],
        });
    }

    onClickForgotPassword() {
        this.alertService.confirm(
            "パスワードを忘れた場合",
            "IAMユーザのパスワードは管理者のみがリセットできます。\n詳細はアカウントを提供した管理者までお問い合わせください。"
        );
    }

    /**
     * フォーム送信
     */
    onSubmit() {
        if (this.form.valid) {
            this.authAPIService
                .login({ body: this.form.value })
                .pipe(untilDestroyed(this))
                .subscribe(() => {
                    this.router.navigate(["/"], {
                        queryParams: {},
                        queryParamsHandling: "merge",
                    });
                    this.alertService.success("ログインに成功しました。");
                });
        }
    }
}
