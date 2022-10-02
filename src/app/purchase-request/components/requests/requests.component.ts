import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

import { Request } from "@purchase-request/models/request";

@Component({
    selector: "app-requests",
    templateUrl: "./requests.component.html",
    styleUrls: ["./requests.component.scss"],
})
export class RequestsComponent implements OnInit {
    /**
     * 申請リスト
     */
    requests: Request[] = [
        {
            id: 1,
            name: "ゼロから作るDeepLearning",
            description: "",
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
            description: "",
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

    constructor() {}

    ngOnInit() {
        this.dataSource = new MatTableDataSource<Request>(this.requests);
        this.dataSource.paginator = this.paginator;
    }
}
