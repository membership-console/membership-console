import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ClientNewComponent } from "./client-new.component";

describe("ClientNewComponent", () => {
    let component: ClientNewComponent;
    let fixture: ComponentFixture<ClientNewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ClientNewComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ClientNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
