/* tslint:disable */
/* eslint-disable */

/**
 * ユーザグループ作成/更新リクエスト
 */
export interface UserGroupUpsertRequest {
    /**
     * ユーザグループ名
     */
    name: string;

    /**
     * ロールリスト
     */
    roles: Array<number>;
}
