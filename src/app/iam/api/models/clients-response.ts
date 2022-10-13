/* tslint:disable */
/* eslint-disable */
import { ClientResponse } from "./client-response";

/**
 * クライアントリストレスポンス
 */
export interface ClientsResponse {
    /**
     * クライアントリストレスポンス
     */
    clients: Array<ClientResponse>;
}
