import { NgModule } from "@angular/core";

import { ApiConfiguration } from "@paymaster/api/api-configuration";
import { PurchaseRequestNewComponent } from "@paymaster/components/purchase-requests/purchase-request-new/purchase-request-new.component";
import { PurchaseRequestsComponent } from "@paymaster/components/purchase-requests/purchase-requests.component";
import { IsApprovedPipe } from "@paymaster/pipes/is-approved.pipe";
import { IsPurchasedPipe } from "@paymaster/pipes/is-purchased.pipe";

import { SharedModule } from "@shared/shared.module";

import { environment } from "@environments/environment";

@NgModule({
    declarations: [
        // Components
        PurchaseRequestsComponent,
        PurchaseRequestNewComponent,

        // Pipes
        IsApprovedPipe,
        IsPurchasedPipe,
    ],
    imports: [SharedModule],
    providers: [
        {
            provide: ApiConfiguration,
            useValue: { rootUrl: environment.PURCHASE_REQUEST_API_ROOT_URL },
        },
    ],
})
export class PaymasterModule {}
