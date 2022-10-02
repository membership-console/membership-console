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
            name: "購入申請",
            description: "追加で備品を購入したい場合は、本プロダクトから会計局へ申請してください。",
            icon: "account_balance_wallet",
            path: "/purchase-request",
            version: "開発中",
        },
        {
            name: "Kiri Tansu",
            description: "RCCの備品貸出ツールです。備品・蔵書をレンタルできます。",
            icon: "menu_book",
            path: "/kiri-tansu",
            version: "開発中",
        },
    ];

    constructor() {}
}
