import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { UserGroupResponse } from "@api/models";
import { UserGroupAPIService } from "@api/services";

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
    userGroups: UserGroupResponse[] = [];

    /**
     * テーブルのカラムリスト
     */
    columns = ["name", "roles", "control"];

    /**
     * テーブルのデータソース
     */
    dataSource!: MatTableDataSource<UserGroupResponse>;

    /**
     * テーブルのページネータ
     */
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService,
        private userGroupAPIService: UserGroupAPIService
    ) {}

    ngOnInit() {
        this.loadDataSource();
        this.setDataSource();
    }

    /**
     * データソースにデータを挿入
     */
    setDataSource() {
        this.dataSource = new MatTableDataSource<UserGroupResponse>(this.userGroups);
        this.dataSource.paginator = this.paginator;
    }

    /**
     * データソースをロード
     */
    loadDataSource() {
        this.userGroupAPIService
            .getUserGroups()
            .pipe(untilDestroyed(this))
            .subscribe((response) => {
                this.userGroups = response.userGroups;
                this.setDataSource();
            });
    }

    /**
     * ユーザグループを編集
     *
     * @param userGroup ユーザグループ
     */
    onClickEdit(userGroup: UserGroupResponse) {
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
    onClickDelete(userGroup: UserGroupResponse) {
        this.alertService
            .confirm("削除確認", "この動作は取り消せませんが、本当に削除しますか？")
            .pipe(untilDestroyed(this))
            .subscribe((result) => {
                if (!result) {
                    return;
                }

                this.userGroupAPIService
                    .deleteUserGroup({ user_group_id: userGroup.id })
                    .pipe(untilDestroyed(this))
                    .subscribe(() => {
                        this.alertService.success("ユーザグループを削除しました。");
                    });
            });
    }
}
