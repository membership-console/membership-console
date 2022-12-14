import { Component, Input } from "@angular/core";

@Component({
    selector: "app-markdown-viewer",
    templateUrl: "./markdown-viewer.component.html",
    styleUrls: ["./markdown-viewer.component.scss"],
})
export class MarkdownViewerComponent {
    /**
     * Markdownテキスト
     */
    @Input() text: string | undefined;

    /**
     * Markdownファイル
     */
    @Input() file: string | undefined;

    constructor() {}
}
