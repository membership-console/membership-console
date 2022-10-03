import { Component, OnInit } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { Product } from "@shared/models/product";
import { ProductService } from "@shared/services/product.service";

@UntilDestroy()
@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
    product!: Product;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService
            .getActiveProduct()
            .pipe(untilDestroyed(this))
            .subscribe((product) => (this.product = product));
    }
}
