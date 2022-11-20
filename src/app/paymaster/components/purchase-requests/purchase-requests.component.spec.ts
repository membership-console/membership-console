import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PurchaseRequestsComponent } from "@paymaster/components/purchase-requests/purchase-requests.component";

describe("ApplymentsComponent", () => {
    let component: PurchaseRequestsComponent;
    let fixture: ComponentFixture<PurchaseRequestsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PurchaseRequestsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PurchaseRequestsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
