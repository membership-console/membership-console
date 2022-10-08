/* tslint:disable */
/* eslint-disable */

/**
 * ユーザグループレスポンス
 */
export interface UserGroupResponse {
    /**
     * ユーザグループID
     */
    id: number;

    /**
     * ユーザグループ名
     */
    name: string;

    /**
     * ロールリスト
     */
    roles: Array<number>;
}
