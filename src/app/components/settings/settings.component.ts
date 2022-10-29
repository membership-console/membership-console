import { Component, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { SelectOption } from "@shared/models/select-option";
import { AlertService } from "@shared/services/alert.service";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
    /**
     * 通知を有効化するかどうか
     */
    isNotificationValid = true;

    /**
     * ダークモードかどうか
     */
    colorTheme: "light" | "dark" = "light";

    // 現在選択されている言語
    selectedLanguage = "日本語";

    /**
     * 通知選択肢リスト
     */
    notificationOptions: SelectOption[] = [
        {
            label: "ON",
            value: true,
        },
        {
            label: "OFF",
            value: false,
        },
    ];

    /**
     * テーマ選択肢リスト
     */
    themeOptions: SelectOption[] = [
        {
            label: "ライト",
            value: "light",
        },
        {
            label: "ダーク",
            value: "dark",
        },
    ];

    /**
     * 言語選択肢リスト
     */
    languageOptions: SelectOption[] = [
        {
            label: "日本語",
            value: "日本語",
        },
        {
            label: "English",
            value: "English",
        },
        {
            label: "한국어",
            value: "한국어",
        },
        {
            label: "汉语",
            value: "汉语",
        },
    ];

    /**
     * 言語選択
     */
    languages: string[] = ["日本語", "English", "한국어", "汉语"];

    /**
     * フォーム
     */
    form!: UntypedFormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        // フォームを作成
        this.form = this.formBuilder.group({
            notification: [true, [Validators.required]],
            theme: ["light", [Validators.required]],
            language: ["日本語", [Validators.required]],
        });
    }

    /**
     * 変更を保存
     */
    onSubmit(): void {
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
