import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

import { LoadingIndicatorService } from "@shared/services/loading-indicator.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private loadingIndicatorService: LoadingIndicatorService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.loadingIndicatorService.open();
        return next.handle(request).pipe(
            finalize(() => {
                // 連続かつ直列でAPI呼び出しする場合にインジケータが表示・非表示を繰り返す問題を解消するために、
                // 通信終了後10msだけ遅延させる（HTTP通信していない時間が生まれるとインジケータが消えるため）
                setTimeout(() => {
                    this.loadingIndicatorService.close();
                }, 10);
            })
        );
    }
}
