import { Component } from "@angular/core";

/**
 * プロダクトモデル
 */
type Product = {
    name: string;
    description: string;
    icon: string;
    path: string;
    version: string;
};

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
    products: Product[] = [
        {
            name: "IAM",
            description: "RBAC（ロールベースアクセス制御）システムです。",
            icon: "admin_panel_settings",
            path: "/iam",
            version: "開発中",
        },
        {
            name: "リマインダー",
            description: "会員向けにメール配信・リマインダーが設定できます。",
            icon: "notifications_active",
            path: "/reminder",
            version: "開発中",
        },
        {
            name: "フォーム",
            description: "会員向けフォームを作成できます。回答状況のビューアも提供されます。",
            icon: "article",
            path: "/form",
            version: "開発中",
        },
        {
            name: "購入申請",
            description: "追加で備品を購入したい場合は、本プロダクトから会計局へ申請してください。",
            icon: "account_balance_wallet",
            path: "/purchase-request",
            version: "開発中",
        },
        {
            name: "総会文書生成ツール",
            description: "総会文書リポジトリを設定ファイルを指定するだけで自動生成できます。",
            icon: "description",
            path: "/soukai-generator",
            version: "開発中",
        },
    ];

    constructor() {}
}
