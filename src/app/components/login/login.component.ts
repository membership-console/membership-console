import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { AlertService } from "@shared/services/alert.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
    /**
     * FormControlオブジェクト
     */
    email = new FormControl("", [Validators.required, Validators.email]);
    password = new FormControl("", [Validators.required, Validators.email]);
    passwordHide = true;

    constructor(private alertService: AlertService) {}

    onClickForgotPassword() {
        this.alertService.confirm(
            "パスワードを忘れた場合",
            "IAMユーザのパスワードは管理者のみがリセットできます。\n詳細はアカウントを提供した管理者までお問い合わせください。"
        );
    }

    getEmailErrorMessage() {
        if (this.email.hasError("required")) {
            return "メールアドレスを入力してください";
        }
        return this.email.hasError("email") ? "メールアドレスが正しくありません" : "";
    }

    getPasswordErrorMessage() {
        if (this.password.hasError("required")) {
            return "パスワードを入力してください";
        }
        return this.password.hasError("email") ? "パスワードはxx文字以上yy文字以内です" : "";
    }

    login() {
        // TODO: ログイン機能を実装する
        this.alertService.warn("未実装です。まだ遷移しません。");
    }
}
