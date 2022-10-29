import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SharedRadioButtonComponent } from "./shared-radio-button.component";

describe("SharedRadioButtonComponent", () => {
    let component: SharedRadioButtonComponent;
    let fixture: ComponentFixture<SharedRadioButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SharedRadioButtonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SharedRadioButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
