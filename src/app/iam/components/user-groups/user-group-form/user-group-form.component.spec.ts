import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserGroupFormComponent } from "./user-group-form.component";

describe("UserGroupFormComponent", () => {
    let component: UserGroupFormComponent;
    let fixture: ComponentFixture<UserGroupFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserGroupFormComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(UserGroupFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
