import { Component, OnInit } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { TitleService } from "@shared/services/title.service";

@UntilDestroy()
@Component({
    selector: "app-title",
    templateUrl: "./title.component.html",
    styleUrls: ["./title.component.scss"],
})
export class TitleComponent implements OnInit {
    /**
     * タイトル
     */
    title = "";

    constructor(private titleService: TitleService) {}

    ngOnInit(): void {
        this.titleService
            .getTitle()
            .pipe(untilDestroyed(this))
            .subscribe((title) => (this.title = title));
    }
}
