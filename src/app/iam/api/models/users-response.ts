/* tslint:disable */
/* eslint-disable */
import { UserResponse } from "./user-response";

/**
 * ユーザリストレスポンス
 */
export interface UsersResponse {
    /**
     * ユーザリスト
     */
    users: Array<UserResponse>;
}
