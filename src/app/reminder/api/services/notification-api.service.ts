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

import { NotificationCreateRequest } from "../models/notification-create-request";
import { NotificationsResponse } from "../models/notifications-response";

/**
 * お知らせ
 */
@Injectable({
    providedIn: "root",
})
export class NotificationAPIService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /**
     * Path part for operation getNotifications
     */
    static readonly GetNotificationsPath = "/api/notifications";

    /**
     * お知らせリスト取得API.
     *
     * お知らせリスト取得API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getNotifications()` instead.
     *
     * This method doesn't expect any request body.
     */
    getNotifications$Response(params?: {
        /**
         * 未読のみ取得するか
         */
        onlyUnviewed?: boolean;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<NotificationsResponse>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            NotificationAPIService.GetNotificationsPath,
            "get"
        );
        if (params) {
            rb.query("onlyUnviewed", params.onlyUnviewed, {});
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
                    return r as StrictHttpResponse<NotificationsResponse>;
                })
            );
    }

    /**
     * お知らせリスト取得API.
     *
     * お知らせリスト取得API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `getNotifications$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getNotifications(params?: {
        /**
         * 未読のみ取得するか
         */
        onlyUnviewed?: boolean;
        context?: HttpContext;
    }): Observable<NotificationsResponse> {
        return this.getNotifications$Response(params).pipe(
            map((r: StrictHttpResponse<NotificationsResponse>) => r.body as NotificationsResponse)
        );
    }

    /**
     * Path part for operation createNotification
     */
    static readonly CreateNotificationPath = "/api/notifications";

    /**
     * お知らせ作成API.
     *
     * お知らせ作成API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `createNotification()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    createNotification$Response(params: {
        context?: HttpContext;

        /**
         * お知らせ作成リクエスト
         */
        body: NotificationCreateRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            NotificationAPIService.CreateNotificationPath,
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
     * お知らせ作成API.
     *
     * お知らせ作成API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `createNotification$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    createNotification(params: {
        context?: HttpContext;

        /**
         * お知らせ作成リクエスト
         */
        body: NotificationCreateRequest;
    }): Observable<void> {
        return this.createNotification$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation deleteNotification
     */
    static readonly DeleteNotificationPath = "/api/notifications/{notification_id}";

    /**
     * お知らせ削除API.
     *
     * お知らせ削除API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `deleteNotification()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteNotification$Response(params: {
        /**
         * お知らせID
         */
        notification_id: number;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            NotificationAPIService.DeleteNotificationPath,
            "delete"
        );
        if (params) {
            rb.path("notification_id", params.notification_id, {});
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
     * お知らせ削除API.
     *
     * お知らせ削除API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `deleteNotification$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteNotification(params: {
        /**
         * お知らせID
         */
        notification_id: number;
        context?: HttpContext;
    }): Observable<void> {
        return this.deleteNotification$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }
}
