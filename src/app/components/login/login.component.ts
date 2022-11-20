import { Component, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { AuthAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";
import { AuthService } from "@shared/services/auth.service";
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
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private authAPIService: AuthAPIService,
        private authService: AuthService
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

    /**
     * フォーム送信
     */
    onSubmit() {
        if (this.form.valid) {
            this.authAPIService
                .login({ body: this.form.value })
                .pipe(untilDestroyed(this))
                .subscribe(() => {
                    this.authService.setIsAuthenticated(true);
                    this.alertService.success("ログインに成功しました。");

                    // 遷移先パスが指定されていた場合はそこへ遷移する
                    this.activatedRoute.queryParams.subscribe((params) => {
                        const path = params["continue"] ? params["continue"] : "/";
                        this.router.navigate([path], {
                            queryParams: {
                                continue: null,
                            },
                            queryParamsHandling: "merge",
                        });
                    });
                });
        }
    }
}
