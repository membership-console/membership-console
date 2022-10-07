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

import { UserGroupResponse } from "../models/user-group-response";
import { UserGroupUpsertRequest } from "../models/user-group-upsert-request";
import { UserGroupsResponse } from "../models/user-groups-response";

/**
 * ユーザグループ
 */
@Injectable({
    providedIn: "root",
})
export class UserGroupAPIService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /**
     * Path part for operation getUserGroups
     */
    static readonly GetUserGroupsPath = "/api/user-groups";

    /**
     * ユーザグループリスト取得API.
     *
     * ユーザグループリスト取得API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getUserGroups()` instead.
     *
     * This method doesn't expect any request body.
     */
    getUserGroups$Response(params?: {
        context?: HttpContext;
    }): Observable<StrictHttpResponse<UserGroupsResponse>> {
        const rb = new RequestBuilder(this.rootUrl, UserGroupAPIService.GetUserGroupsPath, "get");
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
                    return r as StrictHttpResponse<UserGroupsResponse>;
                })
            );
    }

    /**
     * ユーザグループリスト取得API.
     *
     * ユーザグループリスト取得API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `getUserGroups$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getUserGroups(params?: { context?: HttpContext }): Observable<UserGroupsResponse> {
        return this.getUserGroups$Response(params).pipe(
            map((r: StrictHttpResponse<UserGroupsResponse>) => r.body as UserGroupsResponse)
        );
    }

    /**
     * Path part for operation createUserGroup
     */
    static readonly CreateUserGroupPath = "/api/user-groups";

    /**
     * ユーザグループ作成API.
     *
     * ユーザグループ作成API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `createUserGroup()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    createUserGroup$Response(params: {
        context?: HttpContext;

        /**
         * ユーザグループ作成リクエスト
         */
        body: UserGroupUpsertRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            UserGroupAPIService.CreateUserGroupPath,
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
     * ユーザグループ作成API.
     *
     * ユーザグループ作成API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `createUserGroup$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    createUserGroup(params: {
        context?: HttpContext;

        /**
         * ユーザグループ作成リクエスト
         */
        body: UserGroupUpsertRequest;
    }): Observable<void> {
        return this.createUserGroup$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation getUserGroup
     */
    static readonly GetUserGroupPath = "/api/user-groups/{user_group_id}";

    /**
     * ユーザグループ取得API.
     *
     * ユーザグループ取得API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getUserGroup()` instead.
     *
     * This method doesn't expect any request body.
     */
    getUserGroup$Response(params: {
        /**
         * ユーザグループID
         */
        user_group_id: number;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<UserGroupResponse>> {
        const rb = new RequestBuilder(this.rootUrl, UserGroupAPIService.GetUserGroupPath, "get");
        if (params) {
            rb.path("user_group_id", params.user_group_id, {});
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
                    return r as StrictHttpResponse<UserGroupResponse>;
                })
            );
    }

    /**
     * ユーザグループ取得API.
     *
     * ユーザグループ取得API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `getUserGroup$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getUserGroup(params: {
        /**
         * ユーザグループID
         */
        user_group_id: number;
        context?: HttpContext;
    }): Observable<UserGroupResponse> {
        return this.getUserGroup$Response(params).pipe(
            map((r: StrictHttpResponse<UserGroupResponse>) => r.body as UserGroupResponse)
        );
    }

    /**
     * Path part for operation deleteUserGroup
     */
    static readonly DeleteUserGroupPath = "/api/user-groups/{user_group_id}";

    /**
     * ユーザグループ削除API.
     *
     * ユーザグループ削除API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `deleteUserGroup()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteUserGroup$Response(params: {
        /**
         * ユーザグループID
         */
        user_group_id: number;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            UserGroupAPIService.DeleteUserGroupPath,
            "delete"
        );
        if (params) {
            rb.path("user_group_id", params.user_group_id, {});
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
     * ユーザグループ削除API.
     *
     * ユーザグループ削除API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `deleteUserGroup$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteUserGroup(params: {
        /**
         * ユーザグループID
         */
        user_group_id: number;
        context?: HttpContext;
    }): Observable<void> {
        return this.deleteUserGroup$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }
}
