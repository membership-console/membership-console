import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpXsrfTokenExtractor,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class XsrfInterceptor implements HttpInterceptor {
    constructor(private httpXsrfTokenExtractor: HttpXsrfTokenExtractor) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        request = request.clone({
            headers: request.headers.set(
                "X-XSRF-TOKEN",
                this.httpXsrfTokenExtractor.getToken() as string
            ),
        });
        return next.handle(request);
    }
}
