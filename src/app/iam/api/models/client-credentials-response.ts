/* tslint:disable */
/* eslint-disable */

/**
 * クライアント認証情報レスポンス
 */
export interface ClientCredentialsResponse {
    /**
     * クライアントID
     */
    clientId: string;

    /**
     * クライアントシークレット
     */
    clientSecret: string;
}
