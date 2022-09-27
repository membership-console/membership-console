import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

import { LoadingIndicatorService } from "@shared/services/loading-indicator.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private loadingIndicatorService: LoadingIndicatorService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const loadingRef = this.loadingIndicatorService.open();
        return next.handle(request).pipe(finalize(() => loadingRef.close()));
    }
}
