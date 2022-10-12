import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "@app/app-routing.module";
import { AppComponent } from "@app/app.component";
import { DashboardComponent } from "@app/components/dashboard/dashboard.component";
import { ErrorComponent } from "@app/components/error/error.component";
import { LoginComponent } from "@app/components/login/login.component";
import { NotificationsComponent } from "@app/components/notifications/notifications.component";
import { PasswordChangeComponent } from "@app/components/password-reset/password-change/password-change.component";
import { PasswordResetComponent } from "@app/components/password-reset/password-reset.component";

import { IamModule } from "@iam/iam.module";

import { PurchaseRequestModule } from "@purchase-request/purchase-request.module";

import { SharedModule } from "@shared/shared.module";

@NgModule({
    declarations: [
        // Components
        AppComponent,
        DashboardComponent,
        ErrorComponent,
        LoginComponent,
        NotificationsComponent,
        PasswordChangeComponent,
        PasswordResetComponent,
    ],
    imports: [
        SharedModule,
        IamModule,
        PurchaseRequestModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
