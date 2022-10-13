import { Injectable } from "@angular/core";

import { Role } from "@shared/enums/role";
import { SelectOption } from "@shared/models/select-option";

@Injectable({
    providedIn: "root",
})
export class UserGroupService {
    constructor() {}

    /**
     * ロール選択肢リストを取得
     */
    getRoleSelectOptions(): SelectOption[] {
        return [
            {
                label: "IAMの閲覧者",
                value: Role.IAM_VIEWER,
            },
            {
                label: "IAMの管理者",
                value: Role.IAM_ADMIN,
            },
            {
                label: "購入申請の閲覧者",
                value: Role.PURCHASE_REQUEST_VIEWER,
            },
            {
                label: "購入申請の管理者",
                value: Role.PURCHASE_REQUEST_ADMIN,
            },
        ];
    }
}
