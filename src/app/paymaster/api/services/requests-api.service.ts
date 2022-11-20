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

import { PurchaseRequestResponse } from "../models/purchase-request-response";
import { PurchaseRequestStatusUpdateRequest } from "../models/purchase-request-status-update-request";
import { PurchaseRequestUpsertRequest } from "../models/purchase-request-upsert-request";
import { PurchaseRequestsResponse } from "../models/purchase-requests-response";

@Injectable({
    providedIn: "root",
})
export class RequestsAPIService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /**
     * Path part for operation getApiRequest
     */
    static readonly GetApiRequestPath = "/api/purchase-requests/{request_id}";

    /**
     * 購入申請取得API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getApiRequest()` instead.
     *
     * This method doesn't expect any request body.
     */
    getApiRequest$Response(params: {
        request_id: string;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<PurchaseRequestResponse>> {
        const rb = new RequestBuilder(this.rootUrl, RequestsAPIService.GetApiRequestPath, "get");
        if (params) {
            rb.path("request_id", params.request_id, {});
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
                    return r as StrictHttpResponse<PurchaseRequestResponse>;
                })
            );
    }

    /**
     * 購入申請取得API.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `getApiRequest$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getApiRequest(params: {
        request_id: string;
        context?: HttpContext;
    }): Observable<PurchaseRequestResponse> {
        return this.getApiRequest$Response(params).pipe(
            map(
                (r: StrictHttpResponse<PurchaseRequestResponse>) =>
                    r.body as PurchaseRequestResponse
            )
        );
    }

    /**
     * Path part for operation putApiRequestRequestId
     */
    static readonly PutApiRequestRequestIdPath = "/api/purchase-requests/{request_id}";

    /**
     * 購入申請更新API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `putApiRequestRequestId()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    putApiRequestRequestId$Response(params: {
        request_id: string;
        context?: HttpContext;
        body?: PurchaseRequestUpsertRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            RequestsAPIService.PutApiRequestRequestIdPath,
            "put"
        );
        if (params) {
            rb.path("request_id", params.request_id, {});
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
     * 購入申請更新API.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `putApiRequestRequestId$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    putApiRequestRequestId(params: {
        request_id: string;
        context?: HttpContext;
        body?: PurchaseRequestUpsertRequest;
    }): Observable<void> {
        return this.putApiRequestRequestId$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation deleteApiRequestRequestId
     */
    static readonly DeleteApiRequestRequestIdPath = "/api/purchase-requests/{request_id}";

    /**
     * 購入申請削除API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `deleteApiRequestRequestId()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteApiRequestRequestId$Response(params: {
        request_id: string;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            RequestsAPIService.DeleteApiRequestRequestIdPath,
            "delete"
        );
        if (params) {
            rb.path("request_id", params.request_id, {});
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
     * 購入申請削除API.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `deleteApiRequestRequestId$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteApiRequestRequestId(params: {
        request_id: string;
        context?: HttpContext;
    }): Observable<void> {
        return this.deleteApiRequestRequestId$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation getApiRequests
     */
    static readonly GetApiRequestsPath = "/api/purchase-requests";

    /**
     * 購入申請リスト取得API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getApiRequests()` instead.
     *
     * This method doesn't expect any request body.
     */
    getApiRequests$Response(params?: {
        context?: HttpContext;
    }): Observable<StrictHttpResponse<PurchaseRequestsResponse>> {
        const rb = new RequestBuilder(this.rootUrl, RequestsAPIService.GetApiRequestsPath, "get");
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
                    return r as StrictHttpResponse<PurchaseRequestsResponse>;
                })
            );
    }

    /**
     * 購入申請リスト取得API.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `getApiRequests$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getApiRequests(params?: { context?: HttpContext }): Observable<PurchaseRequestsResponse> {
        return this.getApiRequests$Response(params).pipe(
            map(
                (r: StrictHttpResponse<PurchaseRequestsResponse>) =>
                    r.body as PurchaseRequestsResponse
            )
        );
    }

    /**
     * Path part for operation postApiRequests
     */
    static readonly PostApiRequestsPath = "/api/purchase-requests";

    /**
     * 購入申請作成API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `postApiRequests()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    postApiRequests$Response(params?: {
        context?: HttpContext;
        body?: PurchaseRequestUpsertRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(this.rootUrl, RequestsAPIService.PostApiRequestsPath, "post");
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
     * 購入申請作成API.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `postApiRequests$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    postApiRequests(params?: {
        context?: HttpContext;
        body?: PurchaseRequestUpsertRequest;
    }): Observable<void> {
        return this.postApiRequests$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation putApiRequestsRequestIdStatus
     */
    static readonly PutApiRequestsRequestIdStatusPath =
        "/api/purchase-requests/{request_id}/status";

    /**
     * 購入申請ステータス変更API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `putApiRequestsRequestIdStatus()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    putApiRequestsRequestIdStatus$Response(params: {
        request_id: string;
        context?: HttpContext;
        body?: PurchaseRequestStatusUpdateRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            RequestsAPIService.PutApiRequestsRequestIdStatusPath,
            "put"
        );
        if (params) {
            rb.path("request_id", params.request_id, {});
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
     * 購入申請ステータス変更API.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `putApiRequestsRequestIdStatus$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    putApiRequestsRequestIdStatus(params: {
        request_id: string;
        context?: HttpContext;
        body?: PurchaseRequestStatusUpdateRequest;
    }): Observable<void> {
        return this.putApiRequestsRequestIdStatus$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }
}
