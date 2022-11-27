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
export class PurchaseRequestAPIService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /**
     * Path part for operation getPurchaseRequest
     */
    static readonly GetPurchaseRequestPath = "/api/purchase-requests/{purchase_request_id}";

    /**
     * 購入申請取得API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getPurchaseRequest()` instead.
     *
     * This method doesn't expect any request body.
     */
    getPurchaseRequest$Response(params: {
        purchase_request_id: string;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<PurchaseRequestResponse>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            PurchaseRequestAPIService.GetPurchaseRequestPath,
            "get"
        );
        if (params) {
            rb.path("purchase_request_id", params.purchase_request_id, {});
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
     * To access the full response (for headers, for example), `getPurchaseRequest$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getPurchaseRequest(params: {
        purchase_request_id: string;
        context?: HttpContext;
    }): Observable<PurchaseRequestResponse> {
        return this.getPurchaseRequest$Response(params).pipe(
            map(
                (r: StrictHttpResponse<PurchaseRequestResponse>) =>
                    r.body as PurchaseRequestResponse
            )
        );
    }

    /**
     * Path part for operation updatePurchaseRequest
     */
    static readonly UpdatePurchaseRequestPath = "/api/purchase-requests/{purchase_request_id}";

    /**
     * 購入申請更新API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `updatePurchaseRequest()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    updatePurchaseRequest$Response(params: {
        purchase_request_id: string;
        context?: HttpContext;
        body?: PurchaseRequestUpsertRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            PurchaseRequestAPIService.UpdatePurchaseRequestPath,
            "put"
        );
        if (params) {
            rb.path("purchase_request_id", params.purchase_request_id, {});
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
     * To access the full response (for headers, for example), `updatePurchaseRequest$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    updatePurchaseRequest(params: {
        purchase_request_id: string;
        context?: HttpContext;
        body?: PurchaseRequestUpsertRequest;
    }): Observable<void> {
        return this.updatePurchaseRequest$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation deletePurchaseRequest
     */
    static readonly DeletePurchaseRequestPath = "/api/purchase-requests/{purchase_request_id}";

    /**
     * 購入申請削除API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `deletePurchaseRequest()` instead.
     *
     * This method doesn't expect any request body.
     */
    deletePurchaseRequest$Response(params: {
        purchase_request_id: string;
        context?: HttpContext;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            PurchaseRequestAPIService.DeletePurchaseRequestPath,
            "delete"
        );
        if (params) {
            rb.path("purchase_request_id", params.purchase_request_id, {});
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
     * To access the full response (for headers, for example), `deletePurchaseRequest$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    deletePurchaseRequest(params: {
        purchase_request_id: string;
        context?: HttpContext;
    }): Observable<void> {
        return this.deletePurchaseRequest$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation getPurchaseApplies
     */
    static readonly GetPurchaseAppliesPath = "/api/purchase-requests";

    /**
     * 購入申請リスト取得API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getPurchaseApplies()` instead.
     *
     * This method doesn't expect any request body.
     */
    getPurchaseApplies$Response(params?: {
        context?: HttpContext;
    }): Observable<StrictHttpResponse<PurchaseRequestsResponse>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            PurchaseRequestAPIService.GetPurchaseAppliesPath,
            "get"
        );
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
     * To access the full response (for headers, for example), `getPurchaseApplies$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getPurchaseApplies(params?: { context?: HttpContext }): Observable<PurchaseRequestsResponse> {
        return this.getPurchaseApplies$Response(params).pipe(
            map(
                (r: StrictHttpResponse<PurchaseRequestsResponse>) =>
                    r.body as PurchaseRequestsResponse
            )
        );
    }

    /**
     * Path part for operation createPurchaseRequest
     */
    static readonly CreatePurchaseRequestPath = "/api/purchase-requests";

    /**
     * 購入申請作成API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `createPurchaseRequest()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    createPurchaseRequest$Response(params?: {
        context?: HttpContext;
        body?: PurchaseRequestUpsertRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            PurchaseRequestAPIService.CreatePurchaseRequestPath,
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
     * 購入申請作成API.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `createPurchaseRequest$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    createPurchaseRequest(params?: {
        context?: HttpContext;
        body?: PurchaseRequestUpsertRequest;
    }): Observable<void> {
        return this.createPurchaseRequest$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }

    /**
     * Path part for operation updatePurchaseRequestStatus
     */
    static readonly UpdatePurchaseRequestStatusPath =
        "/api/purchase-requests/{purchase_request_id}/status";

    /**
     * 購入申請ステータス変更API.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `updatePurchaseRequestStatus()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    updatePurchaseRequestStatus$Response(params: {
        purchase_request_id: string;
        context?: HttpContext;
        body?: PurchaseRequestStatusUpdateRequest;
    }): Observable<StrictHttpResponse<void>> {
        const rb = new RequestBuilder(
            this.rootUrl,
            PurchaseRequestAPIService.UpdatePurchaseRequestStatusPath,
            "put"
        );
        if (params) {
            rb.path("purchase_request_id", params.purchase_request_id, {});
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
     * To access the full response (for headers, for example), `updatePurchaseRequestStatus$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    updatePurchaseRequestStatus(params: {
        purchase_request_id: string;
        context?: HttpContext;
        body?: PurchaseRequestStatusUpdateRequest;
    }): Observable<void> {
        return this.updatePurchaseRequestStatus$Response(params).pipe(
            map((r: StrictHttpResponse<void>) => r.body as void)
        );
    }
}
