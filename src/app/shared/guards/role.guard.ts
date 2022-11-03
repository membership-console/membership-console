import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { UserAPIService } from "@iam/api/services";

import { Role } from "@shared/enums/role";
import { AlertService } from "@shared/services/alert.service";
import { UserService } from "@shared/services/user.service";

@UntilDestroy()
@Injectable({
    providedIn: "root",
})
export class RoleGuard implements CanActivate {
    constructor(
        private router: Router,
        private userAPIService: UserAPIService,
        private userService: UserService,
        private alertService: AlertService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const role = route.data["role"] as Role;

        return this.userService
            .checkIfLoginUserHasRole(role)
            .pipe(untilDestroyed(this))
            .pipe(
                map((result) => {
                    if (result) {
                        return true;
                    } else {
                        this.alertService.warn("その動作は許可されていません。");
                        this.router.navigate(["/dashboard"], {
                            queryParams: {},
                            queryParamsHandling: "merge",
                        });
                        return false;
                    }
                })
            );
    }
}
