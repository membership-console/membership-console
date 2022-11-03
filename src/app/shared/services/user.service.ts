import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { UserResponse } from "@iam/api/models";
import { UserAPIService } from "@iam/api/services";

import { Role } from "@shared/enums/role";

@Injectable({
    providedIn: "root",
})
export class UserService {
    /**
     * ログインユーザ
     */
    private loginUser = new BehaviorSubject<UserResponse>({} as UserResponse);

    constructor(private userAPIService: UserAPIService) {}

    /**
     * 有効な入学年度リストを取得
     */
    getValidEntranceYears(): number[] {
        const currentYear: number = new Date().getFullYear();
        return [...Array(8)].map((_: undefined, idx: number) => idx + currentYear - 7);
    }

    /**
     * ログインユーザをセット
     *
     * @param loginUser ログインユーザ
     */
    setLoginUser(loginUser: UserResponse) {
        this.loginUser.next(loginUser);
    }

    /**
     * ログインユーザがロールを持つかチェック
     *
     * @param role ロール
     */
    checkIfLoginUserHasRole(role: Role): Observable<boolean> {
        const cachedLoginUser = this.loginUser.getValue();
        if (Object.keys(cachedLoginUser).length === 0) {
            return this.userAPIService.getLoginUser().pipe(
                map((response) => {
                    this.loginUser.next(response);
                    return this.checkIfUserHasRole(response, role);
                })
            );
        } else {
            return of(this.checkIfUserHasRole(cachedLoginUser, role));
        }
    }

    /**
     * ユーザがロールを持つかチェック
     *
     * @param user ユーザ
     * @param role ロール
     */
    checkIfUserHasRole(user: UserResponse, role: Role): boolean {
        const roles = user.userGroups.map((userGroup) => userGroup.roles).flat();
        if (roles.includes(Role.IAM_ADMIN)) {
            roles.push(Role.IAM_VIEWER);
        }
        if (roles.includes(Role.PURCHASE_REQUEST_ADMIN)) {
            roles.push(Role.PURCHASE_REQUEST_VIEWER);
        }

        return roles.includes(role);
    }
}
