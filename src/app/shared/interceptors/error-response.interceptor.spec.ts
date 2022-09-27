import { TestBed } from "@angular/core/testing";

import { ErrorResponseInterceptor } from "./error-response.interceptor";

describe("ErrorResponseInterceptor", () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [ErrorResponseInterceptor],
        })
    );

    it("should be created", () => {
        const interceptor: ErrorResponseInterceptor = TestBed.inject(ErrorResponseInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
