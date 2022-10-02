import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SharedTextareaComponent } from "./shared-textarea.component";

describe("SharedTextareaComponent", () => {
    let component: SharedTextareaComponent;
    let fixture: ComponentFixture<SharedTextareaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SharedTextareaComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedTextareaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
