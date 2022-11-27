/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiConfiguration, ApiConfigurationParams } from "./api-configuration";

import { NotificationAPIService } from "./services/notification-api.service";
import { NotificationReminderAPIService } from "./services/notification-reminder-api.service";
import { EmailAPIService } from "./services/email-api.service";
import { HealthCheckAPIService } from "./services/health-check-api.service";

/**
 * Module that provides all services and configuration.
 */
@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        NotificationAPIService,
        NotificationReminderAPIService,
        EmailAPIService,
        HealthCheckAPIService,
        ApiConfiguration,
    ],
})
export class ApiModule {
    static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [
                {
                    provide: ApiConfiguration,
                    useValue: params,
                },
            ],
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: ApiModule, @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
        }
        if (!http) {
            throw new Error(
                "You need to import the HttpClientModule in your AppModule! \n" +
                    "See also https://github.com/angular/angular/issues/20575"
            );
        }
    }
}
