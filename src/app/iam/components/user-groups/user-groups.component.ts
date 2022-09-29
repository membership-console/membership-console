import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { UserGroup } from "@iam/models/user-group";

import { AlertService } from "@shared/services/alert.service";

@UntilDestroy()
@Component({
    selector: "app-user-groups",
    templateUrl: "./user-groups.component.html",
    styleUrls: ["./user-groups.component.scss"],
})
export class UserGroupsComponent implements OnInit {
    /**
     * ユーザグループリスト
     */
    userGroups: UserGroup[] = [
        {
            id: 1,
            name: "全体管理者",
            roles: [0, 1, 2],
        },
        {
            id: 2,
            name: "システム管理局",
            roles: [1, 2],
        },
    ];

    /**
     * テーブルのカラムリスト
     */
    columns = ["name", "roles", "control"];

    /**
     * テーブルのデータソース
     */
    dataSource!: MatTableDataSource<UserGroup>;

    /**
     * テーブルのページネータ
     */
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.dataSource = new MatTableDataSource<UserGroup>(this.userGroups);
        this.dataSource.paginator = this.paginator;
    }

    /**
     * ユーザグループを編集
     *
     * @param userGroup ユーザグループ
     */
    onClickEdit(userGroup: UserGroup) {
        this.router.navigate(["edit", userGroup.id], {
            queryParams: {},
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute,
        });
    }

    /**
     * ユーザグループを削除
     *
     * @param userGroup ユーザグループ
     */
    onClickDelete(userGroup: UserGroup) {
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
}
