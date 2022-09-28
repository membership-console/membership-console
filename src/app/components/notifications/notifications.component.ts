import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

import { AlertService } from "@shared/services/alert.service";

/**
 * 通知モデル
 */
type Notification = {
    title: string;
    body: string;
    status: number;
    posted_date: Date;
};

@Component({
    selector: "app-notifications",
    templateUrl: "./notifications.component.html",
    styleUrls: ["./notifications.component.scss"],
})
export class NotificationsComponent implements OnInit {
    /**
     * 通知リスト
     */
    notifications: Notification[] = [
        {
            title: "MFA設定を設定してください",
            body: "セキュリティポリシーが更新され、MFAの有効化が必須になりました。\n年末までのご対応をお願いいたします。",
            status: 0,
            posted_date: new Date(),
        },
        {
            title: "1.0.0リリース",
            body: "Membership Console 1.0.0がリリースされました🎉",
            status: 0,
            posted_date: new Date(),
        },
    ];

    /**
     * テーブルのカラムリスト
     */
    columns = ["title", "body", "posted-date"];

    /**
     * テーブルのデータソース
     */
    dataSource!: MatTableDataSource<Notification>;

    /**
     * テーブルのページネータ
     */
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private alertService: AlertService) {}

    ngOnInit() {
        this.dataSource = new MatTableDataSource<Notification>(this.notifications);
        this.dataSource.paginator = this.paginator;
    }

    /**
     * 全通知を開封する
     */
    readAllNotifications() {
        this.alertService.success("全ての通知を既読にしました。");
    }
}
