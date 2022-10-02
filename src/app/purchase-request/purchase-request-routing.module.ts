import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RequestNewComponent } from "@purchase-request/components/requests/request-new/request-new.component";
import { RequestsComponent } from "@purchase-request/components/requests/requests.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "requests",
        pathMatch: "full",
    },
    {
        path: "requests",
        data: { breadcrumb: "申請リスト", title: null },
        children: [
            {
                path: "",
                component: RequestsComponent,
                data: { breadcrumb: null, title: "申請リスト" },
            },
            {
                path: "new",
                component: RequestNewComponent,
                data: { breadcrumb: "新規申請", title: "新規申請" },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PurchaseRequestRoutingModule {}
