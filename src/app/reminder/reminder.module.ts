import { NgModule } from "@angular/core";

import { ApiConfiguration } from "@reminder/api/api-configuration";
import { NotificationsComponent } from "@reminder/components/notifications/notifications.component";

import { SharedModule } from "@shared/shared.module";

import { environment } from "@environments/environment";

@NgModule({
    declarations: [NotificationsComponent],
    imports: [SharedModule],
    providers: [
        {
            provide: ApiConfiguration,
            useValue: { rootUrl: environment.PURCHASE_REQUEST_API_ROOT_URL },
        },
    ],
})
export class ReminderModule {}
