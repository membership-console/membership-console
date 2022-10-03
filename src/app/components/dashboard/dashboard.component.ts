import { Component, OnInit } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { Product } from "@shared/models/product";
import { ProductService } from "@shared/services/product.service";

@UntilDestroy()
@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService
            .getProducts()
            .pipe(untilDestroyed(this))
            .subscribe(
                (products) => (this.products = products.filter((product) => product.visible))
            );
    }
}
