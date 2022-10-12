import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PasswordChangeComponent } from "./password-change.component";

describe("PasswordChangeComponent", () => {
    let component: PasswordChangeComponent;
    let fixture: ComponentFixture<PasswordChangeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PasswordChangeComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PasswordChangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
