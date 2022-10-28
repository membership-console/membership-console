/* tslint:disable */
/* eslint-disable */

/**
 * クライアントレスポンス
 */
export interface ClientResponse {
    /**
     * クライアントID
     */
    clientId: string;

    /**
     * ID
     */
    id: string;

    /**
     * クライアント名
     */
    name: string;

    /**
     * スコープリスト
     */
    scopes: Array<string>;
}
