import { Component, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { AuthAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";
import { whiteSpaceValidator } from "@shared/validators/white-space.validator";

@UntilDestroy()
@Component({
    selector: "app-password-change",
    templateUrl: "./password-change.component.html",
    styleUrls: ["./password-change.component.scss"],
})
export class PasswordChangeComponent implements OnInit {
    /**
     * トークン
     */
    token: string | null = null;

    /**
     * フォーム
     */
    form!: UntypedFormGroup;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private authAPIService: AuthAPIService
    ) {}

    ngOnInit(): void {
        // パスパラメータからトークンを取得
        this.token = this.activatedRoute.snapshot.paramMap.get("token");

        // フォームを作成
        this.form = this.formBuilder.group({
            // 新しいパスワード
            newPassword: [
                null,
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(32),
                    whiteSpaceValidator,
                ],
            ],
            // 新しいパスワードの確認
            confirmNewPassword: [
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

    /**
     * フォーム送信
     */
    onSubmit() {
        if (this.form.valid) {
            // 新しいパスワードと確認の入力チェック
            if (this.form.value["newPassword"] !== this.form.value["confirmNewPassword"]) {
                this.alertService.warn("新しいパスワードが間違えています。");
                return;
            }

            const requestBody = {
                token: this.token as string,
                newPassword: this.form.value["newPassword"] as string,
            };
            this.authAPIService
                .resetPassword({ body: requestBody })
                .pipe(untilDestroyed(this))
                .subscribe(() => {
                    this.alertService.success("パスワードを再設定しました。");
                    this.router.navigate(["/login"], {
                        queryParamsHandling: "merge",
                    });
                });
        }
    }
}
