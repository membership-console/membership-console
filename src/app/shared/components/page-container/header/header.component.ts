import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    /**
     * ヘッダーメニューを有効化するかどうか
     */
    isMenuValid = false;

    /**
     * ユーザメニューを無効化するURLリスト
     */
    disableUserMenuUrls = ["/login", "/password_reset"];

    constructor(private router: Router) {
        this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd))
            .subscribe(() => this.setIsMenuValid());
    }

    setIsMenuValid(): void {
        this.isMenuValid =
            this.disableUserMenuUrls.filter((url) => this.router.url.startsWith(url)).length === 0;
    }
}
