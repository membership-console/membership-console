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

import { LoginUserPasswordUpdateRequest } from "../models/login-user-password-update-request";
import { UserResponse } from "../models/user-response";
import { UsersResponse } from "../models/users-response";

/**
 * ユーザ
 */
@Injectable({
    providedIn: "root",
})
export class UserAPIService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /**
     * Path part for operation updateLoginUserPassword
     */
    static readonly UpdateLoginUserPasswordPath = "/api/users/me/password";

    /**
     * ログインユーザパスワード更新API.
     *
     * ログインユーザパスワード更新API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `updateLoginUserPassword()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    updateLoginUserPassword$Response(params: {
        context?: HttpContext;

        /**
         * ログインユーザパスワード更新リクエスト
         */
        body: LoginUserPasswordUpdateRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            UserAPIService.UpdateLoginUserPasswordPath,
            "put"
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
     * ログインユーザパスワード更新API.
     *
     * ログインユーザパスワード更新API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `updateLoginUserPassword$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    updateLoginUserPassword(params: {
        context?: HttpContext;

        /**
         * ログインユーザパスワード更新リクエスト
         */
        body: LoginUserPasswordUpdateRequest;
    }): Observable<void> {
        return this.updateLoginUserPassword$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation getUsers
     */
    static readonly GetUsersPath = "/api/users";

    /**
     * ユーザリスト取得API.
     *
     * ユーザリスト取得API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getUsers()` instead.
     *
     * This method doesn't expect any request body.
     */
    getUsers$Response(params?: {
        context?: HttpContext;
    }): Observable<StrictHttpResponse<UsersResponse>> {
        const rb = new RequestBuilder(this.rootUrl, UserAPIService.GetUsersPath, "get");
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
                    return r as StrictHttpResponse<UsersResponse>;
                })
            );
    }

    /**
     * ユーザリスト取得API.
     *
     * ユーザリスト取得API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `getUsers$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getUsers(params?: { context?: HttpContext }): Observable<UsersResponse> {
        return this.getUsers$Response(params).pipe(
            map((r: StrictHttpResponse<UsersResponse>) => r.body as UsersResponse)
        );
    }

    /**
     * Path part for operation getUser
     */
    static readonly GetUserPath = "/api/users/{user_id}";

    /**
     * ユーザ取得API.
     *
     * ユーザ取得API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getUser()` instead.
     *
     * This method doesn't expect any request body.
     */
    getUser$Response(params: {
        /**
         * ユーザID
         */
        user_id: number;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<UserResponse>> {
        const rb = new RequestBuilder(this.rootUrl, UserAPIService.GetUserPath, "get");
        if (params) {
            rb.path("user_id", params.user_id, {});
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
                    return r as StrictHttpResponse<UserResponse>;
                })
            );
    }

    /**
     * ユーザ取得API.
     *
     * ユーザ取得API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `getUser$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getUser(params: {
        /**
         * ユーザID
         */
        user_id: number;
        context?: HttpContext;
    }): Observable<UserResponse> {
        return this.getUser$Response(params).pipe(
            map((r: StrictHttpResponse<UserResponse>) => r.body as UserResponse)
        );
    }

    /**
     * Path part for operation deleteUser
     */
    static readonly DeleteUserPath = "/api/users/{user_id}";

    /**
     * ユーザ削除API.
     *
     * ユーザ削除API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `deleteUser()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteUser$Response(params: {
        /**
         * ユーザID
         */
        user_id: number;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(this.rootUrl, UserAPIService.DeleteUserPath, "delete");
        if (params) {
            rb.path("user_id", params.user_id, {});
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
     * ユーザ削除API.
     *
     * ユーザ削除API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `deleteUser$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteUser(params: {
        /**
         * ユーザID
         */
        user_id: number;
        context?: HttpContext;
    }): Observable<void> {
        return this.deleteUser$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation getLoginUser
     */
    static readonly GetLoginUserPath = "/api/users/me";

    /**
     * ログインユーザ取得API.
     *
     * ログインユーザ取得API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getLoginUser()` instead.
     *
     * This method doesn't expect any request body.
     */
    getLoginUser$Response(params?: {
        context?: HttpContext;
    }): Observable<StrictHttpResponse<UserResponse>> {
        const rb = new RequestBuilder(this.rootUrl, UserAPIService.GetLoginUserPath, "get");
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
                    return r as StrictHttpResponse<UserResponse>;
                })
            );
    }

    /**
     * ログインユーザ取得API.
     *
     * ログインユーザ取得API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `getLoginUser$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getLoginUser(params?: { context?: HttpContext }): Observable<UserResponse> {
        return this.getLoginUser$Response(params).pipe(
            map((r: StrictHttpResponse<UserResponse>) => r.body as UserResponse)
        );
    }
}
