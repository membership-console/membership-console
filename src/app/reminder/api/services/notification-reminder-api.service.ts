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

import { NotificationReminderCreateRequest } from "../models/notification-reminder-create-request";

/**
 * リマインダー
 */
@Injectable({
    providedIn: "root",
})
export class NotificationReminderAPIService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /**
     * Path part for operation createNotificationReminder
     */
    static readonly CreateNotificationReminderPath =
        "/api/notifications/{notification_id}/reminders";

    /**
     * リマインダー作成API.
     *
     * リマインダー作成API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `createNotificationReminder()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    createNotificationReminder$Response(params: {
        /**
         * お知らせID
         */
        notification_id: number;
        context?: HttpContext;

        /**
         * リマインダー作成リクエスト
         */
        body: NotificationReminderCreateRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            NotificationReminderAPIService.CreateNotificationReminderPath,
            "post"
        );
        if (params) {
            rb.path("notification_id", params.notification_id, {});
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
     * リマインダー作成API.
     *
     * リマインダー作成API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `createNotificationReminder$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    createNotificationReminder(params: {
        /**
         * お知らせID
         */
        notification_id: number;
        context?: HttpContext;

        /**
         * リマインダー作成リクエスト
         */
        body: NotificationReminderCreateRequest;
    }): Observable<void> {
        return this.createNotificationReminder$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation deleteNotificationReminder
     */
    static readonly DeleteNotificationReminderPath =
        "/api/notifications/{notification_id}/reminders/{notification_reminder_id}";

    /**
     * リマインダー削除API.
     *
     * リマインダー削除API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `deleteNotificationReminder()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteNotificationReminder$Response(params: {
        /**
         * お知らせID
         */
        notification_id: number;

        /**
         * リマインダーID
         */
        notification_reminder_id: number;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            NotificationReminderAPIService.DeleteNotificationReminderPath,
            "delete"
        );
        if (params) {
            rb.path("notification_id", params.notification_id, {});
            rb.path("notification_reminder_id", params.notification_reminder_id, {});
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
     * リマインダー削除API.
     *
     * リマインダー削除API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `deleteNotificationReminder$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteNotificationReminder(params: {
        /**
         * お知らせID
         */
        notification_id: number;

        /**
         * リマインダーID
         */
        notification_reminder_id: number;
        context?: HttpContext;
    }): Observable<void> {
        return this.deleteNotificationReminder$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }
}
