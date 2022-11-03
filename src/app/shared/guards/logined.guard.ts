import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "@shared/services/auth.service";

@Injectable({
    providedIn: "root",
})
export class LoginedGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.getIsAuthenticated()) {
            this.router.navigate(["/dashboard"], {
                queryParams: {},
                queryParamsHandling: "merge",
            });
            return false;
        } else {
            return true;
        }
    }
}
