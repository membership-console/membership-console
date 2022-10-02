import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { User } from "@iam/models/user";

import { AlertService } from "@shared/services/alert.service";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
    /**
     * ユーザリスト
     */
    users: User[] = [
        {
            id: 1,
            lastName: "小林",
            firstName: "修一",
            email: "is4872@ed.ritsumei.ac.jp",
            entranceYear: 2019,
        },
        {
            id: 2,
            lastName: "中川",
            firstName: "達也",
            email: "is5498@ed.ritsumei.ac.jp",
            entranceYear: 2020,
        },
        {
            id: 3,
            lastName: "池田",
            firstName: "純",
            email: "is7739@ed.ritsumei.ac.jp",
            entranceYear: 2020,
        },
        {
            id: 4,
            lastName: "石田",
            firstName: "剛",
            email: "is0834@ed.ritsumei.ac.jp",
            entranceYear: 2021,
        },
    ];

    /**
     * テーブルのカラムリスト
     */
    columns = ["name", "email", "entranceYear", "control"];

    /**
     * テーブルのデータソース
     */
    dataSource!: MatTableDataSource<User>;

    /**
     * テーブルのページネータ
     */
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource<User>(this.users);
        this.dataSource.paginator = this.paginator;
    }

    /**
     * ユーザを編集
     *
     * @param user ユーザグループ
     */
    onClickEdit(user: User) {
        this.router.navigate(["edit", user.id], {
            queryParams: {},
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute,
        });
    }

    /**
     * ユーザを削除
     *
     * @param user ユーザグループ
     */
    onClickDelete(user: User) {
        this.alertService
            .confirm("削除確認", "この動作は取り消せませんが、本当に削除しますか？")
            .pipe(untilDestroyed(this))
            .subscribe((result) => {
                // TODO: ユーザグループ削除機能を実装
                if (result) {
                    this.alertService.warn("その機能はまだ実装されていません。");
                }
            });
    }

    /**
     * ユーザの名前を取得
     * @param user
     */
    getName(user: User): string {
        return `${user.lastName} ${user.firstName}`;
    }
}
