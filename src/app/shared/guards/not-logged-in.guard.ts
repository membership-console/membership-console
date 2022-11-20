import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "@shared/services/auth.service";

@Injectable({
    providedIn: "root",
})
export class NotLoggedInGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(["/"], {
                queryParams: {},
                queryParamsHandling: "merge",
            });
            return false;
        } else {
            return true;
        }
    }
}
