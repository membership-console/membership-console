import { NgModule } from "@angular/core";

import { RequestNewComponent } from "@purchase-request/components/requests/request-new/request-new.component";
import { RequestsComponent } from "@purchase-request/components/requests/requests.component";

import { SharedModule } from "@shared/shared.module";

@NgModule({
    declarations: [RequestsComponent, RequestNewComponent],
    imports: [SharedModule],
})
export class PurchaseRequestModule {}
