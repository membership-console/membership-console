import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { BehaviorSubject, Observable } from "rxjs";
import { filter } from "rxjs/operators";

@UntilDestroy()
@Injectable({
    providedIn: "root",
})
export class TitleService {
    /**
     * タイトル
     */
    title = new BehaviorSubject<string>("");

    constructor(private router: Router) {
        this.router.events
            .pipe(untilDestroyed(this))
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                const root = this.router.routerState.snapshot.root;

                this.searchTitle(root, []);
            });
    }

    /**
     * タイトルを取得
     */
    getTitle(): Observable<string> {
        return this.title.asObservable();
    }

    /**
     * タイトル検索
     */
    private searchTitle(activatedRoute: ActivatedRouteSnapshot, parentUrl: string[]) {
        if (activatedRoute) {
            const routeUrl = parentUrl.concat(activatedRoute.url.map((url) => url.path));

            if (activatedRoute.firstChild) {
                this.searchTitle(activatedRoute.firstChild, routeUrl);
            } else {
                this.title.next(activatedRoute.data["title"]);
            }
        }

        return "";
    }
}
