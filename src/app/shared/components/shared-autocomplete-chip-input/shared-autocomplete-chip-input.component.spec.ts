import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SharedAutocompleteChipInputComponent } from "./shared-autocomplete-chip-input.component";

describe("SharedAutocompleteChipInputComponent", () => {
    let component: SharedAutocompleteChipInputComponent;
    let fixture: ComponentFixture<SharedAutocompleteChipInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SharedAutocompleteChipInputComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedAutocompleteChipInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
