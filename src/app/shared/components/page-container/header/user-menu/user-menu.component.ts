import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { UserResponse } from "@iam/api/models";
import { AuthAPIService, UserAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";

@UntilDestroy()
@Component({
    selector: "app-user-menu",
    templateUrl: "./user-menu.component.html",
    styleUrls: ["./user-menu.component.scss"],
})
export class UserMenuComponent implements OnInit {
    /**
     * ログインユーザ
     */
    loginUser!: UserResponse;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private authAPIService: AuthAPIService,
        private userAPIService: UserAPIService
    ) {}

    ngOnInit() {
        this.userAPIService
            .getLoginUser()
            .pipe(untilDestroyed(this))
            .subscribe((response) => (this.loginUser = response));
    }

    /**
     * ログアウトボタンをクリック
     */
    onClickLogout() {
        this.authAPIService
            .logout()
            .pipe(untilDestroyed(this))
            .subscribe(() => {
                this.router.navigate(["login"], {
                    queryParams: {},
                    queryParamsHandling: "merge",
                });
                this.alertService.success("ログアウトしました。。");
            });
    }
}
