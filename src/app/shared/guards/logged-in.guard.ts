import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "@shared/services/auth.service";

@Injectable({
    providedIn: "root",
})
export class LoggedInGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(["/login"], {
                queryParamsHandling: "merge",
                queryParams: {
                    ...route.queryParams,
                    continue: state.url.split("?")[0],
                },
            });
            return false;
        }
    }
}
