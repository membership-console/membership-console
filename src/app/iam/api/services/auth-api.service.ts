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
import { PasswordResetRequest } from "../models/password-reset-request";
import { RequestPasswordResetRequest } from "../models/request-password-reset-request";

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
     * Path part for operation requestPasswordReset
     */
    static readonly RequestPasswordResetPath = "/api/request_password_reset";

    /**
     * パスワードリセット要求API.
     *
     * パスワードリセット要求API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `requestPasswordReset()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    requestPasswordReset$Response(params: {
        context?: HttpContext;

        /**
         * パスワードリセット要求リクエスト
         */
        body: RequestPasswordResetRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            AuthAPIService.RequestPasswordResetPath,
            "post"
        );
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
     * パスワードリセット要求API.
     *
     * パスワードリセット要求API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `requestPasswordReset$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    requestPasswordReset(params: {
        context?: HttpContext;

        /**
         * パスワードリセット要求リクエスト
         */
        body: RequestPasswordResetRequest;
    }): Observable<void> {
        return this.requestPasswordReset$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation resetPassword
     */
    static readonly ResetPasswordPath = "/api/password_reset";

    /**
     * パスワードリセットAPI.
     *
     * パスワードリセットAPI
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `resetPassword()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    resetPassword$Response(params: {
        context?: HttpContext;

        /**
         * パスワードリセットリクエスト
         */
        body: PasswordResetRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(this.rootUrl, AuthAPIService.ResetPasswordPath, "post");
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
     * パスワードリセットAPI.
     *
     * パスワードリセットAPI
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `resetPassword$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    resetPassword(params: {
        context?: HttpContext;

        /**
         * パスワードリセットリクエスト
         */
        body: PasswordResetRequest;
    }): Observable<void> {
        return this.resetPassword$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
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
