import { NgModule } from "@angular/core";

import { RequestNewComponent } from "@purchase-request/components/requests/request-new/request-new.component";
import { RequestsComponent } from "@purchase-request/components/requests/requests.component";
import { IsApprovedPipe } from "@purchase-request/pipes/is-approved.pipe";
import { IsPurchasedPipe } from "@purchase-request/pipes/is-purchased.pipe";

import { SharedModule } from "@shared/shared.module";

@NgModule({
    declarations: [
        // Components
        RequestsComponent,
        RequestNewComponent,

        // Pipes
        IsApprovedPipe,
        IsPurchasedPipe,
    ],
    imports: [SharedModule],
})
export class PurchaseRequestModule {}
