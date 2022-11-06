import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "@app/app-routing.module";
import { AppComponent } from "@app/app.component";
import { DashboardComponent } from "@app/components/dashboard/dashboard.component";
import { ErrorComponent } from "@app/components/error/error.component";
import { LoginComponent } from "@app/components/login/login.component";
import { MypageComponent } from "@app/components/mypage/mypage.component";
import { NotificationsComponent } from "@app/components/notifications/notifications.component";
import { PasswordChangeComponent } from "@app/components/password-reset/password-change/password-change.component";
import { PasswordResetComponent } from "@app/components/password-reset/password-reset.component";
import { SettingsComponent } from "@app/components/settings/settings.component";

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
        MypageComponent,
        NotificationsComponent,
        PasswordChangeComponent,
        PasswordResetComponent,
        SettingsComponent,
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
