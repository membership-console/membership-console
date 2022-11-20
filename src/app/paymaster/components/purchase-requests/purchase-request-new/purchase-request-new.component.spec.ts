import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PurchaseRequestNewComponent } from "./purchase-request-new.component";

describe("ApplymentNewComponent", () => {
    let component: PurchaseRequestNewComponent;
    let fixture: ComponentFixture<PurchaseRequestNewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PurchaseRequestNewComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PurchaseRequestNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
