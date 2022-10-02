import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SharedMarkdownEditorComponent } from "./shared-markdown-editor.component";

describe("SharedMarkdownEditorComponent", () => {
    let component: SharedMarkdownEditorComponent;
    let fixture: ComponentFixture<SharedMarkdownEditorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SharedMarkdownEditorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SharedMarkdownEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
