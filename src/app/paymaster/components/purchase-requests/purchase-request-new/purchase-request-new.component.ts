import { Component, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { AlertService } from "@shared/services/alert.service";
import { urlValidator } from "@shared/validators/url.validator";
import { whiteSpaceValidator } from "@shared/validators/white-space.validator";

@Component({
    selector: "app-purchase-request-new",
    templateUrl: "./purchase-request-new.component.html",
    styleUrls: ["./purchase-request-new.component.scss"],
})
export class PurchaseRequestNewComponent implements OnInit {
    /**
     * フォーム
     */
    form!: UntypedFormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            // 商品名
            name: [
                null,
                [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(255),
                    whiteSpaceValidator,
                ],
            ],
            // 説明文
            description: [
                null,
                [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(1000),
                    whiteSpaceValidator,
                ],
            ],
            // 商品URL
            url: [null, [Validators.required, urlValidator, whiteSpaceValidator]],
            // 税込価格
            price: [null, [Validators.required, Validators.min(1), whiteSpaceValidator]],
            // 個数
            quantity: [
                null,
                [Validators.required, Validators.min(1), Validators.max(255), whiteSpaceValidator],
            ],
        });
    }

    /**
     * フォーム送信
     */
    onSubmit() {
        if (this.form.valid) {
            // TODO: 申請作成リクエストを送信
            this.alertService.warn("その機能はまだ実装されていません。");
        }
    }

    /**
     * キャンセル
     */
    onCancel() {
        this.router.navigate(["../"], {
            queryParams: {},
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute,
        });
    }
}
