import { Component, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AlertService } from "@shared/services/alert.service";
import { whiteSpaceValidator } from "@shared/validators/white-space.validator";

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
        private router: Router
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
            // TODO: ログイン機能を実装する
            this.router.navigate(["/"], {
                queryParams: {},
                queryParamsHandling: "merge",
            });
            this.alertService.warn("その機能はまだ実装されていません。");
        }
    }
}
