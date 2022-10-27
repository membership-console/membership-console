import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AlertService } from "@shared/services/alert.service";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent {
    /**
     * 通知を有効化するかどうか（デフォルトは無効）
     */
    isNotificationValid = false;

    /**
     * ダークモードかどうか（デフォルトはライト）
     */
    colorTheme: "light" | "dark" = "light";

    /**
     * 言語選択（デフォルトは日本語）
     */
    languages: string[] = ["日本語", "English", "한국어", "汉语"];
    // 現在選択されている言語
    selectedLanguage = "日本語";

    constructor(private router: Router, private alertService: AlertService) {}

    /**
     * 変更を保存
     */
    onSubmit(): void {
        localStorage.setItem("isNotificationValid", this.isNotificationValid.toString());
        localStorage.setItem("colorTheme", this.colorTheme);
        localStorage.setItem("language", this.selectedLanguage);
        this.alertService.success("設定を保存しました。");
        this.router.navigate(["/dashboard"]);
    }

    /**
     * キャンセル
     */
    onCancel(): void {
        this.router.navigate(["/dashboard"]);
    }
}
