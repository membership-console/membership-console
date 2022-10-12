import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SharedAutocompleteSelectComponent } from "./shared-autocomplete-select.component";

describe("SharedAutocompleteSelectComponent", () => {
    let component: SharedAutocompleteSelectComponent;
    let fixture: ComponentFixture<SharedAutocompleteSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SharedAutocompleteSelectComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedAutocompleteSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
