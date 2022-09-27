import { Component } from "@angular/core";

import { AlertService } from "@shared/services/alert.service";

@Component({
    selector: "app-user-menu",
    templateUrl: "./user-menu.component.html",
    styleUrls: ["./user-menu.component.scss"],
})
export class UserMenuComponent {
    constructor(private alertService: AlertService) {}

    /**
     * ログアウトボタンをクリック
     */
    onClickLogout() {
        // TODO: ログアウト機能を実装
        this.alertService.warn("その機能はまだ実装されていません。");
    }
}
