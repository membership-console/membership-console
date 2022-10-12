import { Component, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { AuthAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";
import { whiteSpaceValidator } from "@shared/validators/white-space.validator";

@UntilDestroy()
@Component({
    selector: "app-password-reset",
    templateUrl: "./password-reset.component.html",
    styleUrls: ["./password-reset.component.scss"],
})
export class PasswordResetComponent implements OnInit {
    /**
     * フォーム
     */
    form!: UntypedFormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private authAPIService: AuthAPIService
    ) {}

    ngOnInit() {
        // フォームを作成
        this.form = this.formBuilder.group({
            // メールアドレス
            email: [null, [Validators.required, Validators.email, whiteSpaceValidator]],
        });
    }

    /**
     * フォーム送信
     */
    onSubmit() {
        if (this.form.valid) {
            this.authAPIService
                .requestPasswordReset({ body: this.form.value })
                .pipe(untilDestroyed(this))
                .subscribe(() => {
                    this.alertService.success("パスワード再発行の申請を受け付けました。");
                });
        }
    }
}
