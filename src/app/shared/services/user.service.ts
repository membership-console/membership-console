import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class UserService {
    constructor() {}

    /**
     * 有効な入学年度リストを取得
     */
    getValidEntranceYears(): number[] {
        const currentYear: number = new Date().getFullYear();
        return [...Array(8)].map((_: undefined, idx: number) => idx + currentYear - 7);
    }
}
