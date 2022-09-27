import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { BehaviorSubject, Observable } from "rxjs";
import { filter } from "rxjs/operators";

import { Breadcrumb } from "@app/models/breadcrumb";

@UntilDestroy()
@Injectable({
    providedIn: "root",
})
export class BreadcrumbService {
    /**
     * パンくずリスト
     */
    breadcrumbs = new BehaviorSubject<Breadcrumb[]>([]);

    constructor(private router: Router) {
        this.router.events
            .pipe(untilDestroyed(this))
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                const root = this.router.routerState.snapshot.root;
                const breadcrumbs: Breadcrumb[] = [];
                this.addBreadcrumb(root, [], breadcrumbs);

                this.breadcrumbs.next(breadcrumbs);
            });
    }

    /**
     * ラベルを取得
     *
     * @param data データ
     */
    private static getLabel(data: Data) {
        return typeof data["breadcrumb"] === "function" //
            ? data["breadcrumb"](data) //
            : data["breadcrumb"];
    }

    /**
     * パンくずリストを取得
     */
    getBreadCrumbs(): Observable<Breadcrumb[]> {
        return this.breadcrumbs.asObservable();
    }

    /**
     * パンくずリストに追加
     */
    private addBreadcrumb(
        activatedRoute: ActivatedRouteSnapshot,
        parentUrl: string[],
        breadcrumbs: Breadcrumb[]
    ) {
        if (activatedRoute) {
            const routeUrl = parentUrl.concat(activatedRoute.url.map((url) => url.path));

            if (activatedRoute.data["breadcrumb"]) {
                const breadcrumb = {
                    label: BreadcrumbService.getLabel(activatedRoute.data),
                    path: "/" + routeUrl.join("/"),
                };
                breadcrumbs.push(breadcrumb);
            }

            if (activatedRoute.firstChild) {
                this.addBreadcrumb(activatedRoute.firstChild, routeUrl, breadcrumbs);
            }
        }
    }
}
