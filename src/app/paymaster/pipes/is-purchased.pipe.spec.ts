import { IsPurchasedPipe } from "./is-purchased.pipe";

describe("IsPurchasedPipe", () => {
    it("create an instance", () => {
        const pipe = new IsPurchasedPipe();
        expect(pipe).toBeTruthy();
    });
});
