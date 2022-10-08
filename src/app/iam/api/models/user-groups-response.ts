/* tslint:disable */
/* eslint-disable */
import { UserGroupResponse } from "./user-group-response";

/**
 * ユーザグループリストレスポンス
 */
export interface UserGroupsResponse {
    /**
     * ユーザグループリスト
     */
    userGroups: Array<UserGroupResponse>;
}
