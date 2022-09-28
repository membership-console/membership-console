import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "@app/app-routing.module";
import { AppComponent } from "@app/app.component";
import { DashboardComponent } from "@app/components/dashboard/dashboard.component";
import { ErrorComponent } from "@app/components/error/error.component";
import { NotificationsComponent } from "@app/components/notifications/notifications.component";

import { SharedModule } from "@shared/shared.module";

@NgModule({
    declarations: [
        // Components
        AppComponent,
        DashboardComponent,
        ErrorComponent,
        NotificationsComponent,
    ],
    imports: [SharedModule, AppRoutingModule, BrowserModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
