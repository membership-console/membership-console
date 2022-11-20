import { Injectable } from "@angular/core";

import { environment } from "@environments/environment";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor() {}

    /**
     * 認証済みかどうかをセットする
     *
     * @param isAuthenticated 認証済みか
     */
    setIsAuthenticated(isAuthenticated: boolean) {
        if (isAuthenticated) {
            localStorage.setItem(environment.IS_AUTHENTICATED_KEY, "true");
        } else {
            localStorage.removeItem(environment.IS_AUTHENTICATED_KEY);
        }
    }

    /**
     * 認証済みかチェック
     */
    isAuthenticated(): boolean {
        return localStorage.getItem(environment.IS_AUTHENTICATED_KEY) === "true";
    }
}
