import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "@app/app-routing.module";
import { AppComponent } from "@app/app.component";

import { SharedModule } from "@shared/shared.module";

@NgModule({
    declarations: [AppComponent],
    imports: [SharedModule, AppRoutingModule, BrowserModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
