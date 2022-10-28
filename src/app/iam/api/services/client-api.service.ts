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
}
