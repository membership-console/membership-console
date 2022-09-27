import { TestBed } from "@angular/core/testing";

import { SafeHtmlPipe } from "./safe-html.pipe";

describe("SafeHtmlPipe", () => {
    let pipe: SafeHtmlPipe;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        pipe = TestBed.inject(SafeHtmlPipe);
    });

    it("create an instance", () => {
        expect(pipe).toBeTruthy();
    });
});
