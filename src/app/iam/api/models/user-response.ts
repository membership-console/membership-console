/* tslint:disable */
/* eslint-disable */
import { UserGroupResponse } from "./user-group-response";

/**
 * ユーザレスポンス
 */
export interface UserResponse {
    /**
     * メールアドレス
     */
    email: string;

    /**
     * 入学年度
     */
    entranceYear: number;

    /**
     * ファーストネーム
     */
    firstName: string;

    /**
     * ユーザID
     */
    id: number;

    /**
     * ラストネーム
     */
    lastName: string;

    /**
     * ユーザグループリスト
     */
    userGroups: Array<UserGroupResponse>;
}
