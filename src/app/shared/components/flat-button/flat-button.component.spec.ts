import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FlatButtonComponent } from "./flat-button.component";

describe("FlatButtonComponent", () => {
    let component: FlatButtonComponent;
    let fixture: ComponentFixture<FlatButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FlatButtonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FlatButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
