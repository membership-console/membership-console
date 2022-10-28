/* tslint:disable */
/* eslint-disable */

/**
 * クライアント作成/更新リクエスト
 */
export interface ClientUpsertRequest {
    /**
     * クライアント名
     */
    name: string;

    /**
     * スコープリスト
     */
    scopes: Array<string>;
}
