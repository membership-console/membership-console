import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

import { Request } from "@purchase-request/models/request";

import { AlertService } from "@shared/services/alert.service";

@Component({
    selector: "app-requests",
    templateUrl: "./requests.component.html",
    styleUrls: ["./requests.component.scss"],
    animations: [
        trigger("detailExpand", [
            state("collapsed", style({ height: "0", minHeight: "0" })),
            state("expanded", style({ height: "*" })),
            transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
        ]),
    ],
})
export class RequestsComponent implements OnInit {
    /**
     * 申請リスト
     */
    requests: Request[] = [
        {
            id: 1,
            name: "ゼロから作るDeepLearning",
            description: `
            ## 商品説明
            とっても人気の技術書だよ。
            
            - 安い
            - わかりやすい
            
            > 強調したいメッセージ
            `,
            url: "https://example.com",
            price: 3740,
            quantity: 1,
            requested_date: new Date(),
            requested_by: "山田 太郎",
            is_approved: false,
            is_purchased: false,
        },
        {
            id: 1,
            name: "Software Design 2021年 8月",
            description: `
            ## 商品説明
            今流行りの技術雑誌だよ。
            
            - 安い
            - わかりやすい
            
            > 強調したいメッセージ
            `,
            url: "https://example.com",
            price: 1342,
            quantity: 1,
            requested_date: new Date(),
            requested_by: "山田 太郎",
            is_approved: true,
            is_purchased: false,
        },
    ];

    /**
     * テーブルのカラムリスト
     */
    columns = [
        "name",
        "price",
        "quantity",
        "requested_by",
        "is_approved",
        "is_purchased",
        "requested_date",
    ];

    /**
     * テーブルのデータソース
     */
    dataSource!: MatTableDataSource<Request>;

    /**
     * テーブルのページネータ
     */
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    /**
     * 拡大された要素
     */
    expandedElement: Request | null = null;

    constructor(private alertService: AlertService) {}

    ngOnInit() {
        this.dataSource = new MatTableDataSource<Request>(this.requests);
        this.dataSource.paginator = this.paginator;
    }

    /**
     * 特定の要素を拡大する
     *
     * @param element 要素
     */
    expand(element: Request) {
        this.expandedElement = this.expandedElement === element ? null : element;
    }

    /**
     * 承認する
     *
     * @param element 要素
     */
    onClickApprove(element: Request) {
        this.alertService.confirm("承認確認", "この購入申請を承認しますか？");
    }

    /**
     * 購入完了
     *
     * @param element 要素
     */
    onClickPurchased(element: Request) {
        this.alertService.confirm(
            "承認確認",
            "ステータスを購入完了に変更します。\n購入が完了しましたか？"
        );
    }
}
