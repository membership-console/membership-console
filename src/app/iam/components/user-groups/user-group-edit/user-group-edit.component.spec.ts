import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserGroupEditComponent } from "./user-group-edit.component";

describe("UserGroupEditComponent", () => {
    let component: UserGroupEditComponent;
    let fixture: ComponentFixture<UserGroupEditComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserGroupEditComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(UserGroupEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
