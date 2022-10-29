import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ClientCredentialsDialogComponent } from "./client-credentials-dialog.component";

describe("ClientCredentialsDialogComponent", () => {
    let component: ClientCredentialsDialogComponent;
    let fixture: ComponentFixture<ClientCredentialsDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ClientCredentialsDialogComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ClientCredentialsDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
