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
                label: "IAMの管理者",
                value: Role.IAM_ADMIN,
            },
            {
                label: "会計システムの管理者",
                value: Role.PAYMASTER_ADMIN,
            },
            {
                label: "リマインダーの管理者",
                value: Role.REMINDER_ADMIN,
            },
        ];
    }
}
