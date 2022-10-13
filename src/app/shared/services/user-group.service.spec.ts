import { TestBed } from "@angular/core/testing";

import { UserGroupService } from "./user-group.service";

describe("UserGroupService", () => {
    let service: UserGroupService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserGroupService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
