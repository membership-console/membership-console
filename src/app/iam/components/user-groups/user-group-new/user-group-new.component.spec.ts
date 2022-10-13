import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserGroupNewComponent } from "./user-group-new.component";

describe("UserGroupNewComponent", () => {
    let component: UserGroupNewComponent;
    let fixture: ComponentFixture<UserGroupNewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserGroupNewComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(UserGroupNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
