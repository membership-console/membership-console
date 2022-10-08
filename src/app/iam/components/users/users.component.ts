import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { UserResponse } from "@iam/api/models";
import { UserAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";

@UntilDestroy()
@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
    /**
     * ユーザリスト
     */
    users: UserResponse[] = [];

    /**
     * テーブルのカラムリスト
     */
    columns = ["name", "email", "entranceYear", "control"];

    /**
     * テーブルのデータソース
     */
    dataSource!: MatTableDataSource<UserResponse>;

    /**
     * テーブルのページネータ
     */
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService,
        private userAPIService: UserAPIService
    ) {}

    ngOnInit(): void {
        this.loadDataSource();
        this.setDataSource();
    }

    /**
     * データソースにデータを挿入
     */
    setDataSource() {
        this.dataSource = new MatTableDataSource<UserResponse>(this.users);
        this.dataSource.paginator = this.paginator;
    }

    /**
     * データソースをロード
     */
    loadDataSource() {
        this.userAPIService
            .getUsers()
            .pipe(untilDestroyed(this))
            .subscribe((response) => {
                this.users = response.users;
                this.setDataSource();
            });
    }

    /**
     * ユーザを編集
     *
     * @param user ユーザグループ
     */
    onClickEdit(user: UserResponse) {
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
    onClickDelete(user: UserResponse) {
        this.alertService
            .confirm("削除確認", "この動作は取り消せませんが、本当に削除しますか？")
            .pipe(untilDestroyed(this))
            .subscribe((result) => {
                if (!result) {
                    return;
                }

                this.userAPIService
                    .deleteUser({ user_id: user.id })
                    .pipe(untilDestroyed(this))
                    .subscribe(() => {
                        this.alertService.success("ユーザを削除しました。");
                    });
            });
    }
}
