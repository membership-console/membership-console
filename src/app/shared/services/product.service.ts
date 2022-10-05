import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, Observable, of } from "rxjs";
import { filter } from "rxjs/operators";

import { Product } from "@shared/models/product";

@Injectable({
    providedIn: "root",
})
export class ProductService {
    /**
     * 商品リスト
     */
    private products: Product[] = [
        {
            name: "ダッシュボード",
            description: "Membership ConsoleはRCC内製のグループウェアです。",
            icon: "",
            path: "/dashboard",
            version: "",
            visible: false,
            navs: [],
        },
        {
            name: "IAM",
            description: "RBAC（ロールベースアクセス制御）システムです。",
            icon: "admin_panel_settings",
            path: "/iam",
            version: "開発中",
            visible: true,
            navs: [
                {
                    label: "ユーザ一覧",
                    icon: "person",
                    path: "/users",
                },
                {
                    label: "ユーザグループ",
                    icon: "admin_panel_settings",
                    path: "/user-groups",
                },
            ],
        },
        {
            name: "リマインダー",
            description: "会員向けにメール配信・リマインダーが設定できます。",
            icon: "notifications_active",
            path: "/reminder",
            version: "開発中",
            visible: true,
            navs: [],
        },
        {
            name: "フォーム",
            description: "会員向けフォームを作成できます。回答状況のビューアも提供されます。",
            icon: "article",
            path: "/form",
            version: "開発中",
            visible: true,
            navs: [],
        },
        {
            name: "購入申請",
            description: "追加で備品を購入したい場合は、本プロダクトから会計局へ申請してください。",
            icon: "account_balance_wallet",
            path: "/purchase-request",
            version: "開発中",
            visible: true,
            navs: [
                {
                    label: "申請リスト",
                    icon: "account_balance_wallet",
                    path: "/requests",
                },
            ],
        },
        {
            name: "総会文書生成ツール",
            description: "総会文書リポジトリを設定ファイルを指定するだけで自動生成できます。",
            icon: "description",
            path: "/soukai-generator",
            version: "開発中",
            visible: true,
            navs: [],
        },
    ];

    /**
     * 現在アクティブなプロダクト
     */
    private activeProduct = new BehaviorSubject<Product>({} as Product);

    constructor(private router: Router) {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
            const root = this.router.routerState.snapshot.root;

            this.searchProduct(root);
        });
    }

    /**
     * プロダクトリストを取得
     *
     * ＠return プロダクトリスト
     */
    getProducts(): Observable<Product[]> {
        return of(this.products);
    }

    /**
     * 現在アクティブなプロダクトを取得
     *
     * @return プロダクト
     */
    getActiveProduct(): Observable<Product> {
        return this.activeProduct.asObservable();
    }

    /**
     * プロダクトを検索
     */
    private searchProduct(route: ActivatedRouteSnapshot) {
        if (route) {
            const product = this.getProductByUrl(`/${route.url}`);
            if (product) {
                this.activeProduct.next(product);
                return;
            }
            if (route.firstChild) {
                this.searchProduct(route.firstChild);
            } else {
                this.activeProduct.next(this.getProductByUrl("/dashboard"));
            }
        }
    }

    /**
     * URLからプロダクトを取得
     */
    private getProductByUrl(url: string): Product {
        return this.products.filter((product) => product.path === url)[0];
    }
}
