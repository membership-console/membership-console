/* tslint:disable */
/* eslint-disable */
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpContext } from "@angular/common/http";
import { BaseService } from "../base-service";
import { ApiConfiguration } from "../api-configuration";
import { StrictHttpResponse } from "../strict-http-response";
import { RequestBuilder } from "../request-builder";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

import { ClientCredentialsResponse } from "../models/client-credentials-response";
import { ClientUpsertRequest } from "../models/client-upsert-request";
import { ClientsResponse } from "../models/clients-response";

/**
 * クライアント
 */
@Injectable({
    providedIn: "root",
})
export class ClientAPIService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /**
     * Path part for operation updateClient
     */
    static readonly UpdateClientPath = "/api/clients/{id}";

    /**
     * クライアント更新API.
     *
     * クライアント更新API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `updateClient()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    updateClient$Response(params: {
        /**
         * ID
         */
        id: string;
        context?: HttpContext;

        /**
         * クライアント更新リクエスト
         */
        body: ClientUpsertRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(this.rootUrl, ClientAPIService.UpdateClientPath, "put");
        if (params) {
            rb.path("id", params.id, {});
            rb.body(params.body, "application/json");
        }

        return this.http
            .request(
                rb.build({
                    responseType: "text",
                    accept: "*/*",
                    context: params?.context,
                })
            )
            .pipe(
                filter((r: any) => r instanceof HttpResponse),
                map((r: HttpResponse<any>) => {
                    return (r as HttpResponse<any>).clone({
                        body: undefined,
                    }) as StrictHttpResponse<void>;
                })
            );
    }

    /**
     * クライアント更新API.
     *
     * クライアント更新API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `updateClient$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    updateClient(params: {
        /**
         * ID
         */
        id: string;
        context?: HttpContext;

        /**
         * クライアント更新リクエスト
         */
        body: ClientUpsertRequest;
    }): Observable<void> {
        return this.updateClient$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation deleteClient
     */
    static readonly DeleteClientPath = "/api/clients/{id}";

    /**
     * クライアント削除API.
     *
     * クライアント削除API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `deleteClient()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteClient$Response(params: {
        /**
         * ID
         */
        id: string;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(this.rootUrl, ClientAPIService.DeleteClientPath, "delete");
        if (params) {
            rb.path("id", params.id, {});
        }

        return this.http
            .request(
                rb.build({
                    responseType: "text",
                    accept: "*/*",
                    context: params?.context,
                })
            )
            .pipe(
                filter((r: any) => r instanceof HttpResponse),
                map((r: HttpResponse<any>) => {
                    return (r as HttpResponse<any>).clone({
                        body: undefined,
                    }) as StrictHttpResponse<void>;
                })
            );
    }

    /**
     * クライアント削除API.
     *
     * クライアント削除API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `deleteClient$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteClient(params: {
        /**
         * ID
         */
        id: string;
        context?: HttpContext;
    }): Observable<void> {
        return this.deleteClient$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation getClients
     */
    static readonly GetClientsPath = "/api/clients";

    /**
     * クライアントリスト取得API.
     *
     * クライアントリスト取得API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getClients()` instead.
     *
     * This method doesn't expect any request body.
     */
    getClients$Response(params?: {
        context?: HttpContext;
    }): Observable<StrictHttpResponse<ClientsResponse>> {
        const rb = new RequestBuilder(this.rootUrl, ClientAPIService.GetClientsPath, "get");
        if (params) {
        }

        return this.http
            .request(
                rb.build({
                    responseType: "json",
                    accept: "application/json",
                    context: params?.context,
                })
            )
            .pipe(
                filter((r: any) => r instanceof HttpResponse),
                map((r: HttpResponse<any>) => {
                    return r as StrictHttpResponse<ClientsResponse>;
                })
            );
    }

    /**
     * クライアントリスト取得API.
     *
     * クライアントリスト取得API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `getClients$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getClients(params?: { context?: HttpContext }): Observable<ClientsResponse> {
        return this.getClients$Response(params).pipe(
            map((r: StrictHttpResponse<ClientsResponse>) => r.body as ClientsResponse)
        );
    }

    /**
     * Path part for operation createClient
     */
    static readonly CreateClientPath = "/api/clients";

    /**
     * クライアント作成API.
     *
     * クライアント作成API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `createClient()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    createClient$Response(params: {
        context?: HttpContext;

        /**
         * クライアント作成リクエスト
         */
        body: ClientUpsertRequest;
    }): Observable<StrictHttpResponse<ClientCredentialsResponse>> {
        const rb = new RequestBuilder(this.rootUrl, ClientAPIService.CreateClientPath, "post");
        if (params) {
            rb.body(params.body, "application/json");
        }

        return this.http
            .request(
                rb.build({
                    responseType: "json",
                    accept: "application/json",
                    context: params?.context,
                })
            )
            .pipe(
                filter((r: any) => r instanceof HttpResponse),
                map((r: HttpResponse<any>) => {
                    return r as StrictHttpResponse<ClientCredentialsResponse>;
                })
            );
    }

    /**
     * クライアント作成API.
     *
     * クライアント作成API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `createClient$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    createClient(params: {
        context?: HttpContext;

        /**
         * クライアント作成リクエスト
         */
        body: ClientUpsertRequest;
    }): Observable<ClientCredentialsResponse> {
        return this.createClient$Response(params).pipe(
            map(
                (r: StrictHttpResponse<ClientCredentialsResponse>) =>
                    r.body as ClientCredentialsResponse
            )
        );
    }
}
