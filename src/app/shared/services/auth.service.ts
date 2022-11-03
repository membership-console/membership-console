import { Injectable } from "@angular/core";

import { environment } from "@environments/environment";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor() {}

    setIsAuthenticated(isAuthenticated: boolean) {
        if (isAuthenticated) {
            localStorage.setItem(environment.IS_AUTHENTICATED_KEY, "true");
        } else {
            localStorage.removeItem(environment.IS_AUTHENTICATED_KEY);
        }
    }

    getIsAuthenticated(): boolean {
        return localStorage.getItem(environment.IS_AUTHENTICATED_KEY) === "true";
    }
}
