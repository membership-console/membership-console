import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RequestNewComponent } from "./request-new.component";

describe("RequestNewComponent", () => {
    let component: RequestNewComponent;
    let fixture: ComponentFixture<RequestNewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RequestNewComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(RequestNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
