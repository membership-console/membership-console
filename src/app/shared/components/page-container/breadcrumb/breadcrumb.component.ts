import { Component, OnInit } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { Breadcrumb } from "@shared/models/breadcrumb";
import { BreadcrumbService } from "@shared/services/breadcrumb.service";

@UntilDestroy()
@Component({
    selector: "app-breadcrumb",
    templateUrl: "./breadcrumb.component.html",
    styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent implements OnInit {
    /**
     * パンくずリスト
     */
    breadcrumbs!: Breadcrumb[];

    constructor(private breadcrumbService: BreadcrumbService) {}

    ngOnInit(): void {
        this.breadcrumbService
            .getBreadCrumbs()
            .pipe(untilDestroyed(this))
            .subscribe((breadcrumbs) => (this.breadcrumbs = breadcrumbs));
    }
}
