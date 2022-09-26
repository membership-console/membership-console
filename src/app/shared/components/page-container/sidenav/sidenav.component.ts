import { Component, OnInit } from "@angular/core";

/**
 * カテゴリー
 */
export type Category = {
    /**
     * ラベル
     */
    label: string;

    /**
     * アイコン
     */
    icon: string;

    /**
     * ページリンクリスト
     */
    links: {
        /**
         * ラベル
         */
        label: string;

        /**
         * パス
         */
        path: string;
    }[];
};

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent {
    categories: Category[] = [
        {
            label: "カテゴリー1",
            icon: "admin_panel_settings",
            links: [
                {
                    label: "リンク1",
                    path: "",
                },
            ],
        },
        {
            label: "カテゴリー2",
            icon: "admin_panel_settings",
            links: [
                {
                    label: "リンク2",
                    path: "",
                },
            ],
        },
    ];

    constructor() {}
}
