import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { ClientResponse } from "@iam/api/models";
import { ClientAPIService } from "@iam/api/services";

import { AlertService } from "@shared/services/alert.service";

@UntilDestroy()
@Component({
    selector: "app-clients",
    templateUrl: "./clients.component.html",
    styleUrls: ["./clients.component.scss"],
})
export class ClientsComponent implements OnInit {
    /**
     * クライアントリスト
     */
    clients: ClientResponse[] = [];

    /**
     * テーブルのカラムリスト
     */
    columns = ["name", "type", "sso", "scopes", "control"];

    /**
     * テーブルのデータソース
     */
    dataSource!: MatTableDataSource<ClientResponse>;

    /**
     * テーブルのページネータ
     */
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService,
        private clientAPIService: ClientAPIService
    ) {}

    ngOnInit(): void {
        this.loadDataSource();
        this.setDataSource();
    }

    /**
     * データソースにデータを挿入
     */
    setDataSource() {
        this.dataSource = new MatTableDataSource<ClientResponse>(this.clients);
        this.dataSource.paginator = this.paginator;
    }

    /**
     * データソースをロード
     */
    loadDataSource() {
        this.clientAPIService
            .getClients()
            .pipe(untilDestroyed(this))
            .subscribe((response) => {
                this.clients = response.clients;
                this.setDataSource();
            });
    }

    /**
     * クライアントを編集
     *
     * @param client クライアント
     */
    onClickEdit(client: ClientResponse) {
        this.router.navigate([client.id, "edit"], {
            queryParams: {},
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute,
        });
    }

    /**
     * クライアントを削除
     *
     * @param client クライアント
     */
    onClickDelete(client: ClientResponse) {
        this.alertService
            .confirm("削除確認", "この動作は取り消せませんが、本当に削除しますか？")
            .pipe(untilDestroyed(this))
            .subscribe((result) => {
                if (!result) {
                    return;
                }

                // TODO: クライアント削除APIを呼び出す
                this.alertService.warn("その機能はまだ実装されていません。");
            });
    }
}
