import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { AlertService } from "@shared/services/alert.service";
import { AuthService } from "@shared/services/auth.service";

type ErrorResponse = {
    code: number;
    message: string;
};

@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {
    constructor(
        private alertService: AlertService,
        private router: Router,
        private authService: AuthService
    ) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                const response = this.extractErrorResponseByBody(error);

                // エラーハンドリング
                if (error.status === 401) {
                    this.authService.setIsAuthenticated(false);
                    this.router.navigate(["/login"], {
                        queryParams: {
                            continue: this.router.url.split("?")[0],
                        },
                        queryParamsHandling: "merge",
                    });
                } else if (error.status === 403) {
                    this.navigateErrorPage(403);
                } else if (error.status === 404) {
                    this.navigateErrorPage(404);
                } else if (error.status === 500) {
                    this.navigateErrorPage(500);
                }

                // アラートメッセージを表示
                this.alertService.error(`${response.code}: ${response.message}`);

                throw response.message;
            })
        );
    }

    /**
     * エラーページへ遷移
     *
     * @param status ステータスコード
     */
    navigateErrorPage(status: number) {
        this.router.navigate(["/error", status], {
            queryParamsHandling: "merge",
        });
    }

    /**
     * エラーレスポンスを抽出
     *
     * @param error error
     */
    extractErrorResponseByBody(error: HttpErrorResponse): ErrorResponse {
        try {
            const responseBody =
                typeof error.error === "string" ? JSON.parse(error.error) : error.error;
            responseBody.code = responseBody.code ? responseBody.code : 0;
            responseBody.message = responseBody.message
                ? responseBody.message
                : "予期しないエラーが発生しました。問題が解決しない場合は、管理者までお問い合わせください。";
            return responseBody;
        } catch (_) {
            return {
                code: 0,
                message:
                    "予期しないエラーが発生しました。問題が解決しない場合は、管理者までお問い合わせください。",
            };
        }
    }
}
