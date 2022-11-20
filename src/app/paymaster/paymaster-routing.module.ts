import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PurchaseRequestNewComponent } from "@paymaster/components/purchase-requests/purchase-request-new/purchase-request-new.component";
import { PurchaseRequestsComponent } from "@paymaster/components/purchase-requests/purchase-requests.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "purchase-requests",
        pathMatch: "full",
    },
    {
        path: "purchase-requests",
        data: { breadcrumb: "購入申請", title: null },
        children: [
            {
                path: "",
                component: PurchaseRequestsComponent,
                data: { breadcrumb: null, title: "購入申請リスト" },
            },
            {
                path: "new",
                component: PurchaseRequestNewComponent,
                data: { breadcrumb: "新規申請", title: "新規申請" },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PaymasterRoutingModule {}
