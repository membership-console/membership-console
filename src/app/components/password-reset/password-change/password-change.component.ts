import { Component, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { UntilDestroy } from "@ngneat/until-destroy";

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
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private alertService: AlertService
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
            }

            // TODO: パスワード変更APIを呼び出す
            const requestBody = {
                token: this.token,
                newPassword: this.form.value["newPassword"],
            };
            this.alertService.warn("その機能はまだ実装されていません。");
        }
    }
}
