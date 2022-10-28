import { Injectable } from "@angular/core";

import { SelectOption } from "@shared/models/select-option";

@Injectable({
    providedIn: "root",
})
export class ClientService {
    constructor() {}

    /**
     * スコープ選択肢リストを取得
     */
    getScopeSelectOptions(): SelectOption[] {
        return [
            {
                label: "user:read",
                value: "user:read",
            },
            {
                label: "email",
                value: "email",
            },
        ];
    }
}
