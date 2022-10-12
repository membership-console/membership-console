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

type ErrorResponse = {
    code: number;
    message: string;
};

@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {
    constructor(private alertService: AlertService, private router: Router) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                const response = this.extractErrorResponseByBody(error);

                // 不正な認証情報
                if (error.status === 401) {
                    this.router.navigate(["/login"], {
                        queryParamsHandling: "merge",
                    });
                } else if (error.status === 403) {
                    this.navigateErrorPage(403);
                }

                // 予期せぬエラーが発生した場合は500ページにリダイレクト
                if (response.code === 500) {
                    this.navigateErrorPage(500);
                }

                // アラートメッセージを表示
                this.alertService.error(response.message);

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
            return typeof error.error === "string" ? JSON.parse(error.error) : error.error;
        } catch (_) {
            return {
                code: 500,
                message:
                    "予期しないエラーが発生しました。問題が解決しない場合は、管理者までお問い合わせください。",
            };
        }
    }
}
