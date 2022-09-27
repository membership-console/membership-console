import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

/**
 * エラー
 */
type Error = {
    status: number;
    title: string;
    messages: string[];
};

@Component({
    selector: "app-error",
    templateUrl: "./error.component.html",
    styleUrls: ["./error.component.scss"],
})
export class ErrorComponent implements OnInit {
    /**
     * ステータスコード
     */
    status!: number;

    /**
     * エラーリスト
     */
    errors: Error[] = [
        {
            status: 403,
            title: "403 Forbidden",
            messages: [
                "その動作は許可されていません。",
                "問題が解決しない場合は、管理者までご連絡ください。",
            ],
        },
        {
            status: 404,
            title: "404 Page Not Found",
            messages: [
                "お探しのページは見つかりません。",
                "一時的にアクセスできない状態か、移動もしくは削除された可能性があります。",
            ],
        },
        {
            status: 500,
            title: "500 Internal Server Error",
            messages: [
                "予期せぬエラーが発生しました。",
                "問題が解決しない場合は、管理者までご連絡ください。",
            ],
        },
    ];

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.status = Number(this.activatedRoute.snapshot.paramMap.get("status") ?? 500);
        const allowedStatusList = this.errors.map((error) => error.status);
        if (!allowedStatusList.includes(this.status)) {
            this.router
                .navigate(["/error", 404], { queryParamsHandling: "merge" })
                .then(() => this.ngOnInit());
        }
    }

    /**
     * エラーを取得
     */
    getError(): Error {
        return this.errors.filter((error) => error.status === this.status)[0];
    }
}
