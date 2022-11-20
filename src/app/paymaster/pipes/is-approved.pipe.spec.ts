import { IsApprovedPipe } from "./is-approved.pipe";

describe("IsApprovedPipe", () => {
    it("create an instance", () => {
        const pipe = new IsApprovedPipe();
        expect(pipe).toBeTruthy();
    });
});
