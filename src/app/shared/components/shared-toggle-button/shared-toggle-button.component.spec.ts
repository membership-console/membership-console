import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SharedToggleButtonComponent } from "./shared-toggle-button.component";

describe("SharedToggleButtonComponent", () => {
    let component: SharedToggleButtonComponent;
    let fixture: ComponentFixture<SharedToggleButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SharedToggleButtonComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedToggleButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
