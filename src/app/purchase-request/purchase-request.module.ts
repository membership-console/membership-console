import { NgModule } from "@angular/core";

import { ApiConfiguration } from "@purchase-request/api/api-configuration";
import { RequestNewComponent } from "@purchase-request/components/requests/request-new/request-new.component";
import { RequestsComponent } from "@purchase-request/components/requests/requests.component";
import { IsApprovedPipe } from "@purchase-request/pipes/is-approved.pipe";
import { IsPurchasedPipe } from "@purchase-request/pipes/is-purchased.pipe";

import { SharedModule } from "@shared/shared.module";

import { environment } from "@environments/environment";

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
    providers: [
        {
            provide: ApiConfiguration,
            useValue: { rootUrl: environment.PURCHASE_REQUEST_API_ROOT_URL },
        },
    ],
})
export class PurchaseRequestModule {}
