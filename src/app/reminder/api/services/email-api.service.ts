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

import { EmailSendRequest } from "../models/email-send-request";

/**
 * Eメール
 */
@Injectable({
    providedIn: "root",
})
export class EmailAPIService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /**
     * Path part for operation sendEmail
     */
    static readonly SendEmailPath = "/api/email/send";

    /**
     * メール送信API.
     *
     * メール送信API
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `sendEmail()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    sendEmail$Response(params: {
        context?: HttpContext;

        /**
         * メール送信リクエスト
         */
        body: EmailSendRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(this.rootUrl, EmailAPIService.SendEmailPath, "post");
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
     * メール送信API.
     *
     * メール送信API
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `sendEmail$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    sendEmail(params: {
        context?: HttpContext;

        /**
         * メール送信リクエスト
         */
        body: EmailSendRequest;
    }): Observable<void> {
        return this.sendEmail$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }
}
