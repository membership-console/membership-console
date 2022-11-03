import { TestBed } from "@angular/core/testing";

import { LoginedGuard } from "./logined.guard";

describe("LoginedGuard", () => {
    let guard: LoginedGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(LoginedGuard);
    });

    it("should be created", () => {
        expect(guard).toBeTruthy();
    });
});
