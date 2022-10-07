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

import { LoginRequest } from "../models/login-request";

/**
 * 認証
 */
@Injectable({
    providedIn: "root",
})
export class AuthAPIService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /**
     * Path part for operation logout
     */
    static readonly LogoutPath = "/api/logout";

    /**
     * ログアウトAPI.
     *
     * ログアウトAPI
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logout()` instead.
     *
     * This method doesn't expect any request body.
     */
    logout$Response(params?: { context?: HttpContext }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(this.rootUrl, AuthAPIService.LogoutPath, "post");
        if (params) {
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
     * ログアウトAPI.
     *
     * ログアウトAPI
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `logout$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logout(params?: { context?: HttpContext }): Observable<void> {
        return this.logout$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation login
     */
    static readonly LoginPath = "/api/login";

    /**
     * ログインAPI.
     *
     * ログインAPI
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `login()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    login$Response(params: {
        context?: HttpContext;

        /**
         * ログインリクエスト
         */
        body: LoginRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(this.rootUrl, AuthAPIService.LoginPath, "post");
        if (params) {
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
     * ログインAPI.
     *
     * ログインAPI
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `login$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    login(params: {
        context?: HttpContext;

        /**
         * ログインリクエスト
         */
        body: LoginRequest;
    }): Observable<void> {
        return this.login$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }
}
